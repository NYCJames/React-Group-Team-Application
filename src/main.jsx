import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "bootstrap/dist/css/bootstrap.css";
import App from "./App.jsx";
// import "bootstrap/dist/js/bootstrap.bundle.js";

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <App></App>,
//     children: [
//       {
//         index: true,
//         element: <Content></Content>,
//       },
//       {
//         path: "test2",
//         element: <Employees></Employees>,
//       },
//     ],
//   },
//   {
//     path: "/test3",
//     element: <Header></Header>,
//   },
// ]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
