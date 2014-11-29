module.exports.tasks = {
    connect: {
        server: {
            options: {
                port: 8090,
                livereload: true,
                base: ['.'],
                open: {
                    target: 'http://localhost:8090/www/index.html'
                }
            }
        }
    }
};