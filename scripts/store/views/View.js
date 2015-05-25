define([], function( ) {

    function StoreView(){};

    StoreView.prototype.render = function(){

        var h = document.createElement("DIV"),
            t = document.createTextNode("Hi i am the Store!");
            h.appendChild(t);
        document.querySelector('#container').appendChild(t);
        console.log("Store render")
    }

    return StoreView;
});