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
        'dist'
    ]);

    grunt.registerTask('compile-main', [
        'browserify:main'
    ]);

    grunt.registerTask('compile-ol2', [
        'browserify:ol2'
    ]);

    grunt.registerTask('compile-ol3', [
        'browserify:ol3'
    ]);

    grunt.registerTask('serve', [
        'connect:server',
        'watch'
    ]);
};