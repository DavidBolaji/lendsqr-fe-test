import { RouterProvider, createBrowserRouter } from "react-router-dom";
import RootLayout from "./layouts/root-layout";
import LoginPage from "./pages/login-page/login-page";
import DashboardLayout from "./layouts/dashboard/dashboard-layout";
import HomePage from "./pages/dashboard/home-page/home-page";
import SingleUserPage from "./pages/dashboard/[userId]";
import NotFoundPage from "./pages/not-found/not-found-page";


const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <LoginPage />,
      },
    ],
  },
  {
    path: '/dashboard',
    element: <DashboardLayout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: ':userId',
        element: <SingleUserPage />,
      },
    ],
  },
  {
    path: '*',
    element: <NotFoundPage />,
  },
]);


function App() {
  return <RouterProvider router={router} />;
}

export default App
