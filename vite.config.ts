import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

export default defineConfig({
  resolve: {
    alias: {
      src: "/src",
    },
  },
  plugins: [react()],
  define: {
    "proccess.env.VITE_REACT_API_URL": JSON.stringify(
      process.env.VITE_REACT_API_URL
    ),
    "proccess.env.VITE_USER_ID": JSON.stringify(process.env.VITE_USER_ID),
  },
});
