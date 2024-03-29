import React from "react";
import TagList from "../landings/modules/TagList";
import Time from "./Time";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

const BlogPostTemplate = (data) => {
  const image = getImage(data.image);
  const imageAlt = data.imageAlt && data.imageAlt;
  return (
    <>
      <Container
        sx={{
          minHeight: "100%",
          mt: 8,
        }}
        maxWidth='lg'
        component='section'
      >
        <Grid container spacing={3}>
          <Grid item xs={12} sx={{ my: 4 }}>
            <Time date={data.date} />

            {image && (
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <GatsbyImage
                  style={{
                    border: "2px solid #43C6B7",
                    borderRadius: "5px",
                  }}
                  image={image}
                  alt={imageAlt}
                />
              </Box>
            )}
            <Box
              color='text.primary'
              dangerouslySetInnerHTML={{ __html: data.content }}
            />
          </Grid>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              alignItem: "flex-start",
              flexWrap: "wrap",
              mb: 5,
            }}
          >
            <TagList tags={data.tags} langKey={data.lang} />
          </Box>
        </Grid>
      </Container>
    </>
  );
};

export default BlogPostTemplate;
