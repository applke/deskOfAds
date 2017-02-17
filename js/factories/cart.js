module.exports = function (deskApp) {
    deskApp.factory('cart', ['$filter', function ($filter) {
        var cart = [];
        return {
            getCart: function () {
                return cart;
            },
            addCart: function (elem) {
                if (!$filter('cartExist')(elem))
                    cart.push(elem.productID);
                console.log(cart);
            }

        };
    }]);
};