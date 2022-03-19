import React from "react";
import PropTypes from "prop-types";
import TagList from "../landings/modules/TagList";
import Content from "./Content";
import Time from "./Time";
import { FormattedMessage } from "react-intl";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

const BlogPostTemplate = (data) => {
  console.log(data);
  return (
    <>
      <Container maxWidth='lg'>
        <Box
          sx={{
            backgroundColor: "background.default",
            minHeight: "100%",
            p: 3,
          }}
        >
          <Grid container spacing={3} sx={{ mt: 10 }}>
            <Grid item md={4} xs={12}>
              test
            </Grid>
          </Grid>
        </Box>
      </Container>
    </>
  );
};

export default BlogPostTemplate;
