module.exports = {
    // change to .tsx if necessary
    //entry: './src/app.js',
    output: {
        filename: './dist/bundle.js'
    },
    resolve: {
        // changed from extensions: [".js", ".jsx"]
        extensions: [".src", ".tsx", ".js", ".jsx"]
    },
    module: {
        rules: [
            // changed from { test: /\.jsx?$/, use: { loader: 'babel-loader' } },
            { test: /\.(t|j)sx?$/, use: { loader: 'awesome-typescript-loader' } },
            // addition - add source-map support
            { enforce: "pre", test: /\.js$/, loader: "source-map-loader" }
        ]
    },
    // addition - add source-map support
    devtool: "source-map"
}