import { useState } from "react";
import { Link } from "react-router-dom";

import { Item, Button, Icon, Divider, Dropdown } from "semantic-ui-react";
import { UndecoratedLink } from "../../../common";

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

  // TODO make this a util
  async function copyToClipboard(data: string) {
    await navigator.clipboard.writeText(data);
  }

  async function handleCopyToClipboard() {
    await copyToClipboard(fullUrl);
    setShowCopySuccess(true);
    setTimeout(function () {
      setShowCopySuccess(false);
    }, 3000); // 3000 milliseconds = 3 seconds
  }

  // TODO Make this rows not cards
  return (
    <>
      <Divider />
      <Item>
        <Item.Content>
          <Item.Header>
            <UndecoratedLink to={path}>
              <>{title}</>
            </UndecoratedLink>
          </Item.Header>

          <Item.Description>{description}</Item.Description>
          <Button
            icon
            onClick={() => handleCopyToClipboard()}
            color={showCopySuccess ? "green" : undefined}
          >
            <Icon name="linkify" />
          </Button>
        </Item.Content>
        {image && <Item.Image size="small" src={image} />}
      </Item>
      {/*  */}
    </>
  );
}
