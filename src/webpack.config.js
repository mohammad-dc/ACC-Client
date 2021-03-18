module.exports = {
    rules: [
      {
        test: /\.(png|jpe?g|gif|jp2|webp|jfif)$/,
        loader: 'file-loader',
        options: {
          name: '[name].[ext]',
        },
      },
    ],
  };
