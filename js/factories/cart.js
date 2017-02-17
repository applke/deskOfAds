module.exports = function (deskApp) {
    deskApp.factory('cart', ['listProducts', '$filter', function (listProducts, $filter) {
        var cart = [];
        var cartElements = [];
        return {
            getCart: function () {
                return cart;
            },
            getCartElements: function () {
                return cartElements;
            },
            addCart: function (elem) {
                if (!$filter('cartExist')(elem)) {
                    cart.push(elem.productID);
                    cartElements.push(elem);
                }
            }

        };
    }]);
};