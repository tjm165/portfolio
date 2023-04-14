import { useState } from "react";
import { Link } from "react-router-dom";

import { Item, Button, Icon, Divider, Dropdown } from "semantic-ui-react";

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
  }

  // TODO Make this rows not cards
  return (
    <>
      <Divider />
      <Item>
        <Item.Content>
          <Item.Header>
            <Link to={path}>
              <>{title}</>
            </Link>
          </Item.Header>

          <Item.Description>{description}</Item.Description>
        </Item.Content>
        <Item.Content>
          <Button
            icon
            labelPosition="left"
            onClick={() => handleCopyToClipboard()}
            color={showCopySuccess ? "green" : undefined}
          >
            <Icon name="linkify" />
            {showCopySuccess ? "Copied" : "Copy Link"}
          </Button>
        </Item.Content>

        {image && <Item.Image size="tiny" src={image} />}
      </Item>
      {/*  */}
    </>
  );
}
