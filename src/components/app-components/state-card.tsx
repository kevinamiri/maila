import * as React from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";

interface cardStateProps {
  title?: string;
  body?: string;
}

export default function StateCard({ title, body }: cardStateProps) {
  return (
    <Card sx={{ maxWidth: 400 }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label='recipe'>
            R
          </Avatar>
        }
        title={title && title}
      />
      <CardContent>
        <Typography variant='body2' color='text.secondary'>
          {body && body}
        </Typography>
      </CardContent>
    </Card>
  );
}
