module.exports = function (ngModule) {

    ngModule.directive("cart", ['cart', function (cart) {
        return {
            link: function (scope) {
            }, controller: function ($scope) {

                $scope.c = cart.getCartElements();

                console.log("cart", $scope.c);

            },
            templateUrl: "./template/cart.html"
        };
    }]);
};