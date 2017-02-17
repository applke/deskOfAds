module.exports = function (ngModule) {

    ngModule.directive("cart", ['cart', function (cart) {
        return {
            link: function (scope) {
            }, controller: function ($scope) {

                $scope.c = cart.getCartElements();
                $scope.deleteFromCart = function (value) {
                       cart.deleteElement(value);

                };


            },
            replace:true,
            templateUrl: "./template/cart.html"
        };
    }]);
};