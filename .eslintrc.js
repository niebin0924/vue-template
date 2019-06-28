module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: ["plugin:vue/essential", "@vue/prettier"],
  rules: {
    "no-console": "off",
    "no-debugger": "off",
    "no-unuserd-vars": "off",
    'no-control-regex': 0
  },
  parserOptions: {
    parser: "babel-eslint"
  }
};
