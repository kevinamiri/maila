import React from "react";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Tooltip from "@mui/material/Tooltip";
import { FormattedMessage } from "react-intl";
import { Link } from "gatsby";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";

interface listMainProps {
  reducer: any;
  dirList: string;
  formattedId: string;
  iconComponent: React.FC;
}

const ListMain = (props: listMainProps) => {
  let selectedList = (url) => {
    if (url == window.location.pathname) {
      return true;
    } else {
      return false;
    }
  };

  const [state, dispatch] = props.reducer;
  const formattedIdList = props.formattedId;
  const dirListName = props.dirList;
  const iconComponent = props.iconComponent;
  return (
    <>
      <Tooltip
        title={<FormattedMessage id={formattedIdList} />}
        disableFocusListener
        placement='top-end'
      >
        <ListItem button onClick={() => dispatch({ type: formattedIdList })}>
          <ListItemIcon>
            <Link to={dirListName}>
              {React.createElement(iconComponent)}
            </Link>
          </ListItemIcon>

          <ListItemText primary={<FormattedMessage id={formattedIdList} />} />
          {state[formattedIdList] ? <ExpandLess /> : <ExpandMore />}
        </ListItem>
      </Tooltip>
    </>
  );
};

export default ListMain;
