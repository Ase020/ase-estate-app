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

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        { path: "/", element: <Home /> },
        { path: "/properties", element: <Properties /> },
        { path: "/properties/:id", element: <Property /> },
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
        },
        { path: "/profile/update", element: <EditProfile /> },
        { path: "/properties/add", element: <NewProperty /> },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
