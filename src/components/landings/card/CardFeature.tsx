import React from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import Chip from "@mui/material/Chip";
import Typography from "@mui/material/Typography";

interface CardFeatureProps {
  title?: string;
  body?: string;
  badgeLabel?: string;
  status?: boolean;
}

const CardFeature: React.FC<CardFeatureProps> = ({
  title = "The default title",
  body = "maila.ai is a new AI-powered copywriter and copy editor that helps you to craft a powerful product description.",
  badgeLabel,
}: CardFeatureProps) => {
  return (
    <Card sx={{ maxWidth: 350, minWidth: 300, p: 1, m: 1 }}>
      <CardHeader
        action={
          badgeLabel && (
            <Chip
              label={"NEW"}
              sx={{
                fontWeight: 600,
                borderRadius: "4px",
                padding: "4px",
              }}
              size='small'
            />
          )
        }
        subheader={
          <Typography variant='h5' component='h2' color='primary'>
            {title}
          </Typography>
        }
      />
      <CardContent>
        <Typography variant='body1' color='text.secondary'>
          {body}
        </Typography>
      </CardContent>
    </Card>
  );
};
export default CardFeature;
