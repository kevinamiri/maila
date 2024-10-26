import React from "react";
import {
  Card, CardHeader, CardContent, CardActions,
  Box, Button, Chip, Divider, Grid,
  Typography
} from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

// Card status styles
const STATUS_STYLES = {
  small: {
    backgroundColor: "rgba(15, 188, 73, 0.1)",
    color: "rgba(15, 188, 73, 1)",
    borderRadius: "4px",
    padding: "4px",
  }
};

// Card component for financial information display
export function FinanceCard() {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardHeader
        action={
          <Chip
            label="Small"
            variant="filled"
            style={STATUS_STYLES.small}
            size="medium"
          />
        }
        subheader="September 14, 2016"
      />
      <CardContent>
        <Typography variant="h3" color="text.secondary">
          This impressive paella
        </Typography>
        <Typography variant="body2" color="text.secondary">
          This impressive paella is a perfect party dish and a fun meal to cook
          together with your
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <Divider variant="fullWidth" />
        <Box
          sx={{
            alignItems: "flex-start",
            display: "flex",
            flexDirection: "column",
            pt: 2,
          }}
        >
          <Button
            color="primary"
            endIcon={<ArrowForwardIcon fontSize="small" />}
            variant="text"
          >
            Add money
          </Button>
        </Box>
      </CardActions>
    </Card>
  );
}

// Grid layout for displaying multiple finance cards
export function FinanceCardGrid() {
  return (
    <Grid container spacing={3}>
      <Grid item xs={12} sm={6} md={4}>
        <FinanceCard />
      </Grid>
    </Grid>
  );
}