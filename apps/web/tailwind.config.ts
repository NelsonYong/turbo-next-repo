import type { Config } from "tailwindcss";
import nextUIConfig from "ui/tailwind.config";

const config: Partial<Config> = {
  presets: [nextUIConfig as Config],
};

export default config;
