import type { Config } from "tailwindcss";
import daisyui from "daisyui";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Background Colors
        background: {
          DEFAULT: '#DCECF2', // Light Grayish Blue
          section: '#F9FAFB', // Cool White
        },

        // Primary Colors
        primary: '#5BA69C', // Muted Teal
        header: '#367A8B', // Steel Blue

        // Secondary Colors
        secondary: {
          light: '#A3D9CF', // Light Aqua
          contrast: '#F4EDE6', // Soft Beige
        },
        
        // Text Colors
        text: {
          primary: '#3C4858', // Charcoal Gray
          secondary: '#6C757D', // Muted Gray
        },

        // Accent Colors
        accent: {
          bright: '#29B6F6', // Bright Turquoise
          subtle: '#F9D876', // Soft Yellow
        },
      },

    },
  },
  plugins: [daisyui],
  daisyui: {
    themes: [
      {
        propertyhub: {
          primary: '#5BA69C', // Muted Teal
          secondary: '#367A8B', // Steel Blue
          accent: '#29B6F6', // Bright Turquoise
          neutral: '#3C4858', // Charcoal Gray
          'base-100': '#E6EEF1', // Light Grayish Blue
          info: '#A3D9CF', // Light Aqua
          success: '#5BA69C', // Muted Teal (for success)
          warning: '#F9D876', // Soft Yellow
          error: '#F86767', // Bright Coral Red (for errors)
        },
      },
    ],
  }
} satisfies Config;
