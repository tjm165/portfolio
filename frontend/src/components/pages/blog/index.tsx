import { Outlet } from "react-router-dom";
import Page from "../Page";
import BlogLibrarySection from "./BlogLibrarySection";

export default function BlogPage() {
  return (
    <>
      <Outlet />
      <Page PageSections={[BlogLibrarySection]} />
    </>
  );
}
