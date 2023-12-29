import type { FC } from "react";
import React, { useState } from "react";
import { Box, Chip, Grid, Stack, Typography } from "@mui/material";
import { SeverityPill } from "../severity-pill";
import { navigate } from "gatsby";
import useToolsProducts from "../../hooks/useToolsProducts";
import useSettings from "../../hooks/useSettings";

// Removes duplicate elements from an array
const removeDuplicates = (array) => array.filter((item, index) => array.indexOf(item) === index);

const ProductList: FC = () => {
  const tools = useToolsProducts();
  const { settings } = useSettings();
  const products = tools[settings.lang].edges.map(item => item.node.frontmatter);

  const [displayedProducts, setDisplayedProducts] = useState(products);

  // Extract unique product categories
  const productCategories = removeDuplicates(products.map(item => item.slug.split("/")[3]));

  // Handles the click event on category chips
  const handleCategoryClick = (category) => {
    setDisplayedProducts(products.filter(product => product.slug.split("/")[3] === category));
  };

  return (
    <Box sx={{ p: 1 }}>
      <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="flex-start"
        sx={{ flexWrap: "wrap" }}
        spacing={2}
      >
        {productCategories.map((category, index) => (
          <Chip
            label={category}
            key={`chip-${index}`}
            variant={displayedProducts.some(product => product.slug.split("/")[3] === category) ? "filled" : "outlined"}
            onClick={() => handleCategoryClick(category)}
          />
        ))}
      </Stack>
      <Grid container sx={{ mt: 3 }} spacing={2}>
        {displayedProducts.map((product, index) => (
          <Grid
            item
            key={`product-${index}`}
            md={4}
            sm={6}
            xs={12}
            sx={{ textAlign: "start" }}
          >
            <Box
              sx={{
                border: (theme) => `1px solid ${theme.palette.divider}`,
                p: 2,
                borderRadius: 1,
                backgroundColor: "background.paper",
              }}
            >
              <Box
                sx={{
                  alignItems: "flex-start",
                  display: "flex",
                  justifyContent: "flex-start",
                }}
              >
                <Box sx={{ flexGrow: 1, mb: 2 }}>
                  <Typography
                    color="primary"
                    sx={{ cursor: "pointer" }}
                    onClick={() => navigate(product.url)}
                    component="span"
                    variant="body2"
                  >
                    {product.title}
                  </Typography>
                </Box>
                <Box sx={{ ml: 1, alignSelf: "flex-end" }}>
                  <SeverityPill color="success">{product.tag}</SeverityPill>
                </Box>
              </Box>
              <Typography
                color="textSecondary"
                sx={{ mt: 1 }}
                variant="caption"
              >
                {product.header}
              </Typography>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default ProductList;
