import { createTheme } from "@mui/material/styles";
import { blue, red, grey } from "@mui/material/colors";

export const defaultTheme = createTheme({
  palette: {
    primary: {
      main: blue[600],
    },
    secondary: {
      main: grey[500],
    },
    error: {
      main: red[600],
    },
    background: {
      default: "#f0f2f5",
    },
    text: {
      primary: "#000000d9",
      secondary: "#00000073",
    },
  },
  typography: {
    fontFamily: `Roboto, "Helvetica" , "-apple-system" , "Arial", sans-serif`,
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
