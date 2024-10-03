import { Helmet, HelmetProvider } from "react-helmet-async";
import { Button } from "./components/ui/button";
import { router } from "./routes";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

export function App() {

  return (
    <HelmetProvider>
      <Helmet titleTemplate="%s | pizza.shop" />
      <RouterProvider router={router} />
    </HelmetProvider>
  )
}

