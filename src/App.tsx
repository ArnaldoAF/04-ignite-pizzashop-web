import { Button } from "./components/ui/button";
import { router } from "./routes";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

export function App() {

  return (
    <RouterProvider router={router} />
  )
}

