import React from "react";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { Tooltip } from "@mui/material";
import { FormattedMessage } from "react-intl";
import { Typography } from "@mui/material";
import { Link } from "gatsby";
// import { Link } from "@mui/material";
// import { Link } from "@reach/router";

interface listProps {
  dirList: string;
  formattedId: string;
  iconComponent: React.FC;
}

const ListCatChild = (props: listProps) => {
  let selectedList = (url) => {
    if (url == window.location.pathname) {
      return true;
    } else {
      return false;
    }
  };

  const dirListName = props.dirList;
  const formattedIdList = props.formattedId;
  const iconComponent = props.iconComponent;
  return (
    <>
      <Tooltip
        title={<FormattedMessage id={formattedIdList} />}
        placement='right-start'
      >
        <Link
          style={{
            textDecoration: "none",
          }}
          to={dirListName}
        >
          <ListItem
            button
            selected={selectedList(dirListName)}
            sx={{
              paddingLeft: 4,
              ...(selectedList(dirListName) && {
                color: "primary.main",
                "& svg": {
                  color: "primary.main",
                },
              }),
            }}
          >
            <ListItemIcon sx={{ minWidth: 40 }}>{iconComponent}</ListItemIcon>
            <ListItemText
              primary={
                <Typography
                  sx={{
                    fontWeight: 400,
                    fontSize: ".8rem",
                    lineHeight: "1.9",
                    fontFamily:
                      'BlinkMacSystemFont,"Helvetica Neue","Roboto",Roboto,Tahoma,"Noto Sans",sans-serif,"Apple Color Emoji","Segoe UI","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji"',
                  }}
                  color='primary'
                  variant='body1'
                >
                  <FormattedMessage id={formattedIdList} />
                </Typography>
              }
            />
          </ListItem>
        </Link>
      </Tooltip>
    </>
  );
};

export default ListCatChild;
