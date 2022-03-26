import { createTheme } from "@mui/material";

declare module "@mui/material/styles" {
  interface Theme {
    status: {
      danger: string;
    };
  }
  // allow configuration using `createTheme`
  interface ThemeOptions {
    status?: {
      danger?: string;
    };
  }
}

export const theme = createTheme({
  palette: {
    primary: {
      main: "#3d1717",
    },
    secondary: {
      main: "#ffffff",
    },
    background: {
      default: "#080000",
    },
    text: {
      primary: "#ffffff",
    },
  },
});
