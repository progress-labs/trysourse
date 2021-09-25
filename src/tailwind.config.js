/**
 * Tailwind CSS configuration file
 *
 * docs: https://tailwindcss.com/docs/configuration
 * default: https://github.com/tailwindcss/tailwindcss/blob/master/stubs/defaultConfig.stub.js
 */
const path = require('path')

module.exports = {
  mode: 'jit',
  darkMode: false,
  theme: {
    extend: {
      colors: {
        primary:'#4E4E74',
        neutrals: {
          'gray-lightest': '#E5E5E5',
          'gray-lighter': '#BDBDBD',
          'gray-light': '#828282',
          gray: '#4F4F4F',
          "gray-dark": '#333333',
          'white-bone': '#fffdf8',
        },
        bright: {
          'lila': '#EFD5E5',
          'orange': '#EF995E',
          'pink': '#C15D8D',
          'blue': '#649DBF',
          'green': '#72BBA6',
          'red': '#F37572',
          'yellow': '#F9F5B2',
        },
      },
      spacing: {
        "13": '3.25rem',
        "15": '3.75rem',
        "17": '4.25rem',
        "18": '4.5rem',
        "19": '4.75rem',
        "76": "19rem",
        "84": "21rem",
        "88": "22rem",
        "92": "23rem",
        "100": "25rem",
        "104": "26rem",
        "108": "27rem",
        "112": "28rem",
        "116": "29rem",
        "120": "30rem",
        "124": "31rem",
        "128": "32rem",
        "132": "33rem",
        "136": "34rem",
        "140": "35rem",
        "144": "36rem",
        "148": "37rem",
        "152": "38rem",
        "156": "39rem",
        "160": "40rem",
        "164": "41rem",
        "168": "42rem",
        "172": "43rem",
        "176": "44rem",
        "180": "45rem",
        "184": "46rem",
        "188": "47rem",
        "190": "48rem",
        "194": "49rem",
        "200": "50rem",
        "224": "56rem",
        "240": "60rem",
      },
      borderRadius: {
        '4xl': '2rem',
        '5xl': '10rem',
        '6xl': '12rem',
      },
      width: {
          '1.5/1': "175%",
          '2.05/1': "205%",
          '2.5/1': "250%",
          '3.5/1': "350%",
      },
      minHeight: (theme) => ({
        ...theme('spacing'),
        '200': '50rem',
      }),
      maxHeight: (theme) => ({
          ...theme('spacing'),
          "infinite": "999px"
      })
    },
    container: {
      center: true,
      padding: '1rem'
    }
  },
  variants: {},
  plugins: [

  ],
  purge: {
    enabled: process.env.NODE_ENV === 'production',
    content: [
      path.resolve(__dirname, '**/*.{js,vue}'),
      path.resolve(__dirname, '../shopify/**/*.liquid')
    ]
  }
}
