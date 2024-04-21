import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        // Configure your color palette here
        'light-primary': '#4169e1',
        'light-secondary': '#808080',
        'dark-primary': '#ffffff',
        'dark-secondary': '#ffffff',
      },
      width: {
        '100':'30rem',
        '128': '32rem',
        '130':'32rem',
        '150':'60rem'
      },
      height: {
        '100':'40rem',
        '128': '42rem',
        '150':'41rem'
      },
      blur: {
        xs: '1px',
      },
      boxShadow: {
        "3xl": "30px 0 50px 0 rgba(0, 0, 0, 0.3)",
        "dsd": "0 0 25px 0 rgba(0,0,0,0.04)",
        "3xlg": "0px 4px 6px -1px rgba(f, f, f, 0.8), 0px 2px 4px -1px rgba(0, 0, 0, 0.06)",
      }
    },
  },
  plugins: [require("daisyui")],
};
export default config;
