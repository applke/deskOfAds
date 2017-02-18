module.exports = function (deskApp) {
    deskApp.directive('productList', ['cart', '$filter','Notification', function (cart, $filter,Notification) {
        return {
            scope: {
                product: '='
            }, controller: function ($scope) {



                $scope.addToCart = function () {
                    if(cart.addCart($scope.product))
                        Notification.success({message: $scope.product.productTitle+' has been added to cart!', positionY: 'bottom', positionX: 'right'});
                        else
                        Notification.info({message: $scope.product.productTitle+'already in cart!', positionY: 'bottom', positionX: 'right'});


                };
            },
            templateUrl: "./template/singleProduct.html"

        };
    }]);
};