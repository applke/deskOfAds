module.exports = function (deskApp) {
    deskApp.factory('cart', ['listProducts', '$filter', function (listProducts, $filter) {
        var cart = [];
        return {
            getCartElements: function () {
                return cart;
            },
            addCart: function (elem) {
                if (!$filter('cartExist')(elem)) {
                    cart.push(elem);
                    return true;
                }
                return false;
            },
            deleteElement: function (elem) {
                cart.remove(elem);
            }

        };
    }]);
};