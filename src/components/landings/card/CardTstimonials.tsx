import React from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import { red } from "@mui/material/colors";
import Avatar from "@mui/material/Avatar";
import TwitterIcon from "@mui/icons-material/Twitter";

interface TestimonialProps {
  body?: string;
  title?: string;
  subheader?: string;
}

const TestimonialCard: React.FC<TestimonialProps> = ({
  body = "maila.ai is a new AI-powered copywriter and copy editor that helps you to craft a powerful product description.",
  title = "Dr. Lex K. Maher",
  subheader = "@Maherwork",
}) => (
  <Card
    sx={{
      backgroundColor: "background.default",
      maxWidth: 345,
      minWidth: 300,
      p: 2,
      m: 1,
    }}
  >
    <CardHeader
      avatar={
        <Avatar sx={{ bgcolor: red[500] }} aria-label='avatar'>
          R
        </Avatar>
      }
      action={
        <IconButton aria-label='twitter' color='primary' size='large'>
          <TwitterIcon />
        </IconButton>
      }
      title={title}
      subheader={subheader}
    />
    <CardContent>
      <Typography variant='body1'>{body}</Typography>
    </CardContent>
  </Card>
);

export default TestimonialCard;