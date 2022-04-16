import React, { useState, useEffect } from "react";
import { Link } from "gatsby";
import Box from "@mui/material/Box";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Container from "@mui/material/Container";
import Divider from "@mui/material/Divider";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import useSettings from "../hooks/useSettings";
import ChevronRight from "@mui/icons-material/ChevronRight";
import Documents from "../components/account/Documents";

interface DocumentsPageProps {
  path: string;
  component?: React.ComponentType<{}>;
}

const DocumentsPage: React.FC<DocumentsPageProps> = () => {
  const { settings } = useSettings();

  return (
    <>
      <Box
        sx={{
          backgroundColor: "background.default",
          minHeight: "100%",
          py: 2,
        }}
      >
        <Container maxWidth={settings.compact ? "xl" : false}>
          <Grid container justifyContent='space-between' spacing={3}>
            <Grid item>
              <Breadcrumbs
                aria-label='breadcrumb'
                separator={<ChevronRight fontSize='small' />}
                sx={{ mt: 1 }}
              >
                <Link to='/app/'>App</Link>
                <Typography color='textSecondary' variant='subtitle2'>
                  Documents
                </Typography>
              </Breadcrumbs>
            </Grid>
          </Grid>
          <Box sx={{ mt: 3 }}>
            <Documents />
          </Box>
          <Divider />
        </Container>
      </Box>
    </>
  );
};

export default DocumentsPage;
