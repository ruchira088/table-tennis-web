const path = require("path")

module.exports = {
    entry: path.join(__dirname, "app", "Index.jsx"),
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
            styles: path.join(__dirname, "app", "styles"),
            components: path.join(__dirname, "app", "components"),
            services: path.join(__dirname, "app", "services")
        }
    }
}