import React from "react";
import TagList from "../landings/modules/TagList";
import Time from "./Time";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

const BlogPostTemplate = (data) => {
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
            <Typography
              variant='body1'
              component='div'
              sx={{
                backgroundColor: "background.paper",
                borderRadius: 8,
                my: 4,
                p: 5,
              }}
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
