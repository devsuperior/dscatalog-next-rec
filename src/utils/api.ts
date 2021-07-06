import axios from "axios";

export const api = axios.create({
  baseURL: "https://aula-implantacao.herokuapp.com/",
});

export const AUTH_TOKEN = "Basic ZHNjYXRhbG9nOmRzY2F0YWxvZzEyMw==";
export const CLIENT_ID = process.env.REACT_APP_CLIENT_ID ?? "dscatalog";
export const CLIENT_SECRET =
  process.env.REACT_APP_CLIENT_SECRET ?? "dscatalog123";
