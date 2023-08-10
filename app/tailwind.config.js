/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}', './node_modules/tw-elements/dist/js/**/*.js'],
	theme: {
		extend: {}
	},
	plugins: [require('daisyui'), require('tw-elements/dist/plugin.cjs')],
	darkMode: 'class',
	daisyui: {
		themes: ['dark']
	}
};
