/* eslint-disable react-hooks/exhaustive-deps */
/* ANCHOR: 🧩 Standard imports. */
import { useEffect, useState } from "react";
import { Route, BrowserRouter, Switch, Redirect } from "react-router-dom";

/* ANCHOR: 📚 Lib imports. */
import Cookies from "js-cookie";
import { useLocation } from "react-router-dom";

/* ANCHOR: 📨 Query imports. */
import { useAuthContext } from "./context/AuthContext";

/* ANCHOR: 📦 Component imports. */
import Dashboard from "./pages/dashboard";
import Login from "./pages/auth/login";
import Logout from "./pages/auth/Logout";
import Report from "./pages/report/new/report";
import ListOfComplaints from "./pages/report/list";
import UserForm from "./pages/users/new";
import DengueCharts from "./pages/charts";

const PrivateRoute = ({ component: Component, ...rest }) => {
  const { isAuthorized } = useAuthContext();
  let { pathname } = useLocation();

  const [handleCookie, setHandleCookie] = useState(() => {
    if (Cookies.getJSON("auth")) return Cookies.getJSON("auth");
    if (!Cookies.getJSON("auth")) return null;
  });

  useEffect(() => {
    const authCookie = Cookies.getJSON("auth");
    setHandleCookie(authCookie);
    console.log(handleCookie);
  }, []);

  return (
    <Route
      {...rest}
      render={(props) =>
        isAuthorized || pathname === "/" ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{ pathname: "/auth/login", state: { from: props.location } }}
          />
        )
      }
    />
  );
};

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route component={Dashboard} path="/" exact />
        <Route component={Login} path="/auth/login" />
        <Route component={Report} path="/denuncias/novo" />
        <PrivateRoute component={Logout} path="/auth/logout" />
        <PrivateRoute component={UserForm} path="/users/new" />
        <PrivateRoute component={ListOfComplaints} path="/denuncias/lista" />
        <Route component={DengueCharts} path="/charts" />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
