import { createBrowserRouter } from "react-router-dom";
import Layout from "./layouts/Layout";
import Productos from "./views/Productos";

export const router = createBrowserRouter([
    {
        path: './',
        element: <Layout />,
        children: [
            {
                index: true,
                element: <Productos />
            },
        ],
    }
])