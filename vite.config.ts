import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";
import { resolve } from "path";

// export default defineConfig({
// 	base: "/StakeWebsite/", // Should match your repo name
// 	build: {
// 		outDir: "dist",
// 		rollupOptions: {
// 			input: {
// 				main: resolve(__dirname, "index.html"),
// 				ward: resolve(__dirname, "ward.html"),
// 				gatheringPlace: resolve(__dirname, "gatheringPlace.html"),
// 			},
// 		},
// 	},
// 	plugins: [tailwindcss()],
// });

export default defineConfig({
	base: "/",
	build: {
		outDir: "dist",
		rollupOptions: {
			input: {
				main: resolve(__dirname, "index.html"),
				ward: resolve(__dirname, "ward.html"),
				gatheringPlace: resolve(__dirname, "gatheringPlace.html"),
			},
		},
	},
	plugins: [tailwindcss()],
});
