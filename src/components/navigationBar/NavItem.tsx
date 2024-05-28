import * as React from "react";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { ButtonBase, SvgIconProps, SxProps, Theme } from "@mui/material";
import { Link as RouterLink, useMatch } from "react-router-dom";
import { ReactNode } from "react";

interface NavItemProps {
  Icon?: React.ElementType<SvgIconProps>;
  title: string;
  showExpand: boolean;
  selected: boolean;
}

const NavItem = (props: NavItemProps) => {
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
            color: props.selected ? "primary.contrastText" : "text.secondary",
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
  component: React.ElementType;
  to: string;
}

export function NavItemButton(props: NavItemButtonProps) {
  return (
    <ButtonBase
      sx={{
        flexGrow: 1,
      }}
      component={props.component}
      to={props.to}
    >
      {props.children}
    </ButtonBase>
  );
}

interface NavLinkProps {
  href: string;
  Icon?: React.ElementType<SvgIconProps>;
  title: string;
}
export function NavLink(props: NavLinkProps) {
  const { href, Icon, title } = props;
  const match = useMatch({
    path: href,
  });

  return (
    <NavItemButton selected={match !== null} component={RouterLink} to={href}>
      <NavItem
        Icon={Icon}
        title={title}
        selected={match !== null}
        showExpand={false}
      />
    </NavItemButton>
  );
}

export default NavLink;
