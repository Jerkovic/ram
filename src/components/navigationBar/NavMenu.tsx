import * as React from "react";
import {
  ListItemIcon,
  ListItemText,
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
import Typography from "@mui/material/Typography";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
const MENUITEM_FONTSIZE = 14;

export interface NavMenuProps {
  title: string;
  Icon?: React.ElementType<SvgIconProps>;
  minWidth?: string;
  menuChildren: NavigationItem[];
}

export interface NavCollapseProps {
  title: string;
  Icon?: React.ElementType<SvgIconProps>;
  menuChildren: NavigationItem[];
  level?: number;
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
                  return (
                    <NavCollapse
                      key={idx}
                      title={title}
                      menuChildren={menuChildren ?? []}
                      Icon={Icon}
                    />
                  );
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

export const NavCollapse = (props: NavCollapseProps) => {
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);
  const { title, menuChildren, level = 1 } = props;
  const handlePopoverClose = () => {
    setAnchorEl(null);
  };
  useEffect(() => {
    handlePopoverClose();
  }, [location]);

  const handlePopoverOpen = (
    event: React.MouseEvent<HTMLElement, MouseEvent>,
  ) => {
    setAnchorEl(event.currentTarget);
  };

  const open = Boolean(anchorEl);

  return (
    <MenuItem
      sx={{
        fontSize: MENUITEM_FONTSIZE,
      }}
      selected={open}
      aria-owns={open ? `${title} popover` : undefined}
      aria-haspopup="true"
      onMouseEnter={handlePopoverOpen}
      onMouseLeave={handlePopoverClose}
    >
      <ListItemText
        primary={
          <Typography variant="inherit" align="left">
            {title}
          </Typography>
        }
      />
      <ChevronRightIcon fontSize="small" />
      <Popper
        open={open}
        anchorEl={anchorEl}
        placement="right-start"
        keepMounted
        disablePortal
        sx={{
          zIndex: 9999,
        }}
      >
        <Paper>
          <MenuList
            sx={{
              px: 1,
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
                  return (
                    <NavCollapse
                      key={idx}
                      title={title}
                      menuChildren={menuChildren ?? []}
                      Icon={Icon}
                      level={level + 1}
                    />
                  );
                default: // leaf item
                  return (
                    <MenuItem
                      key={idx}
                      component={RouterLink}
                      to={href}
                      selected={false}
                      sx={{
                        fontSize: "inherit",
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
    </MenuItem>
  );
};
