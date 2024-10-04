import type { Config } from "tailwindcss";

<<<<<<< HEAD
const {nextui} = require("@nextui-org/react");

=======
>>>>>>> origin/main
const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
<<<<<<< HEAD
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
=======
>>>>>>> origin/main
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
<<<<<<< HEAD
  darkMode : 'class',
  plugins: [nextui()],
=======
  plugins: [],
>>>>>>> origin/main
};
export default config;
