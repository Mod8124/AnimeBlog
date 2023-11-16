const path = require('path');

module.exports = {
  mode: 'production',
  entry: {
    index: './src/app/pages/index.js',
    login: './src/app/pages/login.js',
    signup: './src/app/pages/signup.js',
    indexBlog: '/src/app/pages/blog/indexBlog.js',
    details: './src/app/pages/blog/details.js',
    style: './src/app/pages/styles.js',
  },
  output: {
    path: path.resolve(__dirname, 'public/js/pages'),
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
          },
        },
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
};
