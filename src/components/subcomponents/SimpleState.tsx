import React from "react";
import { Box, Card, Grid, Typography } from "@mui/material";
import Chip from "@mui/material/Chip";

interface StatesProps {
  label?: string;
  number?: Number;
  precent?: Number;
}

const SimpleState: React.FC<StatesProps> = ({
  label = "Totall number of token usage",
  number = 1,
  precent = 1,
}: StatesProps) => (
  <Box
    sx={{
      backgroundColor: "background.default",
      m: 2,
      borderRadius: (theme) => theme.shape.borderRadius,
    }}
  >
    <Card>
      <Grid alignItems='center' container justifyContent='space-between'>
        <Grid item xs={12}>
          <Typography
            color='textSecondary'
            component='h2'
            gutterBottom
            variant='overline'
          >
            {label}
          </Typography>
        </Grid>
        <Grid
          item
          sx={{
            pr: 3,
            pb: 3,
            pl: 1,
            pt: 1,
          }}
          xs={8}
        >
          <Typography color='textPrimary' variant='h5'>
            {`${number}`}
          </Typography>
        </Grid>
        <Grid
          sx={{
            pr: 3,
            pb: 3,
            pl: 1,
            pt: 1,
          }}
          item
          xs={4}
        >
          <Chip
            sx={{
              borderRadius: 4,
            }}
            label={precent + "%"}
            color='primary'
            size='small'
          />
        </Grid>
      </Grid>
    </Card>
  </Box>
);

export default SimpleState;
