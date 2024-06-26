import { createBrowserRouter, RouterProvider } from "react-router-dom";

import {
  Home,
  Properties,
  Login,
  Profile,
  Signup,
  Property,
  NewProperty,
  EditProfile,
  Layout,
  RequireAuth,
} from "./pages";
import { profileLoader, propertiesLoader, propertyLoader } from "./lib/loaders";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        { path: "/", element: <Home /> },
        {
          path: "/properties",
          element: <Properties />,
          loader: propertiesLoader,
        },
        {
          path: "/properties/:id",
          element: <Property />,
          loader: propertyLoader,
        },
        { path: "/login", element: <Login /> },
        { path: "/signup", element: <Signup /> },
      ],
    },
    {
      path: "/",
      element: <RequireAuth />,
      children: [
        {
          path: "/profile",
          element: <Profile />,
          loader: profileLoader,
        },
        { path: "/profile/update", element: <EditProfile /> },
        { path: "/properties/add", element: <NewProperty /> },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
