import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ListaViagens from "./ListaViagens";
import Cabecalho from "./Cabecalho";
import FormularioViagem from "./FormularioViagem";
import "./styles.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <FormularioViagem />
  },
  {
    path: "/adicionar",
    element: <ListaViagens />
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Cabecalho />
    <RouterProvider router={router} />
  </React.StrictMode>
);
