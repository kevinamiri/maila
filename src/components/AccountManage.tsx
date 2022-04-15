import React, { useState, useEffect } from "react";
import { Link } from "gatsby";
import Box from "@mui/material/Box";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Container from "@mui/material/Container";
import Divider from "@mui/material/Divider";
import Grid from "@mui/material/Grid";
import Tab from "@mui/material/Tab";
import Tabs from "@mui/material/Tabs";
import Typography from "@mui/material/Typography";
import {
  AccountBillingSettings,
  AccountGeneralSettings,
  AccountNotificationsSettings,
  AccountSecuritySettings,
} from "../components/account";
import useSettings from "../hooks/useSettings";
import ChevronRight from "@mui/icons-material/ChevronRight";

const tabs = [
  { label: "General", value: "general" },
  { label: "Billing", value: "billing" },
  { label: "Notifications", value: "notifications" },
  { label: "Security", value: "security" },
];

interface AccountManageProps {
  path: string;
  component?: React.ComponentType<{}>;
}

const AccountManage: React.FC<AccountManageProps> = () => {
  const { settings } = useSettings();
  const [currentTab, setCurrentTab] = useState("general");

  const handleTabsChange = (event, value) => {
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
        <Container maxWidth={settings.compact ? "xl" : false}>
          <Grid container justifyContent='space-between' spacing={3}>
            <Grid item>
              <Breadcrumbs
                aria-label='breadcrumb'
                separator={<ChevronRight fontSize='small' />}
                sx={{ mt: 1 }}
              >
                <Link to='/app'>App</Link>
                <Typography color='textSecondary' variant='subtitle2'>
                  Profile
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
            {currentTab === "general" && <AccountGeneralSettings />}
            {currentTab === "billing" && <AccountBillingSettings />}
            {currentTab === "notifications" && <AccountNotificationsSettings />}
            {currentTab === "security" && <AccountSecuritySettings />}
          </Box>
        </Container>
      </Box>
    </>
  );
};

export default AccountManage;
