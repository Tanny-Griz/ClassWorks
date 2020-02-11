const path = require('path');

module.exports = {
  devServer: {
    contentBase: path.join(__dirname, 'dist'), /// Смотреть эту директорию
    port: 3001, // Порт на котором будем слушать (по дефолту 8080)
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
        test: /\.s[ac]ss$/i,/// регулярное выражение ищущее css, scss, sass фалы
        use: [
          // Создаем узлы `style` из строк JS
          'style-loader',
          // Переводит CSS в CommonJS
          'css-loader',
          // Компилируем Sass в CSS
          'sass-loader',
        ],
      },
    ],
  },
};