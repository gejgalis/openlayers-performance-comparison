var es6ify = require("es6ify");
es6ify.traceurOverrides = {
    sourceMaps: true
};
var stringify = require("stringify");

module.exports.tasks = {
    browserify: {

        ol3: {
            options: {
                debug: true,
                transform: ["node-lessify", "es6ify", stringify(['.hbs'])],
                noParse: ["traceur/bin/traceur-runtime", "jquery", "bootstrap"]
            },
            src: ['src/es6/ol3/ol3.js'],
            dest: 'dist/ol3-app.js'
        },

        ol2: {
            options: {
                debug: true,
                transform: ["node-lessify", "es6ify", stringify(['.hbs'])],
                noParse: ["traceur/bin/traceur-runtime", "jquery", "bootstrap"]
            },
            src: ['src/es6/ol2/ol2.js'],
            dest: 'dist/ol2-app.js'
        },
        main: {
            options: {
                debug: true,
                transform: ["node-lessify", "es6ify", stringify(['.hbs'])],
                noParse: ["traceur/bin/traceur-runtime", "jquery", "bootstrap"]
            },
            src: ['src/es6/main/main.js'],
            dest: 'dist/main-app.js'
        }
    }
};