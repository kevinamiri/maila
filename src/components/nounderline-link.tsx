import * as React from "react";
import MuiLink from "@mui/material/Link";
import { Link as GatsbyLink } from "gatsby";
import { styled } from "@mui/material/styles";

const NoUnderLine = styled(MuiLink)(({ theme }) => ({
  textDecoration: "none",
  "&:hover": {
    color: `${theme.palette.primary.light}`,
  },
}));

function Link(props, ref) {
  return <NoUnderLine component={GatsbyLink} ref={ref} {...props} />;
}
const NoUnderLineLink = React.forwardRef(Link);

export default NoUnderLineLink;
