import { useState } from "react";
import { Link } from "react-router-dom";
import { AbsoluteToast, Severity, Position } from "../../common";

export type BlogCardProps = {
  title: string;
  description: string;
  path: string;
};

export default function BlogCard({ title, description, path }: BlogCardProps) {
  const subPath = `/blog/${path}`;
  const fullUrl = `${window.location.origin}/blog/${path}`;
  const [showCopySuccess, setShowCopySuccess] = useState(false);

  async function copyToClipboard(data: string) {
    await navigator.clipboard.writeText(data);
    setShowCopySuccess(true);
  }

  // TODO Make this rows not cards
  return (
    <>
      <AbsoluteToast
        show={showCopySuccess}
        setShow={setShowCopySuccess}
        severity={Severity.SUCCESS}
        text="Copied to clipboard"
        position={Position.BOTTOM_LEFT}
      />

      {title}

      {description}
    </>
  );
}
