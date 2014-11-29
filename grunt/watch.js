module.exports.tasks = {
    watch: {
        options: {
            spawn: false,
            livereload: true,
            livereloadOnError: false,
            interrupt: true
        },

        ol2: {
            files: [
                'src/es6/ol2/**/*.*',
                'www/**/*.*'
            ],
            tasks: [
                'compile-ol2'
            ]
        },

        ol3: {
            files: [
                'src/es6/ol3/**/*.*',
                'www/**/*.*'
            ],
            tasks: [
                'compile-ol3'
            ]
        },

        main: {
            files: [
                'src/es6/main/**/*.*',
                'www/**/*.*'
            ],
            tasks: [
                'compile-main'
            ]
        }
    }
};