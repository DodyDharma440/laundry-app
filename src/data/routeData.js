import {
  HomeScreen,
  SplashScreen,
  OrdersScreen,
  AccountScreen,
} from "../pages";

export const routeData = [
  {
    id: 1,
    name: "Home",
    component: HomeScreen,
    options: {
      headerShown: false,
    },
  },
  {
    id: 2,
    name: "Orders",
    component: OrdersScreen,
    options: {
      headerShown: false,
    },
  },
  {
    id: 3,
    name: "Account",
    component: AccountScreen,
    options: {
      headerShown: false,
    },
  },
];
