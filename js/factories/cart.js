/**
 * Created by asus on 17.02.2017.
 */
deskApp.factory('cart',['$filter',function ($filter) {
    var cart = [];
    return {
        getCart: function () {
            return cart;
        },
        addCart: function (elem) {
           if(!$filter('cartExist')(elem))
            cart.push(elem.productID);
            console.log(cart);
        }

    };
}]);