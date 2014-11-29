module.exports.tasks = {
    traceur: {
        options: {
            modules: "commonjs",
            sourceMaps: true
        },
        custom: {
            files: [{
                expand: true,
                cwd: 'src/es6',
                src: ['**/*.js'],
                dest: 'src/es5'
            }]
        }
    }
};