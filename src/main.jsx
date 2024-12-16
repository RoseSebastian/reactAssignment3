import { createRoot } from "react-dom/client";
import App from "./components/App.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ProductDetails from "./components/ProductDetails.jsx";
import Root from "./routes/root.jsx"

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
        {
            path: "/",
            element: <App/>
        },
        {
            path: "/product-details/:id",
            element: <ProductDetails/>
        }
    ]
  }
]);

createRoot(document.getElementById("root")).render(
  <>
    <RouterProvider router={router} />
  </>
);
