/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,js,jsx,ts,tsx}'],
	theme: {
		fontFamily: {
			sans: ['Inter', 'sans-serif'],
		},
		colors:{
			primary: "#011F26",
			secondary: "#025E73",
			tertiary: "#E4E4E4",
			quaternary: "#F2A71B",
		},
		extend: {
			gap: {
				'100': '46rem',
			  }
		},
	},
	plugins: [],
}
