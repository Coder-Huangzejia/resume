import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vitejs.dev/config/
export default ({ mode }: { mode: string }) => {
  const { VITE_PORT } = loadEnv(mode, process.cwd());
  return defineConfig({
    plugins: [react()],
    server: {
      port: Number(VITE_PORT),
    },
  });
};
