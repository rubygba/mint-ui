module.exports = {
  root: true,
  // https://github.com/feross/standard/blob/master/RULES.md#javascript-standard-style

  //extends: 'standard',
  
  "parserOptions": {
    "ecmaVersion": 6,
    "ecmaFeatures": {
      "experimentalObjectRestSpread": true,
      "jsx": true
    },
    "sourceType": "module"
  },

  "env": {
    "es6": true,
    "node": true
  },

  "globals": {
    "document": false,
    "navigator": false,
    "window": false
  },

  // required to lint *.vue files
  plugins: [
    'html',
    "standard",
    "promise"
  ],
  // add your custom rules here
  'rules': {
    // allow paren-less arrow functions
    'arrow-parens': 0,
    // 警告非4个空格tab
    "indent": [0, 4, { "SwitchCase": 1 }],
    //
    "key-spacing": [0, { "beforeColon": false, "afterColon": true }],
    "no-mixed-spaces-and-tabs": 1,
    "no-unused-vars": [1, { "vars": "all", "args": "none" }],
    "quotes": [0, "single", "avoid-escape"],
    "semi": [0, "never"],
    "space-before-blocks": [1, "always"],
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0
  }
}
