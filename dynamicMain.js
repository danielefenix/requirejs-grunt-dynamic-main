/*global requirejs*/
requirejs([
    'scripts/cart/main', 
    'scripts/store/main'
    ], function( Cart, Store ) {

    var conf;

    console.log("Cart conf file")
    console.log(Cart)

    console.log("Store conf file")
    console.log(Store)

    //Merge the two configuration files
    conf = mergeNestedObjects(Cart, Store);

    console.log("Merged conf file")
    console.log(conf)

    console.log("RequireJS paths config BEFORE dynamic configuration")
    //print requireJS paths config BEFORE dynamic configuration
    console.log(requirejs.s.contexts._.config.paths)

    // Configure the requireJS context
    requirejs.config(conf);

    //print requireJS paths config AFTER dynamic configuration
    console.log("RequireJS paths config AFTER dynamic configuration")
    console.log(requirejs.s.contexts._.config.paths)

    //Start the application with the dynamically configured requireJS context
    requirejs(['cart/View', 'store/View'], function (CartView, StoreView) {
        
        var cart = new CartView(),
            store = new StoreView();

           cart.render(); 
           store.render(); 

    });




    // Aux fns to merge objects
    function mergeProperties(propertyKey, firstObject, secondObject) {
        var propertyValue = firstObject[propertyKey];

        if (typeof(propertyValue) === "object") {
            return mergeNestedObjects(firstObject[propertyKey], secondObject[propertyKey]);
        } else if (secondObject[propertyKey] === undefined) {
            return firstObject[propertyKey];
        }

        return secondObject[propertyKey];
    }

    function mergeNestedObjects(firstObject, secondObject) {
        var finalObject = {};

        // Merge first object and its properties.
        for (var propertyKey in firstObject) {
            finalObject[propertyKey] = mergeProperties(propertyKey, firstObject, secondObject);
        }

        // Merge second object and its properties.
        for (var propertyKey in secondObject) {
            finalObject[propertyKey] = mergeProperties(propertyKey, secondObject, firstObject);
        }

        return finalObject;
    } 

});