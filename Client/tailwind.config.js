/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		
		extend: {
			colors: {
				primary_pink: '#FE598D',
				faint_pink: 'rgb(255, 247, 249,0.38',
			},
		},
	},
	plugins: [],
};
