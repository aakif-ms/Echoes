import { createBrowserRouter, RouterProvider } from "react-router-dom";
import EchoProvider from "./store/cart-context";

import RootLayout from "./pages/RootLayout";
import LandingPage from "./pages/LandingPage";
import HomePage from "./pages/HomePage";
import Add from "./pages/Add";
import View from "./pages/View";
import Error from "./pages/Error";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <Error />,
    children: [
      { index: true, element: <LandingPage /> },
      {
        path: "home",
        element: <HomePage />,
      },
      {
        path: "home/add",
        element: <Add />,
      },
      {
        path: "home/view",
        element: <View />,
      },
    ],
  },
]);

export default function App() {
  return (
    <div>
      <EchoProvider>
        <RouterProvider router={router} />
      </EchoProvider>
    </div>
  );
}
