/*global requirejs*/
requirejs.config({
    paths: {
        'store/View': "scripts/store/views/View", 
        'cart/View': "scripts/cart/views/View"
    }
});

//Start the application with the dynamically configured requireJS context
requirejs(['cart/View', 'store/View'], function (CartView, StoreView) {

	console.log("Static configuration of RequireJS context")
    
    var cart = new CartView(),
        store = new StoreView();

       cart.render(); 
       store.render(); 

});