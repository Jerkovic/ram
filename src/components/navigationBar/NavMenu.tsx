import * as React from "react";
import {
  ListItemIcon,
  MenuItem,
  MenuList,
  Paper,
  Popper,
  SvgIconProps,
} from "@mui/material";
import { NavigationItem } from "../layouts/navigation/navLinks";
import { NavItem, NavItemButton } from "./NavItem";
import { useEffect, useState } from "react";
import { Link as RouterLink, useLocation } from "react-router-dom";
const MENUITEM_FONTSIZE = 14;

export interface NavMenuProps {
  title: string;
  Icon?: React.ElementType<SvgIconProps>;
  minWidth?: string;
  menuChildren: NavigationItem[];
}

// Use this for render menu groups
export const NavMenu = (props: NavMenuProps) => {
  const location = useLocation();
  const { minWidth = "100%", menuChildren, Icon, title } = props;
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);

  const handlePopoverClose = () => {
    setAnchorEl(null);
  };
  useEffect(() => {
    handlePopoverClose();
  }, [location]);

  const handleClick = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  ) => {
    setAnchorEl(event.currentTarget);
  };
  const handlePopoverOpen = (
    event: React.MouseEvent<HTMLElement, MouseEvent>,
  ) => {
    setAnchorEl(event.currentTarget);
  };

  const open = Boolean(anchorEl);

  return (
    <NavItemButton
      selected={false}
      onClick={handleClick}
      aria-owns={open ? `${title} popover` : undefined}
      aria-haspopup="true"
      disableRipple
      onMouseEnter={handlePopoverOpen}
      onMouseLeave={handlePopoverClose}
    >
      <NavItem showExpand Icon={Icon} title={title} selected={false} />
      <Popper
        open={open}
        anchorEl={anchorEl}
        placement="bottom-start"
        disablePortal
        sx={{
          zIndex: 9999,
          minWidth,
        }}
      >
        <Paper>
          <MenuList
            sx={{
              px: 1,
              "& .MuiMenuItem-root": {
                borderRadius: 0,
              },
            }}
          >
            {menuChildren.map((item, idx) => {
              const {
                href = "",
                title,
                type = "item",
                menuChildren,
                Icon,
              } = item;
              switch (type) {
                case "group":
                  return <>test</>;
                default: // leaf item
                  return (
                    <MenuItem
                      key={idx}
                      component={RouterLink}
                      to={href}
                      selected={false}
                      sx={{
                        fontSize: MENUITEM_FONTSIZE,
                      }}
                    >
                      {Icon && (
                        <ListItemIcon>
                          <Icon />
                        </ListItemIcon>
                      )}
                      {title}
                    </MenuItem>
                  );
              }
            })}
          </MenuList>
        </Paper>
      </Popper>
    </NavItemButton>
  );
};
