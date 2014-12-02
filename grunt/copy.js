module.exports.tasks = {
    copy: {

        bootstrap: {
            files: [
                {
                    expand: true,
                    cwd: "node_modules/bootstrap/dist",
                    src: ['**'],
                    dest: 'dist/vendor/bootstrap'
                }
            ]
        },

        jquery: {
            files: [
                {
                    expand: true,
                    cwd: "node_modules/jquery/dist/",
                    src: ['**'],
                    dest: 'dist/vendor/jquery'
                }
            ]
        },

        www: {
            files: [
                {
                    expand: true,
                    cwd: "src/www",
                    src: ['**'],
                    dest: 'dist'
                }
            ]
        },

        vendor: {
            files: [
                {
                    expand: true,
                    cwd: "vendor",
                    src: ['**'],
                    dest: 'dist/vendor'
                }
            ]
        }
    }
};