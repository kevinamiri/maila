import React from "react";
import BlogCard from "./blog-card";
import Box from "@mui/material/Box";
import { Grid } from "@mui/material";

const BlogLists = (props) => {
  console.log(props.data);
  const posts = props.data.allMarkdownRemark.edges;
  return (
    <Grid
      sx={{ mt: 8, backgroundColor: "background.paper" }}
      container
      direction='row'
      justifyContent='center'
      alignItems='center'
    >
      {posts &&
        posts.map(({ node: post }) => (
          <Grid item md={6} xs={12}>
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
                alignItem: "center",
                flexWrap: "wrap",
                m: 1,
                pt: 2,
                mx: 3,
              }}
              key={post.id}
            >
              <BlogCard
                slug={post.fields.slug}
                title={post.frontmatter.title}
                date={post.frontmatter.date}
                excerpt={post.excerpt}
                tags={post.frontmatter.tags}
                lang={post.frontmatter.lang}
              />
            </Box>
          </Grid>
        ))}
    </Grid>
  );
};

export default BlogLists;
