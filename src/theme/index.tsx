import {
  createTheme as createMuiTheme,
  CssBaseline,
  ThemeProvider,
} from "@mui/material";

import { createPalette } from "./createPalette";
import { createComponents } from "./createComponents";
import { ColorPartial } from "@mui/material/styles/createPalette";

declare module "@mui/material/styles" {
  interface Palette {
    neutral: Palette["primary"];
  }

  interface PaletteOptions {
    neutral: ColorPartial;
  }
}

function createTheme() {
  const palette = createPalette();
  const components = createComponents({ palette });

  return createMuiTheme({
    breakpoints: {
      values: {
        xs: 0,
        sm: 600,
        md: 900,
        lg: 1200,
        xl: 1440,
      },
    },
    components,
    palette,
    shape: {
      borderRadius: 8,
    },
  });
}

type Props = {
  children: React.ReactNode;
};

function CustomThemeProvider({ children }: Props) {
  const theme = createTheme();

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
}

export default CustomThemeProvider;
