import * as React from "react";
import PropTypes from "prop-types";
import Time from "./Time";
import Link from "../Link";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/material";

const PostListItem = ({ post }) => {
  return (
    <Box sx={{ maxWidth: 450, m: 1 }}>
      <Card>
        <CardContent>
          <Time date={post.frontmatter.date} />
          <Typography gutterBottom variant='h2'>
            <Link
              component='a'
              href={post.fields.slug}
              sx={{ fontSize: "16px" }}
              size='small'
            >
              {post.frontmatter.title}
            </Link>
          </Typography>
          <Typography variant='body1' color='textSecondary'>
            {post.excerpt}
          </Typography>
        </CardContent>
      </Card>
    </Box>
  );
};

PostListItem.propTypes = {
  post: PropTypes.shape({
    fields: PropTypes.shape({
      slug: PropTypes.string.isRequired,
      langKey: PropTypes.string.isRequired,
    }),
    frontmatter: PropTypes.shape({
      title: PropTypes.string.isRequired,
      date: PropTypes.string.isRequired,
    }),
    excerpt: PropTypes.string.isRequired,
  }),
};

export default PostListItem;
