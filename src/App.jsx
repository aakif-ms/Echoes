import { createBrowserRouter, RouterProvider } from "react-router-dom";

import RootLayout from "./pages/RootLayout";
import LandingPage from "./pages/LandingPage";
import HomePage from "./pages/HomePage";

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout/>,
    children:[
      {index: true, element: <LandingPage/>},
      {path:'home', element: <HomePage/>}
    ],
  }
])

export default function App() {
  return (
    <div>
      <RouterProvider router={router}/>
    </div>
  )
}