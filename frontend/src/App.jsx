import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
} from "react-router-dom";
import { useState, useEffect } from "react";
import EchoProvider from "./store/cart-context";
import { verify } from "./api";

import RootLayout from "./pages/RootLayout";
import LandingPage from "./pages/LandingPage";
import HomePage from "./pages/HomePage";
import Add from "./pages/Add";
import View from "./pages/View";
import Error from "./pages/Error";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";

function ProtectedRoute({ children }) {
  const [isAuthenticated, setIsAuthenticated] = useState(null); 
  const token = localStorage.getItem("token");

  useEffect(() => {
    async function checkAuth() {
      if (!token) {
        setIsAuthenticated(false);
        return;
      }
      try {
        const response = await verify(token);
        if (response.status === 200) {
          setIsAuthenticated(true); 
        } else {
          setIsAuthenticated(false);
        }
      } catch (error) {
        console.error("Token verification failed:", error);
        setIsAuthenticated(false);
      }
    };
    checkAuth();
  }, [token]);

  if (isAuthenticated === null) {
    return <div>Loading...</div>;
  }

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  return children;
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <Error />,
    children: [
      { index: true, element: <LandingPage /> },
      {
        path: "home",
        element: (
          <ProtectedRoute>
            <HomePage />
          </ProtectedRoute>
        ),
      },
      {
        path: "home/add",
        element: (
          <ProtectedRoute>
            <Add />
          </ProtectedRoute>
        ),
      },
      {
        path: "home/view",
        element: (
          <ProtectedRoute>
            <View />
          </ProtectedRoute>
        ),
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/signUp",
    element: <SignUp />,
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
