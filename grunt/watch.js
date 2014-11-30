module.exports.tasks = {
    watch: {
        options: {
            spawn: false,
            livereload: true,
            livereloadOnError: false,
            interrupt: false
        },

        ol2: {
            files: [
                'src/es6/ol2/**/*.*',
                'src/es6/bs/**/*.*'
            ],
            tasks: [
                'browserify:ol2'
            ]
        },

        ol3: {
            files: [
                'src/es6/ol3/**/*.*',
                'src/es6/bs/**/*.*'
            ],
            tasks: [
                'browserify:ol3'
            ]
        },

        main: {
            files: [
                'src/es6/main/**/*.*',
                'src/es6/bs/**/*.*',
                'www/**/*.*'
            ],
            tasks: [
                'browserify:main'
            ]
        },

        www: {
            files: [
                'src/www/**/*.*'
            ],
            tasks: [
                'copy:www'
            ]
        }
    }
};