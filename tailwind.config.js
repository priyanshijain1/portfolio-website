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

				ctnPrimaryLight: "#2D2D2D",
				ctnSecondaryLight: "#4b5563",

				ctnPrimaryDark: "#2D2D2D",
				ctnSecondaryDark: "#4b5563"
			},
			boxShadow: {
				card: "0px 15px 60px -5px rgba(255, 215, 0, 0.4)",
				"yellow-glow": "0px 0px 20px 2px rgba(255, 215, 0, 0.3)",
				"project-blue": "0px 0px 24px 3px rgba(96, 218, 232, 0.35)",
				"skills-pink": "0px 0px 24px 3px rgba(255, 79, 163, 0.32)"
			},
			backgroundImage: {
				"hero-pattern": "url('/assets/herobg.png')",
				bgPrimaryDark:
					"linear-gradient(135deg, #FFFDF0 0%, #FFFBE6 100%)",
				bgSecondaryDark:
					"linear-gradient(135deg, #FFFFFF 0%, #FFFFF0 100%)",
				bgPrimaryLight:
					"linear-gradient(135deg, #FFFDF0 0%, #FFFBE6 100%)",
				bgSecondaryLight:
					"linear-gradient(135deg, #FFFFFF 0%, #FFFFF0 100%)"
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
