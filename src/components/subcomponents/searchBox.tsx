import type { FC } from "react";
import React from "react";
import { Box, Container, Paper } from "@mui/material";
import { useSelector } from "react-redux";
import ProductAutocompleteUrl from "./ProductAutocompleteUrl";

const SearchBox: FC = () => {
  const { expand } = useSelector((state) => state.expandReducer);

  return (
    <Box
      sx={{
        backgroundColor: "background.default",
        minHeight: "100%",
        pb: 2,
        width: "100%",
        // 'vw' make it more smoother than '%'
        ...(expand && {
          width: { xs: "100%", md: "calc(100% - 33%)" },
          // height: { xs: "calc(100% - 30%)", md: "100%" },
          // marginRight: { xs: "0%", md: "33%" },
          // marginBottom: { xs: "60vw", md: "0%" },
        }),
      }}
    >
      <Paper>
        <Box sx={{ p: 1 }}>
          <Container maxWidth='md'>
            <Box
              sx={{
                alignItems: "center",
                justifyContent: "center",
                display: "flex",
                m: 1,
              }}
            >
              <ProductAutocompleteUrl />
            </Box>
          </Container>
        </Box>
      </Paper>
    </Box>
  );
};

export default SearchBox;
