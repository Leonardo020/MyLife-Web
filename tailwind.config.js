module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [],
  module: {
    rules: [
      {
        test: /\.s(c|a)ss$/,
        use: ["vue-style-loader", "css-loader"],
      },
    ],
  },
};
