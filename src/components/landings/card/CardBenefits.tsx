import React from "react";
import Card from "@mui/material/Card";
import Box from "@mui/material/Box";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import UnderlinedText from "components/subcomponents/UnderlinedText";

type CardBenefitsProps = {
  body?: string; // Card body text
  title?: string; // Card title
};

const styles = {
  container: {
    minHeight: "100%",
    p: 1,
  },
  card: {
    backgroundColor: (theme) => theme.palette.background.default,
    p: 1,
    "& + &": { mt: 1 },
  },
};


const CardBenefits: React.FC<CardBenefitsProps> = ({
  body = "maila.ai is a new AI-powered copywriter and copy editor that helps you to craft a powerful product description.",
  title = "brand name",
}) => (
  <Box sx={styles.container}>
    <Card sx={styles.card}>
      <CardHeader
        subheader={
          <Typography variant="h5" color="primary">
            <UnderlinedText>{title}</UnderlinedText>
          </Typography>
        }
      />
      <CardContent>
        <Typography variant="body1">{body}</Typography>
      </CardContent>
    </Card>
  </Box>
);

export default CardBenefits;

// Unused gradient background, kept for potential future use:
// background: (theme) =>
//   `linear-gradient(180deg, ${theme.palette.background.default} 50%, ${theme.palette.background.default} 50%)`,