const path = require("path");

module.exports = {
    entry: {
        app: './app/index.js'

    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, './dist'),
        publicPath: './dist'
    },

    devServer: {

        client: {
            overlay: true,
          },
    }

}