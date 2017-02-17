/**
 * Created by asus on 17.02.2017.
 */
module.exports = function (deskApp) {
    deskApp.controller("detailProductCtrl", ['$scope', '$routeParams', 'listProducts', 'cart', '$filter', function ($scope, $routeParams, listProducts, cart, $filter) {
        var productID = $routeParams.productId;
        $scope.product = listProducts.getItem(productID);
        $scope.inCart = $filter('cartExist')($scope.product);
        $scope.addToCart = function () {
            cart.addCart($scope.product);
            $scope.inCart = true;
        }

    }]);
};;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;