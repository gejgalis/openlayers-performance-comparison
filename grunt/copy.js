module.exports.tasks = {
    copy: {
        traceur: {
            expand: false,
            src: ['node_modules/es6ify/node_modules/traceur/bin/traceur-runtime.js'],
            dest: 'dist/js/traceur-runtime.js'
        },

        bootstrap: {
            files: [
                {
                    expand: true,
                    cwd: "node_modules/bootstrap/dist",
                    src: ['css/*', 'fonts/*'],
                    dest: 'dist/bootstrap'
                }
            ]
        },

        www: {
            files: [
                {
                    expand: true,
                    cwd: "src/www",
                    src: ['*'],
                    dest: 'dist'
                }
            ]
        },

        vendor: {
            files: [
                {
                    expand: true,
                    cwd: "vendor",
                    src: ['*'],
                    dest: 'dist/vendor'
                }
            ]
        }
    }
};