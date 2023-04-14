import { useState } from "react";
import { Link } from "react-router-dom";

import { Item, Button, Icon, Divider, Image, Grid } from "semantic-ui-react";
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
          <Grid>
            <Grid.Column width={9}>
              <Grid.Row>
                <Item.Header>
                  <UndecoratedLink to={path}>
                    <>{title}</>
                  </UndecoratedLink>
                </Item.Header>
                <Item.Meta>Description</Item.Meta>
                <Item.Description>{description}</Item.Description>
              </Grid.Row>
              <Grid.Row
                style={{
                  display: "flex",
                  alignItems: "flex-end",
                  justifyContent: "flex-end",
                }}
              >
                <Button
                  icon
                  onClick={() => handleCopyToClipboard()}
                  color={showCopySuccess ? "green" : undefined}
                >
                  <Icon name="linkify" />
                </Button>
              </Grid.Row>
            </Grid.Column>

            {image && (
              <Grid.Column width={4}>
                <Grid.Row>
                  <Image src={image} />
                </Grid.Row>
              </Grid.Column>
            )}
          </Grid>
        </Item.Content>
      </Item>
      {/*  */}
    </>
  );
}
