import { createTheme } from "@mui/material/styles";

export const defaultTheme = createTheme({
  palette: {
    background: {},
  },
  typography: {
    fontFamily: "Arial",
    button: {
      textTransform: "none",
    },
  },
  shape: {
    borderRadius: 0,
  },
  components: {
    MuiCssBaseline: {},
    MuiDialogTitle: {
      styleOverrides: {
        root: {
          backgroundColor: "#efefef",
        },
      },
    },
    MuiDialogActions: {
      styleOverrides: {
        root: {
          backgroundColor: "#FFF",
        },
      },
    },
    MuiInputBase: {
      styleOverrides: {
        root: {
          backgroundColor: "#fff",
        },
      },
    },
    MuiLink: {
      defaultProps: {
        underline: "hover",
      },
    },
    MuiList: {
      styleOverrides: {
        root: {},
      },
    },
    MuiAutocomplete: {
      styleOverrides: {
        paper: {
          backgroundColor: "#fff",
          border: "1px solid #000",
          borderRadius: 0,
        },
      },
    },
    MuiCheckbox: {
      styleOverrides: {
        root: {
          backgroundColor: "transparent",
        },
      },
    },
    MuiButtonBase: {
      defaultProps: {
        disableRipple: true,
      },
    },
    MuiButton: {},
  },
});
