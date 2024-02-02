import React from "react";
import ReactDOM from "react-dom/client";
import App from "./router/App.jsx";
import Home from "./router/Home.jsx";
import Bag from "./router/Bag.jsx";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./router/App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Provider } from "react-redux";
import myntraStore from "./store/index.js";
import MessageFail from "./router/MessageFail.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <Home /> },
      { path: "bag", element: <Bag /> },
      { path: "messagefail", element: <MessageFail /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={myntraStore}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
