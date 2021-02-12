import {
  ADMIN_ROUTE,
  BASKET_ROUTE,
  HOME_ROUTE,
  JEWELRY_ROUTE,
  LOGIN_ROUTE,
  REGISTRATION_ROUTE, SEARCH_ROUTE,
  SHOP_ROUTE
} from "./utils/consts";
import Admin from "./pages/Admin";
import Basket from "./pages/Basket";
import Shop from "./pages/Shop";
import Auth from "./pages/Auth";
import ItemPage from "./pages/ItemPage";
import Home from "./pages/Home";
import SearchComp from "./pages/SearchComp";

export const authRoutes = [
  {
    path: ADMIN_ROUTE,
    Component: Admin
  },
  {
    path: BASKET_ROUTE,
    Component: Basket
  },
];



export const publicRoutes = [
  {
    path: SEARCH_ROUTE,
    Component: SearchComp
  },
  {
    path: HOME_ROUTE,
    Component: Home
  },
  {
    path: SHOP_ROUTE,
    Component: Shop
  },
  {
    path: LOGIN_ROUTE,
    Component: Auth
  },
  {
    path: REGISTRATION_ROUTE,
    Component: Auth
  },
  {
    path: JEWELRY_ROUTE + '/:id',
    Component: ItemPage
  },
];