import { Helmet, HelmetProvider } from "react-helmet-async";
import { Button } from "./components/ui/button";
import { router } from "./routes";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { ThemeProvider } from "./components/theme/theme-provider";

import { Toaster } from 'sonner'

export function App() {

  return (
    <HelmetProvider>
      <ThemeProvider defaultTheme="dark" storageKey="pizzashop-theme">

        <Helmet titleTemplate="%s | pizza.shop" />
        <Toaster richColors /> 
        <RouterProvider router={router} />
      </ThemeProvider>
    </HelmetProvider>
  )
}

