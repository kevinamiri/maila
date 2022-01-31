import * as React from "react";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import Play from "components/subcomponents/Play";
import BarToggleButton from "./BarToggleButton";
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";
import SpellcheckIcon from "@mui/icons-material/Spellcheck";

const ITEM_HEIGHT = 38;

export default function LongMenu({ handleSpellcheck }) {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <IconButton
        aria-label='more'
        size='small'
        id='long-button'
        aria-controls='long-menu'
        aria-expanded={open ? "true" : undefined}
        aria-haspopup='true'
        onClick={handleClick}
      >
        <MoreVertIcon fontSize='inherit' />
      </IconButton>
      <Menu
        id='long-menu'
        MenuListProps={{
          "aria-labelledby": "long-button",
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        PaperProps={{
          style: {
            maxHeight: ITEM_HEIGHT * 4.5,
            width: "4ch",
          },
        }}
      >
        <BarToggleButton
          format='Listify'
          icon={<SpellcheckIcon />}
          handleClick={handleSpellcheck}
        />
        <Play />
      </Menu>
    </div>
  );
}
