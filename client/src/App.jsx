import { createBrowserRouter, RouterProvider } from "react-router-dom";

import {
  Home,
  Layout,
  Properties,
  Login,
  Profile,
  Signup,
  Property,
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
        { path: "/profile", element: <Profile /> },
        { path: "/login", element: <Login /> },
        { path: "/signup", element: <Signup /> },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
