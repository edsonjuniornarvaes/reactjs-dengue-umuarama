/* ANCHOR: 🧩 Standard imports. */
import { Route, BrowserRouter, Switch, Redirect } from "react-router-dom";

/* ANCHOR: 📚 Lib imports. */
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

const PrivateRoute = ({ component: Component, ...rest }) => {
  const { isAuthorized } = useAuthContext();

  let { pathname } = useLocation();

  return (
    <Route
      {...rest}
      render={(props) =>
        (isAuthorized && "undefined") || pathname === "/" ? (
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
        <PrivateRoute component={Logout} path="/auth/logout" />
        <PrivateRoute component={Report} path="/denuncias/novo" />
        <PrivateRoute component={ListOfComplaints} path="/denuncias/lista" />
        <Route component={UserForm} path="/users/new" />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
