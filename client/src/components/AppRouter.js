import * as React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom'
import { authRoutes, publicRoutes } from "../routes";
import { SHOP_ROUTE } from "../utils/consts";
import { Context } from "../index";

const AppRouter = () => {
  const { user } = React.useContext(Context)
  console.log(user)
  return (
    <Switch>

      {
        user.isAuth && authRoutes.map(({path, Component}) =>
          <Route
            path={path}
            component={Component}
            exact
            key={path} />
        )
      }
      {
        publicRoutes.map(({path, Component}) =>
          <Route
            path={path}
            component={Component}
            exact
            key={path} />
        )
      }
      <Redirect to={SHOP_ROUTE} />
    </Switch>
  );
};

export default AppRouter;