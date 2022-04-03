import React, { useState, useEffect } from "react";
import { useIntl } from "react-intl";
import ProductDescription, {
  ProductGenerationProps,
} from "./editors/ProductDescription";
import { Link } from "gatsby";
import Box from "@mui/material/Box";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Container from "@mui/material/Container";
import Divider from "@mui/material/Divider";
import Grid from "@mui/material/Grid";
import Tab from "@mui/material/Tab";
import Tabs from "@mui/material/Tabs";
import Typography from "@mui/material/Typography";
// import {
//   updateAudienceValue,
//   updateBusinessNameValue,
//   updateKeywordValue,
//   updateFeatureValue,
// } from "../slices/fieldsValue";
import useSettings from "../hooks/useSettings";
import ChevronRight from "@mui/icons-material/ChevronRight";

const EditorManage: React.FC<ProductGenerationProps> = (props) => {
  // const { settings } = useSettings();
  const [currentTab, setCurrentTab] = useState("document");
  // const intl = useIntl();
  // const brandName: string = intl.formatMessage({ id: "A005" });
  // const brandNamebusiness: string = intl.formatMessage({ id: "A006" });
  // const audiencelabel: string = intl.formatMessage({ id: "A007" });
  // const audienceplaceholder: string = intl.formatMessage({ id: "A008" });

  // const keywordslabel: string = intl.formatMessage({ id: "A009" });
  // const keywordsplaceholder: string = intl.formatMessage({ id: "A0010" });

  // const Featurelabel: string = intl.formatMessage({ id: "A0011" });
  // const Featureplaceholder: string = intl.formatMessage({ id: "A0012" });
  const handleTabsChange = (event, value) => {
    setCurrentTab(value);
  };

  return (
    <>
      <Box
        sx={{
          backgroundColor: "background.default",
          minHeight: "100%",
          py: 0,
        }}
      >
        <Container maxWidth='xl'>
          <Box sx={{ mt: 1 }}>
            <Tabs
              indicatorColor='primary'
              onChange={handleTabsChange}
              scrollButtons='auto'
              textColor='primary'
              value={currentTab}
              variant='scrollable'
            >
              <Tab label='Document' value='document' />
              <Tab label='Draft' value='draft' />
            </Tabs>
          </Box>
          <Divider />
          <Box sx={{ mt: 1 }}>
            {currentTab === "document" && (
              <ProductDescription editorType='document' {...props} />
            )}
            {currentTab === "draft" && (
              <ProductDescription editorType='draft' {...props} />
            )}
          </Box>
        </Container>
      </Box>
    </>
  );
};

export default EditorManage;
