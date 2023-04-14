import { useState } from "react";
import { createMedia } from "@artsy/fresnel";

import { Item, Button, Icon, Divider, Image, Grid } from "semantic-ui-react";
import { UndecoratedLink } from "../../../common";

const { MediaContextProvider, Media } = createMedia({
  breakpoints: {
    mobile: 0,
    tablet: 768,
    computer: 1024,
  },
});

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
      <MediaContextProvider>
        <Divider />

        <Item>
          <Item.Content>
            <Grid>
              <Grid.Column width={12}>
                <Item.Header>
                  <UndecoratedLink to={path}>
                    <>{title}</>
                  </UndecoratedLink>
                </Item.Header>
                <Item.Meta>Description</Item.Meta>
                <Item.Description>{description}</Item.Description>
              </Grid.Column>

              <Grid.Column width={4}>
                <Grid.Row>{image && <Image src={image} />}</Grid.Row>

                <Grid.Row>
                  <Media greaterThan="mobile">
                    <Item.Extra>
                      <Button
                        floated="right"
                        icon
                        onClick={() => handleCopyToClipboard()}
                        color={showCopySuccess ? "green" : "blue"}
                      >
                        <Icon name="linkify" />
                      </Button>
                    </Item.Extra>
                  </Media>
                </Grid.Row>

                <Media at="mobile">
                  <Grid.Row>
                    <Button
                      icon
                      onClick={() => handleCopyToClipboard()}
                      color={showCopySuccess ? "green" : undefined}
                    >
                      <Icon name="linkify" />
                    </Button>
                  </Grid.Row>
                </Media>
              </Grid.Column>
            </Grid>
          </Item.Content>{" "}
        </Item>
      </MediaContextProvider>
    </>
  );
}
