import type { FC } from "react";
import React from "react";
import { Box, Chip, Grid, Stack, Typography } from "@mui/material";
import { SeverityPill } from "../severity-pill";
import { Link, navigate } from "gatsby";
import useToolsProducts from "../../hooks/useToolsProducts";
import useSettings from "../../hooks/useSettings";

const unique = (arr) => {
  return arr.filter((item, index) => arr.indexOf(item) === index);
};
const States: FC = () => {
  const useTools = useToolsProducts();
  const { settings, saveSettings } = useSettings();
  const products = useTools[`${settings.lang}`].edges.map(
    (item) => item.node.frontmatter
  );
  const blog = products.filter((item) => item.slug.split("/")[3] === "blog");
  const copywriting = products.filter(
    (item) => item.slug.split("/")[3] === "copywriting"
  );
  const emails = products.filter((item) => item.slug.split("/")[3]);

  const writing = products.filter(
    (item) => item.slug.split("/")[3] === "writing"
  );
  const [productLists, setProductLists] = React.useState(products);
  const uTag = unique(products.map((item) => item.slug.split("/")[3]));
  console.log(uTag);
  return (
    <Box
      sx={{
        p: 1,
      }}
    >
      <Stack
        direction='row'
        justifyContent='space-between'
        alignItems='flex-start'
        sx={{ flexWrap: "wrap" }}
        spacing={2}
      >
        {uTag.map((x, i) => (
          <Chip
            label={x}
            key={i + 500}
            variant={
              productLists.find((z) => z.slug.split("/")[3] == x)
                ? "filled"
                : "outlined"
            }
            onClick={() =>
              setProductLists(products.filter((y) => y.slug.split("/")[3] == x))
            }
          />
        ))}
      </Stack>
      <Grid container sx={{ mt: 3 }} spacing={2}>
        {productLists.map((product, i) => (
          <Grid
            item
            key={i}
            md={4}
            sm={6}
            xs={12}
            sx={{
              textAlign: "start",
            }}
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
                    color='primary'
                    sx={{ cursor: "pointer" }}
                    onClick={() => navigate(product.url)}
                    component='span'
                    variant='body2'
                  >
                    {product.title}
                  </Typography>
                </Box>
                <Box sx={{ ml: 1, alignSelf: "flex-end" }}>
                  <SeverityPill color='success'>{product.tag}</SeverityPill>
                </Box>
              </Box>
              <Typography
                color='textSecondary'
                sx={{ mt: 1 }}
                variant='caption'
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
export default States;
