/**
 * Created by asus on 17.02.2017.
 */
module.exports = function (deskApp) {
    deskApp.controller("detailProductCtrl", ['$scope','Notification','$routeParams', 'listProducts', 'cart', '$filter', function ($scope,Notification, $routeParams, listProducts, cart, $filter) {
        var productID = $routeParams.productId;
        $scope.product = listProducts.getItem(productID);
        $scope.inCart = $filter('cartExist')($scope.product);
        $scope.addToCart = function () {
            if(cart.addCart($scope.product))
                Notification.success({message: $scope.product.productTitle+' has been added to cart!', positionY: 'bottom', positionX: 'right'});
            else
                Notification.info({message: $scope.product.productTitle+'already in cart!', positionY: 'bottom', positionX: 'right'});
            $scope.inCart = true;
        }

    }]);
};