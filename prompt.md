
You will be provided with given contexts. Your task is follow the given styles, procedures, guidelines to achive the goal of user request.

## Styles:

### Writing Style Guide:
1. Language: Clarity, Precision, and Simplicity
   - Write as if you’re showing the reader something in the world and the goal is to help the reader see something clearly.
   - Use descriptive but concise language. Favor clarity over elaborate descriptions.
   - Use an objective and understated tone when it aids the task; otherwise, maintain a balanced tone appropriate to the context.
   - Detached, stoic, selfless tone is preferred but balance it with a human touch.
   - Stay to the point and keep a balance. Be concise and clear to the core.
   - Use specific, concrete words.
   - Avoid technical jargon. Use accessible simple language that is easy to understand.
   - Avoid clichés; use fresh expressions. 
   - Eliminate unnecessary words
   - Use clear, straightforward language
   - Avoid unnecessary complexity
   - Prioritize readability and accessibility
   - Use active voice for directness
   - Show rather than tell. If a concept can be clearly stated in a few words, prefer that over a longer "showing" passage.
   - Simplify complex ideas accessibly, simple vocabulary that is easy to understand while keeping balance between simplicity and precision.
   - Use simple sentences, declarative sentences, balanced short and long sentences to maintain a natural rhythm.
   - Use a strightforward, and concise language.
   - Prefer verbs over nominalizations
2. Structure:
   - Organize ideas logically for e.g. present information in a familiar-to-new sequence.
   - Use bullet points, lists, hierarchical structure if helps to understand the text more easily.

### Code Writing Style Guide:
1. Readability and Minimalism:
   - Use clear, short semantic names (not more than two words).
   - Keep comments minimal and visual.
     - Create usage examples in comments.
     - Specify types.
     - Make it easily understandable at first glance using simple words.
   - Use emojis as visual aids if they enhance helpfulness and clarity.
   - Aim to keep the code as simple as possible.
   - Use comments wisely. Good code mostly documents itself.
   - Organize & Separate concerns based on actions, functions, data structures etc. Only if helps.
   - DO NOT USE Docjs comments for functions that are simple and no need to have, Use comments wisely.
   - Keep the types minimal, and use typescript interface for defining types.

2. Asynchronous Programming:
   - Prefer `async`, `await`, `try`, and `catch`.
   - Perfer using functional programming like map, filter, reduce, conditional operator, short circuit evaluation, ternary operator etc.

3. Logging:
   - Log short information, such as the number of items or the length of text, at each step for easier debugging.
   
4. Examples and Features:
   - Provide examples of usage for functions in common
   - Provide explanation for each line of code in one line minimalist comment.
   - Convert commented-out code into features, if helps.

5. Semantic naming:
    - Use meta-linguistic abstractions that capture key actions, functions, concepts and operations.
        - Identify core concepts, operations and actions given the domain context
        - Choose semantic names that makes code self-documenting and easier to understand
        - It should not be more than two words
        - Make sure names are align with industry standards and conventions in software development

6. Specify the path along with the file name in a markdown code block, you can include the full path after the language identifier. Here's the format:

```language:path/to/filename
code goes here
```
7. Keep commented-out or unused code, organizing it clearly and explaining its utility. Make useless code useful with good annotation.

## Procedures:
1. Observations: Identify and articulate the background of the problem, the problem or the user's query, what the code does, and note observations.
2. Problem: Clarify and articulate the problem.
3. Goal: Define the goal. What needs to be done to solve the problem?
4. Given background, think about the problem inside <thinking> tags. What needs to be done? Consider strategies, how to do it, hints, insights, etc. 
   - Write out your insights before beginning to solve the problem.
5. Actions: After thinking, list out the actions that need to be done to solve the problem.
6. Provide a solution based on background and problem. Include all the files when editing code for the sake of accessibility.
7. Reflect on the thought process and changes made. This should include reasoning behind decisions you made.
   - If you changed variable names, list them in the format: (old name) -> (new name).
8. What will be the next step given goal and background. Specify specific steps that can be done. It should be specific and actionable. It should not be suggestions.
9. Format using the Writing Style Guide.

Please follow these instructions carefully and try to be as specific as possible.
<system>


IMPORTANT: ALWAYS FOLLOW PROCEDURES FOR EVERY USER REQUEST.




# File Contents


```json:vercel.json
{
    "rewrites": [
        {
            "source": "/app/:match*",
            "destination": "/app"
        }
    ]
}

```
```typescript:src/theme/index.ts
import type { Direction, Theme } from "@mui/material";
import {
  createTheme as createMuiTheme,
  responsiveFontSizes,
} from "@mui/material/styles";
import { baseThemeOptions } from "./base-theme-options";
import { darkThemeOptions } from "./dark-theme-options";
import { lightThemeOptions } from "./light-theme-options";
import "./styles.css";

interface Neutral {
  100: string;
  200: string;
  300: string;
  400: string;
  500: string;
  600: string;
  700: string;
  800: string;
  900: string;
}

declare module "@mui/material/styles" {
  interface Palette {
    neutral?: Neutral;
  }

  interface PaletteOptions {
    neutral?: Neutral;
  }
}

interface ThemeConfig {
  direction?: Direction;
  responsiveFontSizes?: boolean;
  theme: "light" | "dark";
  lang: string;
}

export const createTheme = (config: ThemeConfig): Theme => {
  let theme = createMuiTheme(
    baseThemeOptions,
    config.theme === "dark" ? darkThemeOptions : lightThemeOptions,
    {
      direction: config.direction,
    }
  );

  if (config.responsiveFontSizes) {
    theme = responsiveFontSizes(theme);
  }

  return theme;
};


```
```typescript:src/theme/light-theme-options.ts
import { ThemeOptions } from "@mui/material";

// Colors

const neutral = {
  100: "#F3F4F6",
  200: "#E5E7EB",
  300: "#D1D5DB",
  400: "#9CA3AF",
  500: "#6B7280",
  600: "#4B5563",
  700: "#374151",
  800: "#1F2937",
  900: "#111827",
};

const background = {
  default: "#F9FAFC",
  paper: "#FFFFFF",
};

const divider = "#E6E8F0";

const primary = {
  main: "#5048E5",
  light: "#828DF8",
  dark: "#3832A0",
  contrastText: "#FFFFFF",
};

const secondary = {
  main: "#10B981",
  light: "#3FC79A",
  dark: "#0B815A",
  contrastText: "#FFFFFF",
};

const success = {
  main: "#14B8A6",
  light: "#43C6B7",
  dark: "#0E8074",
  contrastText: "#FFFFFF",
};

const info = {
  main: "#2196F3",
  light: "#64B6F7",
  dark: "#0B79D0",
  contrastText: "#FFFFFF",
};

const warning = {
  main: "#FFB020",
  light: "#FFBF4C",
  dark: "#B27B16",
  contrastText: "#FFFFFF",
};

const error = {
  main: "#D14343",
  light: "#DA6868",
  dark: "#922E2E",
  contrastText: "#FFFFFF",
};

const text = {
  primary: "#101828",
  secondary: "#475467",
  disabled: "rgba(55, 65, 81, 0.48)",
};

export const lightThemeOptions: ThemeOptions = {
  components: {
    MuiAvatar: {
      styleOverrides: {
        root: {
          backgroundColor: neutral[500],
          color: "#FFFFFF",
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          "&.MuiChip-filledDefault": {
            backgroundColor: neutral[200],
            "& .MuiChip-deleteIcon": {
              color: neutral[400],
            },
          },
          "&.MuiChip-outlinedDefault": {
            "& .MuiChip-deleteIcon": {
              color: neutral[300],
            },
          },
        },
      },
    },
    MuiInputBase: {
      defaultProps: {
        // Needed to prevent adding a global style for every input field
        disableInjectingGlobalStyles: true,
      },
      styleOverrides: {
        input: {
          "&::placeholder": {
            opacity: 1,
            color: text.secondary,
          },
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        notchedOutline: {
          borderColor: divider,
        },
      },
    },
    MuiMenu: {
      styleOverrides: {
        paper: {
          borderColor: divider,
          borderStyle: "solid",
          borderWidth: 1,
        },
      },
    },
    MuiPopover: {
      styleOverrides: {
        paper: {
          borderColor: divider,
          borderStyle: "solid",
          borderWidth: 1,
        },
      },
    },
    MuiSwitch: {
      styleOverrides: {
        switchBase: {
          color: neutral[500],
        },
        track: {
          backgroundColor: neutral[400],
          opacity: 1,
        },
      },
    },
    MuiTableCell: {
      styleOverrides: {
        root: {
          borderBottom: `1px solid ${divider}`,
        },
      },
    },
    MuiTableHead: {
      styleOverrides: {
        root: {
          backgroundColor: neutral[100],
          ".MuiTableCell-root": {
            color: neutral[700],
          },
        },
      },
    },
  },
  palette: {
    action: {
      active: neutral[500],
      focus: "rgba(55, 65, 81, 0.12)",
      hover: "rgba(55, 65, 81, 0.04)",
      selected: "rgba(55, 65, 81, 0.08)",
      disabledBackground: "rgba(55, 65, 81, 0.12)",
      disabled: "rgba(55, 65, 81, 0.26)",
    },
    background,
    divider,
    error,
    info,
    mode: "light",
    neutral,
    primary,
    secondary,
    success,
    text,
    warning,
  },
  shadows: [
    "none",
    "0px 1px 1px rgba(100, 116, 139, 0.06), 0px 1px 2px rgba(100, 116, 139, 0.1)",
    "0px 1px 2px rgba(100, 116, 139, 0.12)",
    "0px 1px 4px rgba(100, 116, 139, 0.12)",
    "0px 1px 5px rgba(100, 116, 139, 0.12)",
    "0px 1px 6px rgba(100, 116, 139, 0.12)",
    "0px 2px 6px rgba(100, 116, 139, 0.12)",
    "0px 3px 6px rgba(100, 116, 139, 0.12)",
    "0px 2px 4px rgba(31, 41, 55, 0.06), 0px 4px 6px rgba(100, 116, 139, 0.12)",
    "0px 5px 12px rgba(100, 116, 139, 0.12)",
    "0px 5px 14px rgba(100, 116, 139, 0.12)",
    "0px 5px 15px rgba(100, 116, 139, 0.12)",
    "0px 6px 15px rgba(100, 116, 139, 0.12)",
    "0px 7px 15px rgba(100, 116, 139, 0.12)",
    "0px 8px 15px rgba(100, 116, 139, 0.12)",
    "0px 9px 15px rgba(100, 116, 139, 0.12)",
    "0px 10px 15px rgba(100, 116, 139, 0.12)",
    "0px 12px 22px -8px rgba(100, 116, 139, 0.25)",
    "0px 13px 22px -8px rgba(100, 116, 139, 0.25)",
    "0px 14px 24px -8px rgba(100, 116, 139, 0.25)",
    "0px 10px 10px rgba(31, 41, 55, 0.04), 0px 20px 25px rgba(31, 41, 55, 0.1)",
    "0px 25px 50px rgba(100, 116, 139, 0.25)",
    "0px 25px 50px rgba(100, 116, 139, 0.25)",
    "0px 25px 50px rgba(100, 116, 139, 0.25)",
    "0px 25px 50px rgba(100, 116, 139, 0.25)",
  ],
};


```
```css:src/theme/styles.css
.grecaptcha-badge {
  visibility: hidden;
}
a {
  color: #7350ff;
  text-decoration: none;
}

a:hover {
  text-decoration: underline;
}

:target {
  scroll-margin-top: 76px;
}


```
```typescript:src/theme/base-theme-options.ts
import { ThemeOptions } from "@mui/material";

export const baseThemeOptions: ThemeOptions = {
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 1000,
      lg: 1200,
      xl: 1920,
    },
  },
  components: {
    MuiAvatar: {
      styleOverrides: {
        root: {
          fontSize: 14,
          fontWeight: 600,
          letterSpacing: 0,
        },
      },
    },
    MuiButton: {
      defaultProps: {
        disableElevation: true,
      },
      styleOverrides: {
        root: {
          textTransform: "none",
          ":focus": {
            boxShadow: `#3FC79A 0 0 0 0.2rem`,
          },
        },

        sizeSmall: {
          padding: "6px 16px",
        },
        sizeMedium: {
          padding: "8px 20px",
        },
        sizeLarge: {
          padding: "11px 24px",
        },
        textSizeSmall: {
          padding: "7px 12px",
        },
        textSizeMedium: {
          padding: "9px 16px",
        },
        textSizeLarge: {
          padding: "12px 16px",
        },
      },
    },
    MuiButtonBase: {
      defaultProps: {
        disableRipple: true,
      },
    },
    MuiCardActions: {
      styleOverrides: {
        root: {
          padding: "16px 24px",
        },
      },
    },
    MuiCardContent: {
      styleOverrides: {
        root: {
          padding: "32px 24px",
          "&:last-child": {
            paddingBottom: "32px",
          },
        },
      },
    },
    MuiCardHeader: {
      defaultProps: {
        titleTypographyProps: {
          variant: "h6",
        },
        subheaderTypographyProps: {
          variant: "body2",
        },
      },
      styleOverrides: {
        root: {
          padding: "32px 24px",
        },
      },
    },
    MuiCheckbox: {
      defaultProps: {
        color: "primary",
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          fontWeight: 500,
        },
      },
    },
    MuiCssBaseline: {
      styleOverrides: {
        "*": {
          boxSizing: "border-box",
        },
        html: {
          MozOsxFontSmoothing: "grayscale",
          WebkitFontSmoothing: "antialiased",
          display: "flex",
          flexDirection: "column",
          minHeight: "100%",
          width: "100%",
        },
        body: {
          display: "flex",
          flex: "1 1 auto",
          flexDirection: "column",
          minHeight: "100%",
          width: "100%",
        },
        "#__next": {
          display: "flex",
          flex: "1 1 auto",
          flexDirection: "column",
          height: "100%",
          width: "100%",
        },
        "#nprogress": {
          pointerEvents: "none",
        },
        "#nprogress .bar": {
          backgroundColor: "#5048E5",
          height: 3,
          left: 0,
          position: "fixed",
          top: 0,
          width: "100%",
          zIndex: 2000,
        },
      },
    },
    MuiIconButton: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          padding: 8,
        },
        sizeSmall: {
          padding: 4,
        },
      },
    },
    MuiLinearProgress: {
      styleOverrides: {
        root: {
          borderRadius: 3,
          overflow: "hidden",
        },
      },
    },
    MuiLink: {
      defaultProps: {
        underline: "hover",
      },
    },
    MuiListItemIcon: {
      styleOverrides: {
        root: {
          marginRight: "2px",
          "&.MuiListItemIcon-root": {
            minWidth: "unset",
          },
        },
      },
    },
    MuiListItem: {
      styleOverrides: {
        root: {
          "&.MuiListItem-root": {
            paddingLeft: "10px",
          },
        },
      },
    },
    MuiListItemText: {
      styleOverrides: {
        root: {
          paddingLeft: "20px",
        },
        dense: {
          paddingLeft: "24px",
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        input: {
          fontWeight: 500,
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundImage: "none",
        },
      },
    },
    MuiPopover: {
      defaultProps: {
        elevation: 16,
      },
    },
    MuiRadio: {
      defaultProps: {
        color: "primary",
      },
    },
    MuiSwitch: {
      defaultProps: {
        color: "primary",
      },
    },
    MuiTab: {
      styleOverrides: {
        root: {
          fontSize: 14,
          fontWeight: 500,
          lineHeight: 1.71,
          minWidth: "auto",
          paddingLeft: 0,
          paddingRight: 0,
          textTransform: "none",
          "& + &": {
            marginLeft: 24,
          },
        },
      },
    },
    MuiTableCell: {
      styleOverrides: {
        root: {
          padding: "15px 16px",
        },
      },
    },
    MuiTableHead: {
      styleOverrides: {
        root: {
          borderBottom: "none",
          "& .MuiTableCell-root": {
            borderBottom: "none",
            fontSize: "12px",
            fontWeight: 600,
            lineHeight: 1,
            letterSpacing: 0.5,
            textTransform: "uppercase",
          },
          "& .MuiTableCell-paddingCheckbox": {
            paddingTop: 4,
            paddingBottom: 4,
          },
        },
      },
    },
  },
  direction: "ltr",
  shape: {
    borderRadius: 8,
  },
  typography: {
    button: {
      fontWeight: 600,
    },
    fontFamily:
      '"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji"',
    body1: {
      fontSize: "1rem",
      fontWeight: 400,
      lineHeight: 1.5,
    },
    body2: {
      fontSize: "0.875rem",
      fontWeight: 400,
      lineHeight: 1.57,
    },
    subtitle1: {
      fontSize: "1rem",
      fontWeight: 500,
      lineHeight: 1.75,
    },
    subtitle2: {
      fontSize: "0.875rem",
      fontWeight: 500,
      lineHeight: 1.57,
    },
    overline: {
      fontSize: "0.75rem",
      fontWeight: 600,
      letterSpacing: "0.5px",
      lineHeight: 2.5,
      textTransform: "uppercase",
    },
    caption: {
      fontSize: "0.75rem",
      fontWeight: 400,
      lineHeight: 1.66,
    },
    h1: {
      fontWeight: 700,
      fontSize: "2.5rem",
      lineHeight: 1.375,
    },
    h2: {
      fontWeight: 700,
      fontSize: "2rem",
      lineHeight: 1.375,
    },
    h3: {
      fontWeight: 700,
      fontSize: "1.8rem",
      lineHeight: 1.375,
    },
    h4: {
      fontWeight: 700,
      fontSize: "1.6rem",
      lineHeight: 1.275,
    },
    h5: {
      fontWeight: 600,
      fontSize: "1.2rem",
      lineHeight: 1.275,
    },
    h6: {
      fontWeight: 600,
      fontSize: "1rem",
      lineHeight: 1.375,
    },
  },
  zIndex: {
    appBar: 1200,
    drawer: 1100,
  },
};


```
```typescript:src/theme/typography.tsx
export default {
  fontFamily: [
    "Roboto",
    "Tahoma",
    "-apple-system",
    "BlinkMacSystemFont",
    '"Segoe UI"',
    "DM Sans",
    '"Helvetica Neue"',
    "Inter",
    "sans-serif",
    '"Apple Color Emoji"',
    '"Segoe UI Emoji"',
    '"Segoe UI Symbol"',
  ].join(","),
  fontSize: 13,
  fontWeightLight: 300,
  fontWeightRegular: 400,
  fontWeightMedium: 500,
  fontWeightBold: 600,
  h1: {
    fontWeight: 500,
    fontSize: 35,
    letterSpacing: "-0.24px",
  },
  h2: {
    fontWeight: 500,
    fontSize: 29,
    letterSpacing: "-0.24px",
  },
  h3: {
    fontWeight: 500,
    fontSize: 24,
    letterSpacing: "-0.06px",
  },
  h4: {
    fontWeight: 500,
    fontSize: 20,
    letterSpacing: "-0.06px",
  },
  h5: {
    fontWeight: 500,
    fontSize: 16,
    letterSpacing: "-0.05px",
  },
  h6: {
    fontWeight: 500,
    fontSize: 14,
    letterSpacing: "-0.05px",
  },
  overline: {
    fontWeight: 500,
  },
};


```
```typescript:src/theme/dark-theme-options.ts
import { ThemeOptions } from "@mui/material";

// Colors

const neutral = {
  100: "#F3F4F6",
  200: "#E5E7EB",
  300: "#D1D5DB",
  400: "#9CA3AF",
  500: "#6B7280",
  600: "#4B5563",
  700: "#374151",
  800: "#1F2937",
  900: "#111827",
};

const background = {
  default: "#0B0F19",
  paper: neutral[900],
};

const divider = "#2D3748";

const primary = {
  main: "#7582EB",
  light: "#909BEF",
  dark: "#515BA4",
  contrastText: neutral[900],
};

const secondary = {
  main: "#10B981",
  light: "#3FC79A",
  dark: "#0B815A",
  contrastText: neutral[900],
};

const success = {
  main: "#14B8A6",
  light: "#43C6B7",
  dark: "#0E8074",
  contrastText: neutral[900],
};

const info = {
  main: "#2196F3",
  light: "#64B6F7",
  dark: "#0B79D0",
  contrastText: neutral[900],
};

const warning = {
  main: "#FFB020",
  light: "#FFBF4C",
  dark: "#B27B16",
  contrastText: neutral[900],
};

const error = {
  main: "#D14343",
  light: "#DA6868",
  dark: "#922E2E",
  contrastText: neutral[900],
};

const text = {
  primary: "#AEAFB0",
  secondary: "#A0AEC0",
  disabled: "rgba(255, 255, 255, 0.48)",
};

export const darkThemeOptions: ThemeOptions = {
  components: {
    MuiAvatar: {
      styleOverrides: {
        root: {
          backgroundColor: neutral[500],
          color: "#FFFFFF",
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          "&.MuiChip-filledDefault": {
            backgroundColor: neutral[800],
            "& .MuiChip-deleteIcon": {
              color: neutral[500],
            },
          },
          "&.MuiChip-outlinedDefault": {
            borderColor: neutral[700],
            "& .MuiChip-deleteIcon": {
              color: neutral[700],
            },
          },
        },
      },
    },
    MuiInputBase: {
      defaultProps: {
        // Needed to prevent adding a global style for every input field
        disableInjectingGlobalStyles: true,
      },
      styleOverrides: {
        input: {
          "&::placeholder": {
            opacity: 1,
            color: text.secondary,
          },
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        notchedOutline: {
          borderColor: divider,
        },
      },
    },
    MuiMenu: {
      styleOverrides: {
        paper: {
          borderColor: divider,
          borderStyle: "solid",
          borderWidth: 1,
        },
      },
    },
    MuiPopover: {
      styleOverrides: {
        paper: {
          borderColor: divider,
          borderStyle: "solid",
          borderWidth: 1,
        },
      },
    },
    MuiSwitch: {
      styleOverrides: {
        switchBase: {
          color: neutral[700],
        },
        track: {
          backgroundColor: neutral[500],
          opacity: 1,
        },
      },
    },
    MuiTableCell: {
      styleOverrides: {
        root: {
          borderBottom: `1px solid ${divider}`,
        },
      },
    },
    MuiTableHead: {
      styleOverrides: {
        root: {
          backgroundColor: neutral[800],
          ".MuiTableCell-root": {
            color: neutral[300],
          },
        },
      },
    },
  },
  palette: {
    action: {
      active: neutral[400],
      hover: "rgba(255, 255, 255, 0.04)",
      selected: "rgba(255, 255, 255, 0.08)",
      disabledBackground: "rgba(255, 255, 255, 0.12)",
      disabled: "rgba(255, 255, 255, 0.26)",
    },
    background,
    divider,
    error,
    info,
    mode: "dark",
    neutral,
    primary,
    secondary,
    success,
    text,
    warning,
  },
  shadows: [
    "none",
    "0px 1px 2px rgba(0, 0, 0, 0.24)",
    "0px 1px 2px rgba(0, 0, 0, 0.24)",
    "0px 1px 4px rgba(0, 0, 0, 0.24)",
    "0px 1px 5px rgba(0, 0, 0, 0.24)",
    "0px 1px 6px rgba(0, 0, 0, 0.24)",
    "0px 2px 6px rgba(0, 0, 0, 0.24)",
    "0px 3px 6px rgba(0, 0, 0, 0.24)",
    "0px 4px 6px rgba(0, 0, 0, 0.24)",
    "0px 5px 12px rgba(0, 0, 0, 0.24)",
    "0px 5px 14px rgba(0, 0, 0, 0.24)",
    "0px 5px 15px rgba(0, 0, 0, 0.24)",
    "0px 6px 15px rgba(0, 0, 0, 0.24)",
    "0px 7px 15px rgba(0, 0, 0, 0.24)",
    "0px 8px 15px rgba(0, 0, 0, 0.24)",
    "0px 9px 15px rgba(0, 0, 0, 0.24)",
    "0px 10px 15px rgba(0, 0, 0, 0.24)",
    "0px 12px 22px -8px rgba(0, 0, 0, 0.24)",
    "0px 13px 22px -8px rgba(0, 0, 0, 0.24)",
    "0px 14px 24px -8px rgba(0, 0, 0, 0.24)",
    "0px 20px 25px rgba(0, 0, 0, 0.24)",
    "0px 25px 50px rgba(0, 0, 0, 0.24)",
    "0px 25px 50px rgba(0, 0, 0, 0.24)",
    "0px 25px 50px rgba(0, 0, 0, 0.24)",
    "0px 25px 50px rgba(0, 0, 0, 0.24)",
  ],
};


```
No objectives defined.