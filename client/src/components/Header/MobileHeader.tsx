import React, { useState } from "react";
import { useTranslation } from "next-i18next";

import { makeStyles } from "@material-ui/core/styles";
import { Menu, MenuItem, IconButton, Link, Button } from "@material-ui/core/";
import MenuIcon from "@material-ui/icons/Menu";

interface Props {}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
}));

const MobileHeader = (props: Props) => {
  const classes = useStyles();
  const { t } = useTranslation("common");

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleMenu = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const meunClose = () => {
    setAnchorEl(null);
  };

  const menuItems = [
    {
      menuTitle: "Home",
      pageURL: "/",
    },
    {
      menuTitle: "List",
      pageURL: "/list",
    },
    {
      menuTitle: "Video",
      pageURL: "/video",
    },
    {
      menuTitle: "Chart",
      pageURL: "/chart",
    },
    {
      menuTitle: "Report",
      pageURL: "/report",
    },
  ];

  return (
    <div>
      <IconButton
        edge="start"
        color="inherit"
        aria-label="menu"
        onClick={handleMenu}
      >
        <MenuIcon />
      </IconButton>

      <Menu anchorEl={anchorEl} keepMounted open={open} onClose={meunClose}>
        {menuItems.map((menuItem, i) => {
          const { menuTitle, pageURL } = menuItem;
          return (
            <MenuItem key={i} onClick={meunClose}>
              <Link href={pageURL}>{t(menuTitle)}</Link>
            </MenuItem>
          );
        })}
      </Menu>
    </div>
  );
};

export default MobileHeader;
