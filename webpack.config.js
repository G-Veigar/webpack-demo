const MiniCssExtractPlugin = require("mini-css-extract-plugin");
// const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");

module.exports = {
    output: {
        filename: 'bundle.js'
    },
    mode: 'none',
    // optimization: {
    //     minimizer: [
    //         new OptimizeCSSAssetsPlugin({})
    //     ]
    // },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    MiniCssExtractPlugin.loader,    // 提取css 插件
                    // 'style-loader',
                    'css-loader'
                ]
            }
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: "[name].css"
            // chunkFilename: "[id].css"
        })
    ]
}
