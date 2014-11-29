var stringify = require("stringify");

module.exports.tasks = {
    browserify: {
        options: {
            debug: true,
            transform: ["node-lessify", "es6ify", stringify(['.hbs'])],
            noParse: ["traceur/bin/traceur-runtime", "jquery", "bootstrap"]
        },

        ol3: {
            src: ['src/es6/ol3/ol3.js'],
            dest: 'dist/js/ol3-app.js'
        },

        ol2: {
            src: ['src/es6/ol2/ol2.js'],
            dest: 'dist/js/ol2-app.js'
        },

        main: {
            src: ['src/es6/main/main.js'],
            dest: 'dist/js/main-app.js'
        }
    }
};