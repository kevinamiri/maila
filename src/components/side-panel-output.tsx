import React, { FC } from "react"
import { Box, Divider, Drawer, IconButton } from "@mui/material"
import { X } from "../icons/x"
import { ReactJSXElement } from "@emotion/react/types/jsx-namespace"
import LinearProgress from "./subcomponents/LinearProgressLoading"

type SlidePanelProps = {
  open?: boolean
  onClose?: () => void
  children: ReactJSXElement
  anchor?: "right" | "bottom"
  [key: string]: any
}

// @example
// <SlidePanelOutput open={true} anchor="right" onClose={() => {}}>
//   <div>Content</div>
// </SlidePanelOutput>
const SlidePanelOutput: FC<SlidePanelProps> = ({ open, onClose, children, anchor, ...props }) => (
  <Drawer
    anchor={anchor}
    onClose={onClose}
    open={open}
    ModalProps={{ sx: { zIndex: 1690 } }}
    PaperProps={{
      sx: {
        width: { xs: "100%", md: "31%" },
        height: { xs: "43%", md: "100%" },
        mt: { xs: 0, md: "5rem" },
        border: t => `1px solid ${t.palette.divider}`,
        borderRadius: 1
      }
    }}
    variant="persistent"
    {...props}
  >
    <Box
      sx={{
        display: "flex",
        justifyContent: "flex-end",
        alignItems: "center", 
        backgroundColor: "background.paper",
        borderBottom: t => `1px solid ${t.palette.divider}`,
        px: 2,
        py: 1,
        position: "sticky",
        top: 0,
        zIndex: 10
      }}
    >
      <Box sx={{ flexGrow: 1 }}>
        <LinearProgress /> 
      </Box>
      <IconButton color="primary" onClick={onClose}>
        <X fontSize="small" />
      </IconButton>
    </Box>

    <Box sx={{ py: 4, px: 1 }}>
      <Box sx={{ display: "flex", alignItems: "center" }}>
        {children}
      </Box>
      <Divider sx={{ mt: 5 }} />
    </Box>
  </Drawer>
)

export default SlidePanelOutput