import * as React from "react";
import MuiLink from "@mui/material/Link";
import { Link as GatsbyLink } from "gatsby";
import { styled } from "@mui/material/styles";

const CustomLink = styled(MuiLink)(({ theme }) => ({
  color: theme.palette.primary.main,
  textDecoration: "none",
  "&:hover": {
    borderBottom: `2px solid ${theme.palette.primary.main}`,
  },
}));

function Link(props, ref) {
  return <CustomLink component={GatsbyLink} ref={ref} {...props} />;
}
const AccessibleLink = React.forwardRef(Link);

export default AccessibleLink;
