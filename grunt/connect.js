module.exports.tasks = {
    connect: {
        server: {
            options: {
                port: 8090,
                livereload: true,
                base: ['./dist'],
                open: {
                    target: 'http://localhost:8090/index.html'
                }
            }
        }
    }
};