import { Outlet } from "react-router-dom";
import Page from "../Page";
import BlogLibrarySection from "./BlogLibrarySection";

// maybe flatten out the two blog pages since they aren't even related
export default function BlogPage() {
  return (
    <>
      <Outlet />
      <Page PageSections={[BlogLibrarySection]} />
    </>
  );
}
