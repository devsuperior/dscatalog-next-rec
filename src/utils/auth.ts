import queryString from "query-string";
import jwtDecode from "jwt-decode";
import { api, AUTH_TOKEN } from "./api";
import { Role, LoginResponse, AccessToken } from "../@types";

export const loginUser = async (username: string, password: string) => {
  const data = queryString.stringify({
    username,
    password,
    grant_type: "password",
  });

  await api
    .post("/oauth/token", data, {
      headers: {
        Authorization: AUTH_TOKEN,
        "Content-Type": "application/x-www-form-urlencoded",
      },
    })
    .then((res) => {
      const { access_token } = res.data;

      localStorage.setItem("@dscatalog/token", JSON.stringify(access_token));
      return res.data;
    })
    .catch((err) => console.warn(err));
};

export const getSessionData = () => {
  const sessionData = localStorage.getItem("authData") || "{}";
  const parsedSessionData = JSON.parse(sessionData);

  return parsedSessionData as LoginResponse;
};

export const getAccessTokenDecoded = () => {
  const sessionData = getSessionData();

  try {
    const tokenDecoded = jwtDecode(sessionData.access_token);
    return tokenDecoded as AccessToken;
  } catch (error) {
    return {} as AccessToken;
  }
};

export const isTokenValid = () => {
  const { exp } = getAccessTokenDecoded();

  return Date.now() <= exp * 1000;
};

export const isAuthenticated = () => {
  const sessionData = getSessionData();

  return sessionData.access_token && isTokenValid();
};

export const isAllowedByRole = (routeRoles: Role[] = []) => {
  if (routeRoles.length === 0) {
    return true;
  }

  const { authorities } = getAccessTokenDecoded();

  return routeRoles.some((role) => authorities?.includes(role));
};

export const logout = () => {
  localStorage.removeItem("authData");
  //   history.replace("/auth/login");
};
