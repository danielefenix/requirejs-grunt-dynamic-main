# requirejs-grunt-dynamic-main
Dynamic creation of main.js file to optimize the RequireJS based project with grunt-contrib-requirejs plugin.

This is RequireJs based project with many sub components. I would like to concatenate/minify/ecc.. the project to deploy it and increase performances, ecc... The optimization works perfectly with the grunt-contrib-requirejs plugin. The grunt-contrib-requirejs plugin works with a staticMain.js file currently.

I need to generate the main.js dynamically. I would like to generate the main.js processing some RequireJS module of the project (call them fileA.js and fileB.js). I would like to use the generated main.js to run the grunt-contrib-requirejs plugin.

So the task sequence would be something like:

Custom Task: 

1. loads fileA.js and fileB.js 
2. merge them together 
3. write the result of the merging within a new JS file 

grunt-contrib-requirejs Task: 

1. use the generated main.js file to optimize the project

## static.html
This is a normal RequireJS project identical to dynamic.html but with the main.js file and RequireJS configuration static.

## optimize.html
An optimized version of static.html using grunt-contrib-requirejs. 

I would like to achieve the optimized version using the structure of dynamic.html and its generation of RequireJS configuration file.

## dynamic.html
This is the current workflow in which the RequireJS configuration is generated dynamically merging two (or more) configuration files. The generated file is passed as configuration to require.config() function in order to prepare the RequireJS context. 

The 'cart/View', 'store/View' and then available.
