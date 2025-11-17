/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			clipPath: {
				"diagonal-25": "polygon(0 100%, 100% 0, 100% 100%)",
			},
		},
	},
	plugins: [],
};
