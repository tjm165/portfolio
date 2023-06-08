import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { createBrowserRouter, RouterProvider, Route } from "react-router-dom";
import { ErrorPage, BlogLibrary, Home } from "./components/pages";
import BlogPost, { blogPostLoader } from "./components/pages/BlogPost";
import { Menu } from "semantic-ui-react";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App view={<Home />} />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/blog",
    element: <App view={<BlogLibrary />} />,
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

const navConfig: { label: string; path: string }[] = [
  {
    label: "Home",
    path: "/",
  },
  {
    label: "Blog",
    path: "/blog",
  },
];

export const NavItems = () => {
  return (
    <>
      {navConfig.map((item, i) => {
        return (
          <Menu.Item index={i} as="a" active>
            {item.label}
          </Menu.Item>
        );
      })}
    </>
  );
};

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
