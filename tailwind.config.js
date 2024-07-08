/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      fontFamily: {
        display: ["Playfair Display", "sans-serif"],
        body: ["Outfit", "sans-serif"],
      },
      fontSize: {
        "display-2xl": [
          "72px",
          {
            letterSpacing: "-0.025em",
            lineHeight: "96px",
          },
        ],
        "display-xl": [
          "60px",
          {
            letterSpacing: "-0.025em",
            lineHeight: "72px",
          },
        ],
        "display-lg": [
          "48px",
          {
            letterSpacing: "0em",
            lineHeight: "60px",
          },
        ],
        "display-md": [
          "36px",
          {
            letterSpacing: "0em",
            lineHeight: "48px",
          },
        ],
        "display-sm": [
          "30px",
          {
            letterSpacing: "0em",
            lineHeight: "40px",
          },
        ],
        "display-xs": [
          "24px",
          {
            letterSpacing: "0em",
            lineHeight: "32px",
          },
        ],
        "body-xl": [
          "20px",
          {
            letterSpacing: "0em",
            lineHeight: "32px",
          },
        ],
        "body-lg": [
          "18px",
          {
            letterSpacing: "0em",
            lineHeight: "32px",
          },
        ],
        "body-md": [
          "16px",
          {
            letterSpacing: "0em",
            lineHeight: "24px",
          },
        ],
        "body-sm": [
          "14px",
          {
            letterSpacing: "0em",
            lineHeight: "24px",
          },
        ],
        "body-xs": [
          "12px",
          {
            letterSpacing: "0em",
            lineHeight: "16px",
          },
        ],
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
