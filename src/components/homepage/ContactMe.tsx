import * as React from "react";
import Box from "@mui/material/Box";
import ContactForm from "./ContactForm";
import Container from "@mui/material/Container";

// markup
const ContactMe = ({ langkey }) => {
  return (
    <Box
      sx={{
        backgroundColor: "background.default",
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
      }}
    >
      <Container maxWidth='sm' sx={{ py: "80px" }}>
        <Box
          sx={{
            mb: 8,
            display: "flex",
            justifyContent: "center",
          }}
        >
          <ContactForm lang={langkey} />
        </Box>
      </Container>
    </Box>
  );
};

export default ContactMe;
