import type { FC } from "react";
import React from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import { useSelector } from "react-redux";
import ProductAutocompleteUrl from "./ProductAutocompleteUrl";

const SearchBox: FC = () => {
  const { expand } = useSelector((state: any) => state.expandReducer);

  return (
    <Box
      sx={{
        backgroundColor: "background.default",
        minHeight: "100%",
        pb: 2,
        width: "100%",
        ...(expand && {
          width: { xs: "100%", md: "calc(100% - 33%)" },
        }),
      }}
    >
      <Paper>
        <Box sx={{ p: 1 }}>
          <Box
            sx={{
              alignItems: "center",
              justifyContent: "center",
              display: "flex",
            }}
          >
            <ProductAutocompleteUrl />
          </Box>
        </Box>
      </Paper>
    </Box>
  );
};

export default SearchBox;
