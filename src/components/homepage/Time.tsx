import React from "react";
import PropTypes from "prop-types";
import { FormattedDate } from "react-intl";
import Typography from "@mui/material/Typography";

const Time = ({ date }) => {
  return (
    <Typography component='time' variant='caption' color='textSecondary'>
      <FormattedDate
        value={new Date(date)}
        month='long'
        day='numeric'
        year='numeric'
      />
    </Typography>
  );
};

Time.propTypes = {
  date: PropTypes.string.isRequired,
};

export default Time;
