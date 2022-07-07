const path = require('path')

module.exports = {
    mode:'production',
    entry: {
        index:'./src/pages/index.js',
        login:'./src/pages/login.js',
        signup:'./src/pages/signup.js',
        indexBlog:'/src/pages/blog/indexBlog.js',
        details:'./src/pages/blog/details.js',
        style:'./src/pages/styles.js'
    },
    output:{
        path:path.resolve(__dirname, 'public/js/pages'),
        clean:true
    },
    module:{
        rules:[
            {
                test:/\.js$/,
                exclude:/node_modules/,
                use: {
                    loader:'babel-loader',
                    options: {
                        presets:['@babel/preset-env']
                    }
                }
            },
            {
                test: /\.css$/i,
                use: ["style-loader", "css-loader"],
            }
        ]
    }
}