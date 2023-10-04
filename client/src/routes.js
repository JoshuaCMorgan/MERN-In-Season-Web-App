import {
  HomeLayout,
  Register,
  Login,
  DashboardLayout,
  Error,
  Admin,
  Profile,
  AllProduce,
  List,
  About,
} from "./pages";

import { action as registerAction } from "./pages/Register";
import { action as loginAction } from "./pages/Login";
import { loader as dashboardLoader } from "./pages/DashboardLayout";
import { loader as allProduceLoader } from "./pages/AllProduce";
import { action as profileAction } from "./pages/Profile";
import { action as addItemAction } from "./pages/AddItem";
import { loader as listLoader } from "./pages/List";
import { action as toggleItemAction } from "./pages/List";

const routesConfig = [
  {
    path: "/",
    element: <HomeLayout />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <AllProduce />,
        loader: allProduceLoader,
      },
      {
        path: "register",
        element: <Register />,
        action: registerAction,
      },
      {
        path: "login",
        element: <Login />,
        action: loginAction,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "add-item",
        action: addItemAction,
      },

      {
        path: "dashboard",
        element: <DashboardLayout />,
        loader: dashboardLoader,
        children: [
          {
            index: true,
            element: <List />,
            loader: listLoader,
            action: toggleItemAction,
          },
          {
            path: "profile",
            element: <Profile />,
            action: profileAction,
          },
          {
            path: "admin",
            element: <Admin />,
          },
        ],
      },
    ],
  },
];

export default routesConfig;
