define([], function( ) {

    function CartView(){};

    CartView.prototype.render = function(){

        var h = document.createElement("DIV"),
            t = document.createTextNode("Hi i am the Cart!");
            h.appendChild(t);
        document.querySelector('#container').appendChild(t)
        console.log("Cart render")
    }

    return CartView;
});