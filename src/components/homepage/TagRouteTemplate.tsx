import React from "react";
import { Link } from "gatsby";
import PostList from "./PostList";
import { FormattedMessage } from "react-intl";
import Helmet from "react-helmet";
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
        backgroundColor: "background.paper",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
        }}
      >
        <FormattedMessage id='tags'>
          {(txt) => (
            <Helmet
              title={`${pageContext.tag} | ${txt}`}
              meta={[{ name: "description", content: `${txt}` }]}
            />
          )}
        </FormattedMessage>
        <Badge badgeContent={data.allMarkdownRemark.totalCount} color='primary'>
          <Typography variant='h3' color='primary'>
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
      <Box>
        <Typography variant='caption' color='initial'></Typography>
      </Box>
    </Box>
  );
};

export default TagRouteTemplate;
