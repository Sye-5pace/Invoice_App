/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    screens: {
      'mobile': {'min':'200px','max':'752px'},
      'tablet': {'min':'768px','max':'1024px'},
      'pc': {'min':'1024.1px'}
    },
    fontFamily:{
      'spartan':["League Spartan", "sans-serif"]
    },
    colors: {
      'cornflowerblue': '#7C5DFA',
      'heliotrope': '#9277FF',
      'mirage': '#1E2139',
      'ebonyclay': '#252945',
      'selago': '#DFE3FA',
      'selagolight': '#F9FAFE',
      'balihai': '#888EB0',
      'shipcove': '#7E88C3',
      'vulcan': '#0C0E16',
      'burntsienna': '#EC5757',
      'monalisa': '#9277FF',
      'alabaster': '#f8f8f8',
      'miragedeep': '#141625',
      'oxfordblue': '#373B53',
      'fiord': '#494E6E',
      'waterloo': '#777F98',
      'shamrock':'#33D69F',
      'pizazz':'#FF8F00'
    },
    extend: {
      animation: {
        wiggle: 'wiggle 0.7s ease-in-out ',
      },
      keyframes: {
        wiggle: {
          '0%, 100%': { transform: 'rotate(-6deg)' },
          '50%': { transform: 'rotate(6deg)' },
        }
      }
    },
  },
  plugins: [],
}

