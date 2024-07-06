import React from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Chip from "@mui/material/Chip";
import Divider from "@mui/material/Divider";
import Grid from "@mui/material/Grid";

import { IconButtonProps } from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";

import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

export function SimpleCard() {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardHeader
        action={
          <Chip
            label='Small'
            variant='filled'
            style={{
              backgroundColor: "rgba(15, 188, 73, 0.1)",
              color: "rgba(15, 188, 73, 1)",
              borderRadius: "4px",
              padding: "4px",
            }}
            size='medium'
          />
        }
        subheader='September 14, 2016'
      />
      <CardContent>
        <Typography variant='h3' color='text.secondary'>
          This impressive paella
        </Typography>
        <Typography variant='body2' color='text.secondary'>
          This impressive paella is a perfect party dish and a fun meal to cook
          together with your
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <Divider variant='fullWidth' />
        <Box
          sx={{
            alignItems: "flex-start",
            display: "flex",
            flexDirection: "column",
            pt: 2,
          }}
        >
          <Button
            color='primary'
            endIcon={<ArrowForwardIcon fontSize='small' />}
            variant='text'
          >
            Add money
          </Button>
        </Box>
      </CardActions>
    </Card>
  );
}

export function GridComponent() {
  return (
    <Grid container spacing={1}>
      <SimpleCard />
    </Grid>
  );
}
