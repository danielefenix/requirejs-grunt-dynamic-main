define("cart/View",[],function(){function e(){}return e.prototype.render=function(){var e=document.createElement("DIV"),t=document.createTextNode("Hi i am the Cart!");e.appendChild(t),document.querySelector("#container").appendChild(t),console.log("Cart render")},e}),define("store/View",[],function(){function e(){}return e.prototype.render=function(){var e=document.createElement("DIV"),t=document.createTextNode("Hi i am the Store!");e.appendChild(t),document.querySelector("#container").appendChild(t),console.log("Store render")},e}),requirejs.config({paths:{"store/View":"scripts/store/views/View","cart/View":"scripts/cart/views/View"}}),requirejs(["cart/View","store/View"],function(e,t){var n=new e,r=new t;n.render(),r.render()}),define("staticMain",function(){});