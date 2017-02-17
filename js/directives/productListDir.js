module.exports = function (deskApp) {
    deskApp.directive('productList', ['cart', '$filter', function (cart, $filter) {
        return {
            scope: {
                product: '='
            }, controller: function ($scope) {



                $scope.addToCart = function () {
                    if(cart.addCart($scope.product))
                        alert("added to cart!");
                        else
                        alert("already in cart!")


                };
            },
            templateUrl: "./template/singleProduct.html"

        };
    }]);
};