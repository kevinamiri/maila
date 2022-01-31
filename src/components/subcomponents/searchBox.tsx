import type { FC } from "react";
import React from "react";
import {
  Box,
  Button,
  Container,
  InputAdornment,
  Paper,
  TextField,
} from "@mui/material";
``;
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import ProductAutocompleteUrl from "./ProductAutocompleteUrl";

const SearchBox: FC = () => (
  <Box
    sx={{
      backgroundColor: "background.default",
      minHeight: "100%",
      pb: 2,
    }}
  >
    <Paper>
      <Box sx={{ p: 1 }}></Box>
      <Box sx={{ p: 1 }}>
        <Container maxWidth='md'>
          <Box
            sx={{
              alignItems: "center",
              justifyContent: "center",
              display: "flex",
            }}
          >
            <ProductAutocompleteUrl />
            {/* <TextField
              fullWidth
              InputProps={{
                startAdornment: (
                  <InputAdornment position='start'>
                    <SearchRoundedIcon fontSize='small' />
                  </InputAdornment>
                ),
              }}
              placeholder='Search...'
            /> */}
          </Box>
        </Container>
      </Box>
      <Box sx={{ p: 1 }}></Box>
    </Paper>
  </Box>
);

export default SearchBox;
