const path = require("node:path");

module.exports = {
    entry: "./src/index.js",
    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname, "dist"),
    },
    devServer: {
        static: {
            directory: "./dist",
        },
        open: true,
        port: 9090
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: "babel-loader",
                exclude: /node_modules/,
            },
            {
                test: /\.css$/,
                use: [
                    "style-loader",
                    {
                        loader: "css-loader",
                        options: { url: false }
                    }
                ]
            },
            {
                test: /\.(ico|png|svg|ttf|otf|eot|woff?2?)$/,
                type: "asset/inline",
            },
            {
                test: /\.html$/,
                use: ["html-loader"],
            },
        ],
    },
};
