module.exports = function (deskApp) {
    deskApp.filter('cartExist', ['cart', function (cart) {
        return function (element) {
            var i = 0;
            var c = cart.getCartElements();
            for (i; i < c.length; i++) {
                if (c[i].productID === element.productID)
                    return true;
            }
            return false;
        }
    }]);
};