const path = require('path');

module.exports = {
  devServer: {
      contentBase: path.join(__dirname, 'dist'), /// Смотреть эту директорию
      port: 3000, // Порт на котором будем слушать (по дефолту 8080)
      open: true, // Открывать автоматически в браузере или нет
    },
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
  devtool: 'inline-source-map',
  module: {
      rules: [
      {
          test: /\.s[ac]ss$/i,
          use: [
            // Creates `style` nodes from JS strings
            'style-loader',
            // Translates CSS into CommonJS
            'css-loader',
            // Compiles Sass to CSS
            'sass-loader',
          ],
    },
   ],
 },
};