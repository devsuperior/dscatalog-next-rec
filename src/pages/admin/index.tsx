import { useEffect, useState } from "react";
import { isAuthenticated } from "../../utils/auth";

import Login from "./auth";
import DashboardPage from "./dashboard";

export default function Admin() {
  const [logged, setLogged] = useState(false);

  useEffect(() => {
    if (localStorage.getItem("@dscatalog/token")) {
      setLogged(true);
    } else {
      setLogged(false);
    }
  }, []);

  if (logged) {
    return <DashboardPage />;
  } else {
    return <Login />;
  }
}
