module.exports = function (grunt) {
    'use strict';

    //Default task runs tests, jshint and watches for changes.
    grunt.registerTask('default',
        ['jshint', 'watch']);

    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        //Clean code.
        jshint: {
            options: {
                jshintrc: '.jshintrc'
            },
            files: { src: ['index.js','lib/**/*.js', 'test/**/*.js']}
        },

        //Files to watch and actions to take when they are changed.
        watch: {
            files: ['index.js','lib/**/*.js', 'test/**/*.spec.js'],
            tasks: ['jshint']
        }
    });

    // Load the plugins
    // Watch the file system for changes.
    grunt.loadNpmTasks('grunt-contrib-watch');
    // Clean code validator.
    grunt.loadNpmTasks('grunt-contrib-jshint');
};
