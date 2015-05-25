module.exports = function (grunt) {

    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        requirejs: {
            compile: {
                options: {
                    baseUrl: "./",
                    paths: {
                        requireLib: "require"
                    },
                    //include: 'requireLib',
                    mainConfigFile: "./staticMain.js",
                    name: "./staticMain",
                    out: "./dist/main.js",
                    removeCombined: true,
                    findNestedDependencies: true,
                    preserveLicenseComments: false

                }
            }
        },

        //TODO
        watch: {
            scripts: {
                // ** + any folder
                files: ['**/*.js'],
                tasks: ['concat']
            }
        }
    });

    //RequireJS
    grunt.loadNpmTasks('grunt-contrib-requirejs');

    // Default task(s).
    grunt.registerTask('default', ['requirejs']);

};