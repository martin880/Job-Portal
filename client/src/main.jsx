import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import router from "./router/router";
import { ChakraProvider, ColorModeScript } from "@chakra-ui/react";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ChakraProvider>
      <ColorModeScript initialColorMode="light" />
      <RouterProvider router={router} />
    </ChakraProvider>
  </React.StrictMode>
);
