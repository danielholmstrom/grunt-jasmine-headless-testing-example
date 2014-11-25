module.exports = function(grunt) {

    // load all grunt tasks
    require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

    grunt.initConfig({
        jasmine: {
            test: {
                src: 'scripts/*.js',
                options: {
                    vendor: [
                        'bower_components/jquery/dist/jquery.js',
                        'bower_components/jasmine-jquery/lib/jasmine-jquery.js',
                        'vendor/third-party-lib.js'
                    ],
                    specs: 'tests/*.spec.js'
                }
            }
        }
    });

}
