/**
 * Loom Design System Theme Configuration
 * Centralized theme values based on design-system.md
 */

export const theme = {
  colors: {
    primary: {
      50: "hsl(138 100% 97%)",
      100: "hsl(141 84% 93%)",
      200: "hsl(141 78% 85%)",
      300: "hsl(142 77% 73%)",
      400: "hsl(142 69% 58%)",
      500: "hsl(150 50% 45%)", // Main brand color #39ac73
      600: "hsl(152 52% 36%)",
      700: "hsl(153 48% 28%)",
      800: "hsl(152 44% 22%)",
      900: "hsl(151 49% 19%)",
    },
    secondary: {
      50: "hsl(166 76% 97%)",
      100: "hsl(167 85% 89%)",
      200: "hsl(168 84% 78%)",
      300: "hsl(171 77% 64%)",
      400: "hsl(172 66% 50%)",
      500: "hsl(173 80% 40%)",
      600: "hsl(175 84% 32%)",
      700: "hsl(175 77% 26%)",
      900: "hsl(176 69% 22%)",
    },
    accent: {
      50: "hsl(33 100% 97%)",
      100: "hsl(34 100% 92%)",
      200: "hsl(32 98% 83%)",
      300: "hsl(31 97% 72%)",
      400: "hsl(27 96% 61%)",
      500: "hsl(25 95% 53%)",
      600: "hsl(21 90% 48%)",
      700: "hsl(17 88% 40%)",
      900: "hsl(15 79% 25%)",
    },
    gray: {
      50: "hsl(210 20% 98%)",
      100: "hsl(220 14% 96%)",
      200: "hsl(210 14% 89%)",
      300: "hsl(214 12% 82%)",
      400: "hsl(218 11% 65%)",
      500: "hsl(220 9% 46%)",
      600: "hsl(215 14% 34%)",
      700: "hsl(217 19% 27%)",
      800: "hsl(215 28% 17%)",
      900: "hsl(221 39% 11%)",
    },
    semantic: {
      success: "hsl(142 71% 45%)",
      warning: "hsl(38 92% 50%)",
      error: "hsl(0 72% 51%)",
      info: "hsl(217 91% 60%)",
    },
    nodeCategory: {
      prerequisite: {
        main: "hsl(258 90% 66%)",
        light: "hsl(250 95% 76%)",
        bg: "hsl(270 100% 98%)",
        border: "hsl(251 91% 73%)",
      },
      core: {
        main: "hsl(150 50% 45%)",
        light: "hsl(142 77% 73%)",
        bg: "hsl(138 100% 97%)",
        border: "hsl(142 69% 58%)",
      },
      advanced: {
        main: "hsl(25 95% 53%)",
        light: "hsl(31 97% 72%)",
        bg: "hsl(33 100% 97%)",
        border: "hsl(27 96% 61%)",
      },
    },
    status: {
      notStarted: "hsl(210 14% 89%)",
      inProgress: "hsl(150 50% 45%)",
      completed: "hsl(142 71% 45%)",
      skipped: "hsl(215 16% 47%)",
    },
  },

  spacing: {
    xs: "0.25rem", // 4px
    sm: "0.5rem", // 8px
    md: "1rem", // 16px
    lg: "1.5rem", // 24px
    xl: "2rem", // 32px
    "2xl": "3rem", // 48px
    "3xl": "4rem", // 64px
    "4xl": "6rem", // 96px
  },

  borderRadius: {
    none: "0",
    sm: "0.25rem", // 4px
    md: "0.5rem", // 8px
    lg: "0.75rem", // 12px
    xl: "1rem", // 16px
    "2xl": "1.5rem", // 24px
    full: "9999px",
  },

  shadows: {
    sm: "0 1px 2px 0 rgba(0, 0, 0, 0.05)",
    md: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
    lg: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
    xl: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
    "2xl": "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
    inner: "inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)",
    primary:
      "0 10px 15px -3px rgba(57, 172, 115, 0.3), 0 4px 6px -2px rgba(57, 172, 115, 0.15)",
    success:
      "0 10px 15px -3px rgba(16, 185, 129, 0.3), 0 4px 6px -2px rgba(16, 185, 129, 0.15)",
  },

  transitions: {
    fast: "150ms cubic-bezier(0.4, 0, 0.2, 1)",
    base: "200ms cubic-bezier(0.4, 0, 0.2, 1)",
    slow: "300ms cubic-bezier(0.4, 0, 0.2, 1)",
    slower: "500ms cubic-bezier(0.4, 0, 0.2, 1)",
  },

  typography: {
    fontFamily: {
      sans: '"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
      mono: '"Fira Code", "Monaco", "Courier New", monospace',
    },
    fontSize: {
      xs: "0.75rem", // 12px
      sm: "0.875rem", // 14px
      base: "1rem", // 16px
      lg: "1.125rem", // 18px
      xl: "1.25rem", // 20px
      "2xl": "1.5rem", // 24px
      "3xl": "1.875rem", // 30px
      "4xl": "2.25rem", // 36px
      "5xl": "3rem", // 48px
    },
    fontWeight: {
      normal: 400,
      medium: 500,
      semibold: 600,
      bold: 700,
      extrabold: 800,
    },
    lineHeight: {
      tight: 1.25,
      normal: 1.5,
      relaxed: 1.75,
    },
  },

  breakpoints: {
    sm: "640px",
    md: "768px",
    lg: "1024px",
    xl: "1280px",
    "2xl": "1536px",
  },

  zIndex: {
    dropdown: 1000,
    sticky: 1020,
    fixed: 1030,
    modalBackdrop: 1040,
    modal: 1050,
    popover: 1060,
    tooltip: 1070,
  },
} as const;

export type Theme = typeof theme;
