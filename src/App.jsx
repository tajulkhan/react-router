import "./index.css";
import HomePage from "./pages/HomePage";
import ElectronicsPage from "./pages/ElectronicsPage";
import BooksPage from "./pages/BooksPage";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import ElectronicDetailsPage from "./pages/ElectronicDetailsPage";

const router = createBrowserRouter([
  { path: "/", element: <HomePage /> },
  {
    path: "/electronics",
    element: (
      <div className="layout">
        <ElectronicsPage /> <Outlet />
      </div>
    ),
    children: [{ path: ':id', element: <ElectronicDetailsPage /> }],
  },
  { path: "/books", element: <BooksPage /> },
]);
export default function App() {
  return <RouterProvider router={router}></RouterProvider>;
}
