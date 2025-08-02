import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

interface StudioSectionProps {
  title: string;
  description: string;
}

const StudioSection = ({ title, description }: StudioSectionProps) => (
  <Box component="section" sx={{ py: 8, textAlign: "center" }}>
    <Typography variant="h4" component="h2" gutterBottom>
      {title}
    </Typography>
    <Typography variant="body1">{description}</Typography>
  </Box>
);

export default StudioSection;
