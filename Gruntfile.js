module.exports = function (grunt) {

    /**
     * Load all `grunt-*` tasks from `package.json`
     */
    require('load-grunt-tasks')(grunt);

    /**
     * Load DEFAULT configuration for tasks from directory `grunt/*.js`
     */
    var config = require('load-grunt-configs')(grunt, {config: {src: "grunt/*.js"}});

    /**
     * Initialize Grunt configuration
     */
    grunt.initConfig(config);

    grunt.registerTask('default', [
        'clean',
        'compile'
    ]);

    grunt.registerTask('compile', [
        'browserify',
        'copy'
    ]);

    grunt.registerTask('serve', [
        'connect:server',
        'watch'
    ]);
};