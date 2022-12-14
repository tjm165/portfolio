import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { createBrowserRouter, RouterProvider, Route } from "react-router-dom";
import { Home, About, ErrorPage, Blog } from "./components/pages";
import { blogPostLoader } from "./components/pages/blog/blog-post";
import BlogPost from "./components/pages/blog/blog-post";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App view={<Home />} />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/about",
    element: <App view={<About />} />,
  },
  {
    path: "/blog",
    element: <App view={<Blog />} />,
  },
  {
    children: [
      {
        path: "blog/:blogId",
        element: <App view={<BlogPost />} />,
        loader: blogPostLoader,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
