import { Route, BrowserRouter } from "react-router-dom";

import Dashboard from "./pages/dashboard";
import Login from "./pages/auth/login";

const Routes = () => {
  return (
    <BrowserRouter>
      <Route component={Dashboard} path="/" exact />
      <Route component={Login} path="/Auth/Login" />
    </BrowserRouter>
  );
};

export default Routes;
