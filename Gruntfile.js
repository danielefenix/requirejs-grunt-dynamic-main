module.exports = function (grunt) {

    grunt.registerTask('createMain', 'build new main.js', function () {

        var requirejs = require('requirejs'),
            Handlebars = require('handlebars'),
            dependencies = [],
            baseUrls = [];

        var done = this.async();

        requirejs.config({
            //Use node's special variable __dirname to
            //get the directory containing this file.
            //Useful if building a library that will
            //be used in node but does not require the
            //use of node outside
            baseUrl: __dirname,

            //Pass the top-level main.js/index.js require
            //function to requirejs so that node modules
            //are loaded relative to the top-level JS file.
            nodeRequire: require
        });

        /* Iterate over modules directory. */
        grunt.file.recurse('scripts', function callback(abspath, rootdir, subdir, filename) {

            /* Read package.json excluding plugins. */
            if (filename === 'main.js') {
                baseUrls.push(rootdir + '/' + subdir);
                dependencies.push(abspath);
            }

        });

        dependencies.push('scripts/Compiler.js');

        grunt.log.writeln('before')


        requirejs(dependencies, function () {

            grunt.log.writeln('after')


            var args = Array.prototype.slice.call(arguments);

            var Compiler = args[args.length - 1];

            //Remove last element from array
            args.pop();

            for (var i = 0; i < baseUrls.length; i++) {
                args[i].baseUrl = baseUrls[i];
            }

            Compiler.resolve(args, {}, true);

            /* Load home page. */
            var source = grunt.file.read('templates/optimized.hbs', [, {encoding: 'utf8'}]);
            var template = Handlebars.compile(source);

            var dynamic_data = { config: JSON.stringify(Compiler.getConfig())};
            grunt.log.writeln(JSON.stringify(dynamic_data))
            grunt.file.write('mainDynamicToOptimize.js', template(dynamic_data) , [, {encoding: 'utf8'}]);

            done();

        });

    });

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
                    mainConfigFile: "./mainDynamicToOptimize.js",
                    name: "./mainDynamicToOptimize",
                    out: "./dist/mainDynamic.js",
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

    //Precompile Handlebars templates to JST file.
    //grunt.loadNpmTasks('grunt-contrib-handlebars');

    // Writes static files using handlebars templates.
    grunt.loadNpmTasks('grunt-writefile');

    //RequireJS
    grunt.loadNpmTasks('grunt-contrib-requirejs');

    // Default task(s).
    grunt.registerTask('default', ['createMain', 'requirejs']);

};