/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.svelte"],
	theme: {
		fontFamily: {
			hel: ["Helvetica"],
			sf: ["SF Pro Display", "Arial"]
		},
		gridTemplateColumns: {
			episodes: "repeat(auto-fit, minmax(315px, 1fr))"
		},
		extend: {}
	},
	plugins: []
}
