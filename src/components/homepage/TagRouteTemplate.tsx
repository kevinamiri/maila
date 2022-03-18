import React from "react";
import PostList from "./PostList";
import Badge from "@mui/material/Badge";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/material";

const TagRouteTemplate = ({ data, pageContext }) => {
  const posts = data.allMarkdownRemark.edges.map((p) => p.node);

  return (
    <Box
      sx={{
        pt: 10,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        flexWrap: "wrap",
        backgroundColor: "background.default",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "flex-start",
          m: 5,
        }}
      >
        <Badge badgeContent={data.allMarkdownRemark.totalCount} color='primary'>
          <Typography variant='h1' sx={{ fontSize: "20px" }} color='primary'>
            {pageContext.tag}
          </Typography>
        </Badge>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "start",
          flexWrap: "wrap",
          m: 2,
        }}
      >
        <PostList posts={posts} />
      </Box>
    </Box>
  );
};

export default TagRouteTemplate;
