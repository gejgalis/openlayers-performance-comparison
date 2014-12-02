var webpack = require("webpack");

module.exports.tasks = {
    webpack: {
        main: {
            entry: "./src/es6/main/main.js",
            output: {
                path: "dist/js",
                filename: "main.js"
            }
        },
        ol3: {
            entry: "./src/es6/ol3/ol3.js",
            output: {
                path: "dist/js",
                filename: "ol3.js"
            }
        },
        ol2: {
            entry: "./src/es6/ol2/ol2.js",
            output: {
                path: "dist/js",
                filename: "ol2.js"
            }
        },

        options: {
            output: {
                path: "dist/js",
                filename: "[name].js"
            },

            devtool: "source-map",

            externals: {
                "jquery": "jQuery"
            },

            module: {
                loaders: [
                    {
                        test: /es6.*.js$/,
                        loader: 'traceur'
                    },
                    {
                        test: /\.less$/,
                        loader: "style-loader!css-loader!less-loader"
                    },
                    {
                        test: /\.hbs$/,
                        loader: "raw-loader"
                    }
                ]
            },

            plugins: [
                new webpack.optimize.UglifyJsPlugin({minimize: true})
            ],

            stats: {
                // Configure the console output
                colors: false,
                modules: true,
                reasons: true
            },
            // stats: false disables the stats output

            storeStatsTo: "xyz", // writes the status to a variable named xyz
            // you may use it later in grunt i.e. <%= xyz.hash %>

            progress: false, // Don't show progress
            // Defaults to true

            failOnError: false, // don't report error to grunt if webpack find errors
            // Use this if webpack errors are tolerable and grunt should continue

            watch: false, // use webpacks watcher
            // You need to keep the grunt process alive

            keepalive: false// don't finish the grunt task
            // Use this in combination with the watch option
        }
}
};