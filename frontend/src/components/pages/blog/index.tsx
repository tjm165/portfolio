import HeadingSection from "./HeadingSection";
import { Outlet, useLoaderData } from "react-router-dom";

export default function Blog() {
  return (
    <>
      <Outlet />
      <HeadingSection />
    </>
  );
}
