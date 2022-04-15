import React from "react";
import Card from "@mui/material/Card";
import Box from "@mui/material/Box";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import UnderlinedText from "components/subcomponents/UnderlinedText";

interface CardBenefitsProps {
  body?: string;
  title?: string;
}

const CardBenefits: React.FC<CardBenefitsProps> = ({
  body = "maila.ai is a new AI-powered copywriter and copy editor that helps you to craft a powerful product description.",
  title = "brand name",
}: CardBenefitsProps) => (
  <Box
    sx={{
      // background: (theme) =>
      //   `linear-gradient(180deg, ${theme.palette.background.default} 50%, ${theme.palette.background.default} 50%)`,
      minHeight: "100%",
      p: 1,
    }}
  >
    <Card
      sx={{
        backgroundColor: (theme) => `${theme.palette.background.default}`,
        p: 1,
        "& + &": {
          mt: 1,
        },
      }}
    >
      <CardHeader
        subheader={
          <Typography variant='h5' color='primary'>
            <UnderlinedText>{title}</UnderlinedText>
          </Typography>
        }
      />
      <CardContent>
        <Typography variant='body1'>{body}</Typography>
      </CardContent>
    </Card>
  </Box>
);

export default CardBenefits;
