import React, { useState } from "react";
import ProductDescription, {
  ProductGenerationProps,
} from "./editors/ProductDescription";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Tab from "@mui/material/Tab";
import Tabs from "@mui/material/Tabs";
/**
 * @description EditorManage is a tab component used to wrap around product description editor
 */
const EditorManage: React.FC<ProductGenerationProps> = (props) => {
  const [currentTab, setCurrentTab] = useState("document");
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
      </Box>
    </>
  );
};

export default EditorManage;
