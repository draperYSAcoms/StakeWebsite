import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
	base: "/StakeWebsite/", // Should match your repo name
	build: {
		outDir: "dist",
	},
	plugins: [tailwindcss()],
});
