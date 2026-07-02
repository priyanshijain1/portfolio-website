/** @type {import('tailwindcss').Config} */
module.exports = {
	mode: "jit",
	content: [
		"./pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./components/**/*.{js,ts,jsx,tsx,mdx}",
		"./app/**/*.{js,ts,jsx,tsx,mdx}"
	],
	theme: {
		extend: {
			colors: {
				primary: "#FFD700",
				secondary: "#FFC300",
				tertiary: "#FFF0A0",
				quaternary: "#FFFBE6",
				five: "#FFFFF0",
				accentCyan: "#00F3FF",
				accentPink: "#FF1493",

				ctnPrimaryLight: "#F3F4F6",
				ctnSecondaryLight: "#9CA3AF",

				ctnPrimaryDark: "#F3F4F6",
				ctnSecondaryDark: "#9CA3AF"
			},
			boxShadow: {
				card: "0px 15px 60px -5px rgba(0, 243, 255, 0.2)",
				"yellow-glow": "0px 0px 20px 2px rgba(255, 215, 0, 0.3)",
				"project-blue": "0px 0px 24px 3px rgba(0, 243, 255, 0.35)",
				"skills-pink": "0px 0px 24px 3px rgba(255, 20, 147, 0.32)"
			},
			backgroundImage: {
				"hero-pattern": "url('/assets/herobg.png')",
				bgPrimaryDark:
					"linear-gradient(135deg, #050816 0%, #0f172a 100%)",
				bgSecondaryDark:
					"linear-gradient(135deg, #0f172a 0%, #1e293b 100%)",
				bgPrimaryLight:
					"linear-gradient(135deg, #050816 0%, #0f172a 100%)",
				bgSecondaryLight:
					"linear-gradient(135deg, #0f172a 0%, #1e293b 100%)"
			},
			screens: {
				xs: "320px",
				sm: "640px",
				md: "768px",
				lg: "1024px",
				xl: "1280px"
			}
		}
	},
	plugins: []
};
