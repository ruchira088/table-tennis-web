const path = require("path")
const webpack = require("webpack")

const getPath = (...dirPath) => path.join(__dirname, "app", ...dirPath)

module.exports = {
    entry: getPath("Index.jsx"),
    output: {
        path: path.join(__dirname, "public", "build"),
        filename: "bundle.js",
        publicPath: "/build/"
    },
    devtool: "source-map",
    module: {
        rules: [
            {
                test: /\.(jsx|js)$/,
                exclude: /node_modules/,
                use: "babel-loader"
            },
            {
                test: /\.(scss|css)$/,
                use: ["style-loader", "css-loader", "sass-loader"]
            },
            {
                test: /\.(png|jpeg|jpg|gif)$/,
                use: "file-loader?name=images/[name].[ext]"
            }
        ]
    },
    resolve: {
        extensions: ["*", ".js", ".json", ".jsx"],
        alias: {
            styles: getPath("styles"),
            components: getPath("components"),
            services: getPath("services"),
            config: getPath("config")
        }
    },
    plugins: [
        new webpack.DefinePlugin({
            NODE_ENV: JSON.stringify(process.env.NODE_ENV || "DEVELOPMENT")
        })
    ]
}