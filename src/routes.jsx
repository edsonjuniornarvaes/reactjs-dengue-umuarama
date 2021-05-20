/* SECTION: Standard imports. */
import { Route, BrowserRouter, Switch, Redirect } from "react-router-dom";

/* SECTION: Query imports. */
import { useAuthContext } from "./context/AuthContext";

/* SECTION: Local Components imports. */
import Dashboard from "./pages/dashboard";
import Login from "./pages/auth/login";
import Logout from "./pages/auth/Logout";
import NewReport from "./pages/denunciations/new";
import ListOfComplaints from "./pages/denunciations";

const PrivateRoute = ({ component: Component, ...rest }) => {
  const { isAuthorized } = useAuthContext();

  return (
    <Route
      {...rest}
      render={(props) =>
        isAuthorized && "undefined" ? (
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
        <PrivateRoute component={NewReport} path="/denuncias/novo" />
        <PrivateRoute component={ListOfComplaints} path="/denuncias/lista" />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
