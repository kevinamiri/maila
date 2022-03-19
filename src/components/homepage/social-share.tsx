import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
import SpeedDial, { SpeedDialProps } from "@mui/material/SpeedDial";
import SpeedDialAction from "@mui/material/SpeedDialAction";
import ShareIcon from "@mui/icons-material/Share";
import RedditIcon from "@mui/icons-material/Reddit";
import { FormattedMessage } from "react-intl";

const StyledSpeedDial = styled(SpeedDial)(({ theme }) => ({
  position: "absolute",
  "&.MuiSpeedDial-directionUp, &.MuiSpeedDial-directionLeft": {
    bottom: theme.spacing(2),
    right: theme.spacing(2),
  },
  "&.MuiSpeedDial-directionDown, &.MuiSpeedDial-directionRight": {
    left: theme.spacing(0),
  },
}));

export default function SocialShare() {
  const [PathUrl, setPathUrl] = React.useState("https://maila.ai/");
  React.useEffect(() => {
    setPathUrl("https://maila.ai" + window.location.pathname);
  }, []);

  const ToShare = `Check out Maila AI`;
  const url = PathUrl;
  const title = ToShare;

  const [open, setOpen] = React.useState(false);
  // it might be different in different view size it would be up, left, right
  const [direction, setDirection] =
    React.useState<SpeedDialProps["direction"]>("right");

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <Box
      sx={{
        transform: "translateZ(0px)",
        alignItems: "center",
        display: "flex",
        position: "relative",
      }}
    >
      <StyledSpeedDial
        ariaLabel='Share on Social media'
        icon={<ShareIcon fontSize='small' />}
        direction={direction}
        onClose={handleClose}
        onOpen={handleOpen}
        open={open}
        FabProps={{
          color: "primary",
          size: "small",
          style: {
            width: "24px",
            height: "24px",
            minHeight: "24px",
          },
        }}
      >
        <SpeedDialAction
          icon={<FacebookIcon fontSize='small' />}
          sx={{ height: "24px", width: "24px", minHeight: "24px" }}
          tooltipTitle={<FormattedMessage id='shareOnFacebookButton' />}
          onClick={() => {
            window.open(
              `https://www.facebook.com/sharer/sharer.php?u=${url}`,
              "_blank"
            );
            handleClose();
          }}
        />
        <SpeedDialAction
          icon={<TwitterIcon fontSize='small' />}
          tooltipTitle={<FormattedMessage id='shareOnTwitterButton' />}
          sx={{ height: "24px", width: "24px", minHeight: "24px" }}
          onClick={() => {
            window.open(
              `https://twitter.com/intent/tweet?text=${title}&url=${url}`,
              "_blank"
            );
            handleClose();
          }}
        />
        <SpeedDialAction
          icon={<LinkedInIcon fontSize='small' />}
          sx={{ height: "24px", width: "24px", minHeight: "24px" }}
          tooltipTitle={<FormattedMessage id='shareOnLinkedInButton' />}
          onClick={() => {
            window.open(
              `https://www.linkedin.com/shareArticle?mini=true&url=${url}&title=${title}&summary=${title}&source=${url}`,
              "_blank"
            );
            handleClose();
          }}
        />
        <SpeedDialAction
          icon={<RedditIcon fontSize='small' />}
          sx={{ height: "24px", width: "24px", minHeight: "24px" }}
          tooltipTitle={<FormattedMessage id='shareOnRedditButton' />}
          onClick={() => {
            window.open(
              `https://www.reddit.com/submit?url=${url}&title=${title}`,
              "_blank"
            );
            handleClose();
          }}
        />
      </StyledSpeedDial>
    </Box>
  );
}
