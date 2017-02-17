/**
 * Created by asus on 17.02.2017.
 */
deskApp.controller("detailProductCtrl",['$scope','$routeParams','listProducts',function ($scope,$routeParams,listProducts) {
    var productID = $routeParams.productId;
    $scope.product = listProducts.getItem(productID);

}]);