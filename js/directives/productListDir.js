deskApp.directive('productList',['cart','$filter',function (cart,$filter) {
    return {
        scope:{
            product:'='
        },link:function (scope) {
            scope.inCart = $filter('cartExist')(scope.product);
            scope.addToCart = function () {
                cart.addCart(scope.product);
                scope.inCart = true;
            };
        },
        templateUrl: "./template/singleProduct.html"

    };
}]);