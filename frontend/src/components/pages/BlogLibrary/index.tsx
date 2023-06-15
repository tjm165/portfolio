import { Outlet } from "react-router-dom";
import Page from "../Page";
import BlogLibrarySection from "./BlogLibrarySection";

// maybe flatten out the two blog pages since they aren't even related
export default function BlogLibrary() {
  return (
    <>
      <Outlet />
      <Page tabTitle="Blog" PageSections={[BlogLibrarySection]} />
    </>
  );
}
