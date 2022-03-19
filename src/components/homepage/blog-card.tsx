import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
// import CommentIcon from "@mui/icons-material/Comment";
import NoUnderLineLink from "../nounderline-link";
// import SocialShare from "./social-share";
import TagList from "../landings/modules/TagList";

interface blogcardProps {
  slug: string;
  title: string;
  excerpt: string;
  lang: string;
  tags: string[];
  date: string;
}

const BlogCard = ({
  slug,
  title,
  excerpt,
  lang,
  tags,
  date,
}: blogcardProps) => {
  return (
    <Card
      elevation={0}
      sx={{
        backgroundColor: "background.default",
        borderRadius: 2,
      }}
    >
      <Box sx={{ p: 2 }}>
        <CardMedia
          sx={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          {/* image or media here */}
        </CardMedia>
        <Box
          sx={{
            alignItems: "center",
            display: "flex",
            mt: 2,
          }}
        >
          <Box sx={{ ml: 1 }}>
            <Typography variant='h3' component='div'>
              <NoUnderLineLink sx={{ fontSize: "18px" }} to={slug ? slug : "#"}>
                {title && title}
              </NoUnderLineLink>
            </Typography>
          </Box>
        </Box>
      </Box>
      <Box
        sx={{
          pb: 2,
          px: 3,
        }}
      >
        <Typography color='text.primary' variant='body1'>
          {excerpt && excerpt}
        </Typography>
        <Box
          sx={{
            alignItems: "start",
            display: "flex",
            flexWrap: "wrap",
            mt: 2,
          }}
        >
          <Box sx={{ flexGrow: 1 }}>
            <Typography variant='caption' color='textSecondary'>
              {date && date}
            </Typography>
          </Box>
          <TagList tags={tags.slice(0, 1)} langKey={lang} />
        </Box>
      </Box>
    </Card>
  );
};

export default BlogCard;
