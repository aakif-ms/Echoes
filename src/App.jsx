import { createBrowserRouter, RouterProvider } from "react-router-dom";

import RootLayout from "./pages/RootLayout";
import LandingPage from "./pages/LandingPage";
import HomePage from "./pages/HomePage";
import Error from "./pages/Error";

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <RootLayout />,
      errorElement: <Error />,
      children: [
        { index: true, element: <LandingPage /> },
        { path: "home", element: <HomePage /> },
      ],
    },
  ],
  {
    future: {
      v7_startTransition: true,
    },
  }
);

export default function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}
