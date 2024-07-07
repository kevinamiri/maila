import React, { useState, useEffect } from "react";
import { Link } from "gatsby";
import Box from "@mui/material/Box";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Container from "@mui/material/Container";
import Divider from "@mui/material/Divider";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import ChevronRight from "@mui/icons-material/ChevronRight";
import Documents from "../components/account/Documents";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import History from "../components/account/History";

interface DocumentsPageProps {
  path: string;
  component?: React.ComponentType<{}>;
}

const tabs = [
  { label: "History", value: "History" },
  { label: "Saved", value: "Saved" },
];

const DocumentsPage: React.FC<DocumentsPageProps> = () => {
  const [currentTab, setCurrentTab] = useState("History");

  const handleTabsChange = (event: React.SyntheticEvent, value: string) => {
    setCurrentTab(value);
  };

  return (
    <>
      <Box
        sx={{
          backgroundColor: "background.default",
          minHeight: "100%",
          py: 2,
        }}
      >
        <Container maxWidth="xl">
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
                <Typography color='textPrimary' variant='subtitle2'>
                  {currentTab}
                </Typography>
              </Breadcrumbs>
            </Grid>
          </Grid>
          <Box sx={{ mt: 3 }}>
            <Tabs
              indicatorColor='primary'
              onChange={handleTabsChange}
              scrollButtons='auto'
              textColor='primary'
              value={currentTab}
              variant='scrollable'
            >
              {tabs.map((tab) => (
                <Tab key={tab.value} label={tab.label} value={tab.value} />
              ))}
            </Tabs>
          </Box>
          <Divider />
          <Box sx={{ mt: 3 }}>
            {currentTab === "History" && <History />}
            {currentTab === "Saved" && <Documents />}
          </Box>
        </Container>
      </Box>
    </>
  );
};

export default DocumentsPage;
