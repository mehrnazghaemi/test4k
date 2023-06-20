/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
				yellowColor: "#CEB405",
				blueColor: "#262BBF",
				pinkColor: "#CE055D",
				greenColor: "#07B468",
				lightBgColor:'#F9F9FA',
				textBlackColor:'#393939',
				secondaryMdColor:'#888793',
				secondaryDarkColor: '#5B5B5B',
				secondaryLightColor:'#F0F0F0',
				blueSecondaryLightColor:'#D4D4E6',
				buttonSecondaryColor:'#D3D3D3',
				darkColor:'#2E2E2E'
				
			},
			fontFamily: {
				kalameh: ["KalamehWebFaNum", "sans-serif"],
			},
    },
  },
  plugins: [],
}

