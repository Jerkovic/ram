import * as React from "react";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { alpha, ButtonBase, SvgIconProps, SxProps, Theme } from "@mui/material";
import { Link as RouterLink, useMatch } from "react-router-dom";
import { ReactNode } from "react";

interface NavItemProps {
  Icon?: React.ElementType<SvgIconProps>;
  title: string;
  showExpand: boolean;
  selected: boolean;
}

export const NavItem = (props: NavItemProps) => {
  return (
    <Stack
      width="100%"
      direction="row"
      p={1.5}
      border={1}
      borderLeft={0}
      borderColor="border"
      alignItems="center"
      alignContent="center"
      justifyContent="center"
      spacing={0.5}
      title={props.title}
    >
      {props.Icon && (
        <props.Icon
          sx={{
            color: "white",
            fontSize: 18,
          }}
        />
      )}
      <Typography
        pt={0.2}
        display={{
          xs: "none",
          md: "inline",
        }}
        textTransform="uppercase"
        fontWeight="500"
        fontSize="13px"
        color={props.selected ? "primary.contrastText" : "text.tertiary"}
      >
        {props.title}
      </Typography>
      {props.showExpand && (
        <ExpandMoreIcon
          fontSize="small"
          sx={{
            color: props.selected ? "primary.contrastText" : "text.white",
            fontSize: 17,
          }}
        />
      )}
    </Stack>
  );
};

interface NavItemButtonProps {
  children: ReactNode;
  selected: boolean;
  sx?: SxProps<Theme>;
  [key: string]: unknown;
}

export function NavItemButton(props: NavItemButtonProps) {
  const { ...rest } = props;
  return (
    <ButtonBase
      sx={{
        flexGrow: 1,
        "&:hover": {
          backgroundColor: (theme) => alpha(theme.palette.primary.light, 0.5),
        },
      }}
      {...rest}
    >
      {props.children}
    </ButtonBase>
  );
}

interface NavLinkProps {
  href: string;
  Icon?: React.ElementType<SvgIconProps>;
  title: string;
  showExpand: boolean;
}
function NavLink(props: NavLinkProps) {
  const { href, Icon, title, showExpand } = props;
  const match = useMatch({
    path: href,
  });

  return (
    <NavItemButton selected={match !== null} component={RouterLink} to={href}>
      <NavItem
        Icon={Icon}
        title={title}
        selected={match !== null}
        showExpand={showExpand}
      />
    </NavItemButton>
  );
}

export default NavLink;
