import React from "react";
import Card from "@mui/material/Card";
import CardActionArea from "@mui/material/CardActionArea";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/material/styles";
import CardHeader from "@mui/material/CardHeader";
import Avatar from "@mui/material/Avatar";
import IconButton, { IconButtonProps } from "@mui/material/IconButton";
import { red } from "@mui/material/colors";
import TwitterIcon from "@mui/icons-material/Twitter";

export default function Cardet({ text, title }) {
  return (
    <Card
      sx={{
        maxWidth: "100%",
        borderRadius: "none",
        background: "none",
        boxShadow: "none",
        margin: "10px",
      }}
    >
      <CardActionArea>
        <CardContent>
          <Typography
            sx={{ borderBottom: "2px solid rgb(117, 227, 234)" }}
            gutterBottom
            component='h5'
          >
            {title}
          </Typography>
          <Typography variant='body2' color='textSecondary' component='p'>
            {text}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

interface ExpandMoreProps extends IconButtonProps {
  expand: boolean;
}

export function TwitterReview() {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label='recipe'>
            R
          </Avatar>
        }
        action={
          <IconButton aria-label='settings' color='primary' size='large'>
            <TwitterIcon />
          </IconButton>
        }
        title='Dr. Erin K. Maher'
        subheader='@MaherEK'
      />

      <CardContent>
        <Typography variant='body2' color='text.secondary'>
          I finally cleared out some space in my copyediting schedule today and
          tomorrow to catch up on grading, but that means now I have to catch up
          on grading{" "}
        </Typography>
      </CardContent>
    </Card>
  );
}
