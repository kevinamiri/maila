import * as React from 'react';
import PropTypes from "prop-types";
import Time from "../../components/homepage/Time";
import { FormattedMessage } from "react-intl";
import { Link } from "gatsby";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Box } from '@mui/material';


const PostListItem = ({ post }) => {
  console.log(post)
  return (
    <Box sx={{ maxWidth: 345, m: 2 }}>
      <Card>
        <CardContent>
          <Typography variant="caption" color="text.secondary">
            <Time
              langKey={post.fields.langKey}
              date={post.frontmatter.date}
            />
          </Typography>
          <Typography gutterBottom variant="h3" component="div">
            <Button component="a" href={post.fields.slug} size="small">{post.frontmatter.title}</Button>
          </Typography>
          <Typography variant="body2" color="text.secondary">
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
