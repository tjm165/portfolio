import { useState } from "react";
import { Link } from "react-router-dom";
import { AbsoluteToast, Position, UndecoratedLink } from "../../../common";
import { Image as ImageComponent, Item } from "semantic-ui-react";

export type BlogItemProps = {
  title: string;
  description: string;
  path: string;
  image?: string;
};

export default function BlogItem({
  title,
  description,
  path,
  image,
}: BlogItemProps) {
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
        text="Copied to clipboard!"
        position={Position.BOTTOM_LEFT}
      />

      <Item>
        <Item.Image
          size="tiny"
          src={image || "https://picsum.photos/300/300"}
        />

        <Item.Content>
          <Item.Header>
            <Link to={path}>
              <>{title}</>
            </Link>
          </Item.Header>

          <Item.Description>{description}</Item.Description>
        </Item.Content>
        <Item.Content>
          <button onClick={() => copyToClipboard(fullUrl)}>Copy</button>
        </Item.Content>
      </Item>
      {/*  */}
    </>
  );
}
