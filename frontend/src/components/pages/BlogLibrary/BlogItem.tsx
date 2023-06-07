import { useState } from "react";
import { createMedia } from "@artsy/fresnel";

import { Item, Button, Icon, Divider, Popup } from "semantic-ui-react";
import { UndecoratedLink } from "../../common";

import { ResultObj } from "@tommy/types";

const { MediaContextProvider, Media } = createMedia({
  breakpoints: {
    mobile: 0,
    tablet: 768,
    computer: 1024,
  },
});

export type BlogItemProps = ResultObj;

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
      <MediaContextProvider>
        <Divider />

        <Item>
          <Item.Content style={{ display: "flex", flexDirection: "column" }}>
            <Item.Header>
              <UndecoratedLink to={subPath}>
                <>{title}</>
              </UndecoratedLink>
            </Item.Header>

            <Item.Meta>Description</Item.Meta>
            <Item.Description>{description}</Item.Description>
            <Item.Extra style={{ marginTop: "auto" }}>
              <Popup
                content={showCopySuccess ? "Link Copied!" : "Copy Link"}
                on={["hover"]}
                trigger={
                  <Button
                    size="small"
                    icon
                    circular
                    onClick={() => handleCopyToClipboard()}
                    color={showCopySuccess ? "green" : undefined}
                  >
                    <Icon name="linkify" />
                  </Button>
                }
              />
            </Item.Extra>
          </Item.Content>
          <Media greaterThan="mobile">
            {image && <Item.Image size="small" src={image} />}
          </Media>
        </Item>
      </MediaContextProvider>
    </>
  );
}
