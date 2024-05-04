const path = require("path");

module.exports = {
    entry: './src/index.ts',
    mode: "production",
    // Enable sourcemaps for debugging webpack's output.
    devtool: "source-map",
    module: {
        rules: [
            {
                test: /(\.ts(x?))|(\.jsx?)$/,
                exclude: /node_modules/,
                use: {
                    loader: "ts-loader",
                    options: {
                        compilerOptions: {
                            noEmit: false,
                        },
                    }
                },
            }
        ],
    },

    resolve: {
        // Add '.ts' and '.tsx' as resolvable extensions.
        extensions: [".ts", ".tsx", ".js", ".jsx"],
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        // libraryTarget: 'umd',
        filename: 'bundle.js',
    },
};