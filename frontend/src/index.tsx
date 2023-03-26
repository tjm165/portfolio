import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { createBrowserRouter, RouterProvider, Route } from "react-router-dom";
import { Home, About, ErrorPage, Blog, Contact } from "./components/pages";
import HomeV2 from "./components/pages/homeV2";
import BlogPost, {
  blogPostLoader,
} from "./components/pages/blog/BlogPostWrapper";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App view={<Home />} />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/2",
    element: <App view={<HomeV2 />} />,
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
    path: "/contact",
    element: <App view={<Contact />} />,
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
