import React from "react";
import Time from "./Time";
import Link from "../Link";
import { Card, CardContent, Typography, Box } from "@mui/material";

interface PostFields {
  slug: string;
  langKey: string;
}

interface PostFrontmatter {
  title: string;
  date: string;
}

interface Post {
  fields: PostFields;
  frontmatter: PostFrontmatter;
  excerpt?: string;
}

interface PostListItemProps {
  post: Post;
}

// 📌 Usage: <PostListItem post={postData} />
const PostListItem: React.FC<PostListItemProps> = ({ post }) => {
  const { fields, frontmatter, excerpt } = post;
  const { slug } = fields;
  const { title, date } = frontmatter;

  return (
    <Box sx={{ maxWidth: 450, m: 1 }}>
      <Card>
        <CardContent>
          <Time date={date} />
          <Typography gutterBottom variant="h2">
            <Link href={slug} sx={{ fontSize: "16px" }} size="small">
              {title}
            </Link>
          </Typography>
          {excerpt && (
            <Typography variant="body1" color="textSecondary">
              {excerpt}
            </Typography>
          )}
        </CardContent>
      </Card>
    </Box>
  );
};

export default PostListItem;

// 💡 Potential feature: Add truncation for long excerpts
// const truncateExcerpt = (text: string, maxLength = 150): string => 
//   text.length > maxLength ? `${text.substring(0, maxLength)}...` : text;