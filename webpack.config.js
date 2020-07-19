const path = require('path');

module.exports = ( env ) => {
    const isProduction = env === 'production';

    return {
        entry: './src/app.js', // entry: The entry point of the app = where the app kicks off
        // entry: './src/playground/redux-101.js', 
        // entry: './src/playground/redux-expensify.js',
        // entry: './src/playground/destructuring.js',
        // entry: './src/playground/hoc.js',
    
        output: {
            path: path.join(__dirname, 'public'), // absolute path + /public
            filename: 'bundle.js'
        },
        module: {
            rules: [
                {
                    loader: 'babel-loader',
                    test: /\.js$/,
                    exclude: /node_modules/
                }, 
                { // added manually
                    test: /\.s?css$/, 
                    use: [
                        'style-loader',
                        'css-loader',
                        'sass-loader'
                    ]
                }
            ]
        },
        devtool: isProduction ? 'source-map' : 'eval-source-map',
        devServer: {
            contentBase: path.join(__dirname, 'public'),
            historyApiFallback: true
        }
    };
};
