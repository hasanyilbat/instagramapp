import PrivateRoute from "../components/PrivateRoute";
import Register from "../pages/Register";
import AuthLayout from "../pages/auth";
import MainLayout from "../pages/MainLayout";
import Login from "../pages/Login";
import ProfileLayout from "../pages/profile/Index";
import ProfileTagged from "../pages/profile/ProfileTagged";
import ProfilePosts from "../pages/profile/ProfilePosts";
import Home from "../pages/Home";
import Logout from "../pages/Logout";
import InboxLayout from "../pages/inbox/IndexLayout";
import Inbox from "../pages/inbox/Inbox";
import Chat from "../pages/inbox/components/chat/Chat";
import Favorites from "../pages/Favorites";
import Following from "../pages/Following";

const routes = [
  {
    path: "/",
    element: <MainLayout />,
    auth: true,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "logout",
        element: <Logout />,
      },
      {
        path: ":username",
        element: <ProfileLayout />,
        children: [
          {
            index: true,
            element: <ProfilePosts />,
          },
          {
            path: "tagged",
            element: <ProfileTagged />,
          },
        ],
      },
      {
        path: "inbox",
        element: <InboxLayout />,
        children: [
          {
            index: true,
            element: <Inbox />,
          },
          {
            path: ":conversationId",
            element: <Chat />,
          },
        ],
      },
      {
        path: "favorites",
        element: <Favorites />,
      },
      {
        path: "following",
        element: <Following />,
      },
    ],
  },

  {
    path: "/auth",
    element: <AuthLayout />,
    children: [
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "register",
        element: <Register />,
      },
    ],
  },
];

const authCheck = (routes) =>
  routes.map((route) => {
    if (route?.auth) {
      route.element = <PrivateRoute>{route.element}</PrivateRoute>;
    }
    if (route?.children) {
      route.children = authCheck(route.children);
    }
    return route;
  });

export default authCheck(routes);
