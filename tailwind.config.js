/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    screens: {
      'mobile': {'min':'200px','max':'752px'},
      'tablet': {'min':'768px','max':'1024px'},
      // 'laptop': {'min':'1024.1px'}
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
      'balihai': '#888EB0',
      'shipcove': '#7E88C3',
      'vulcan': '#0C0E16',
      'burntsienna': '#EC5757',
      'monalisa': '#9277FF',
      'alabaster': '#f8f8f8',
      'miragedeep': '#141625',
      'oxfordblue': '#373B53',
      'fiord': '#494E6E',
    },
    extend: {},
  },
  plugins: [],
}

