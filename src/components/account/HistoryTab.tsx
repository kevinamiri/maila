import React, { useEffect, useState, memo, FC } from "react";
import Box from "@mui/material/Box";
import { Tab } from "@mui/material";

import Tabs from '@mui/material/Tabs';


interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function CustomTabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

interface HistoryTabProps {
  postContents: string;
  input: string;
}

export default function HistoryTab({postContents, input}: HistoryTabProps) {

// Function to extract text values
const extractText = (data) => {
  return Object.values(data).flatMap(entry => entry['S'] ? entry['S'] : []);
};

  const parsedResponse = JSON.parse(postContents);

  const combinedArray = extractText(parsedResponse);
  console.log(combinedArray);

  const [value, setValue] = useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab label="User Input" {...a11yProps(0)} />
          <Tab label="Generated Variation 1" {...a11yProps(1)} />
          <Tab label="Generated Variation 2" {...a11yProps(2)} />
          <Tab label="Generated Variation 3" {...a11yProps(3)} />
        </Tabs>
      </Box>
      <CustomTabPanel value={value} index={0}>
        {input}
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        {combinedArray[0]}
      </CustomTabPanel>
      <CustomTabPanel value={value} index={2}>
        {combinedArray[1]}
      </CustomTabPanel>
      <CustomTabPanel value={value} index={3}>
        {combinedArray[2]}
      </CustomTabPanel>
    </Box>
  );
}
