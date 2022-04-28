import React from "react";
import { Route,Switch,Redirect } from 'react-router-dom';
import Landingpage from "./htmlcss.jsx";
import Logicalpart from "./tasklogicalpart.jsx";
 function AppRoutes() {
  return (
    <div>

      <Route exact path="/" component={Landingpage} />
        <Route exact path="/logicalpart" component={Logicalpart} />
    </div>
  );
}
export default AppRoutes;