import React from "react";
// ===== MUI IMPORTS =====
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Container from '@mui/material/Container'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import { Link } from 'gatsby'

// ===== COMPONENT =====
function LandingCta() {
  return (
    <Box
      /* 🎨 Section background */
      sx={{
        bgcolor: 'primary.lighter',
        py: { xs: 6, sm: 8, md: 12 },
        borderRadius: 2,
        border: (theme) => `1px solid ${theme.palette.divider}`,
        m: 2,
      }}
    >
      <Container
        maxWidth="xl"
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column', lg: 'row' },
          alignItems: 'center',
          justifyContent: 'space-between',
          px: { xs: 2, sm: 3, lg: 4 },
        }}
      >
        {/* 📝 Heading */}
        <Typography
          component="h2"
          variant="h3"
          color="text.primary"
          sx={{
            fontWeight: 600,
            maxWidth: 640,
            mb: { xs: 4, lg: 0 },
          }}
        >
          Looking for the VoiceOver Studio?
        </Typography>

        {/* 🎯 Action buttons */}
        <Stack direction="row" sx={{ m: 2 }} spacing={2} flexShrink={0}>
          <Button
            component={Link}
            to="https://speech.maila.ai"
            variant="contained"
            size="medium"
            endIcon={<ArrowRightAltIcon fontSize="small" />}
            sx={{
              bgcolor: 'primary.main',
              '&:hover': { bgcolor: 'primary.dark' }
            }}
          >
            VoiceOver Studio
          </Button>
        </Stack>
      </Container>
    </Box>
  )
}

export default LandingCta