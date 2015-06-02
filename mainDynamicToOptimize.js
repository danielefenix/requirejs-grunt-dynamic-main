/*global requirejs*/
requirejs.config({"paths":{"cart/View":"scripts/cart/./views/View","store/View":"scripts/store/./views/View"}});

//Start the application with the dynamically configured requireJS context
requirejs(['cart/View', 'store/View'], function (CartView, StoreView) {

    console.log("Static configuration of RequireJS context")

    var cart = new CartView(),
        store = new StoreView();

    cart.render();
    store.render();

});