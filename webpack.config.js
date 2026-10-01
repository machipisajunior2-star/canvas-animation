const path = require('path');

module.exports = {
    mode: "development",
    entry: {
        main: path.resolve(__dirname, 'src/index.js'),
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'main.js',
        // clean: true,
        // assetModuleFilename: '[name][ext]',
    },
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: ['style-loader', 'css-loader', 'sass-loader'],
            },
            ],
    },
};