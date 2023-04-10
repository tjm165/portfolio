import { useState } from "react";
import { Link } from "react-router-dom";
import { AbsoluteToast, Severity, Position } from "../../common";

export type BlogCardProps = {
  title: string;
  description: string;
  path: string;
  image?: string;
  bgcolor: string;
};

export default function BlogCard({
  title,
  description,
  path,
  image,
  bgcolor,
}: BlogCardProps) {
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

      <div style={{ display: "flex", justifyContent: "center" }}>
        <img height="300vh" src={image || "https://picsum.photos/200/300"} />
      </div>

      {title}

      {description}
    </>
  );
}
