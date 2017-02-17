deskApp.controller("listPageCtrl", function ($scope, $http,listProducts) {
    $scope.list = listProducts.getList() ;

    $scope.displayProductsOffset = 0;
    $scope.displayOnPage = 3;
    $scope.prevButtonEnable = function () {
        return $scope.displayProductsOffset == 0;
    };
    $scope.nextButtonEnable = function () {
        return $scope.list.length - $scope.displayProductsOffset - $scope.displayOnPage <=0;
    };
    $scope.nextProducts = function () {
        $scope.displayProductsOffset++;
    };
    $scope.prevProducts = function () {
        $scope.displayProductsOffset--;
    };
    // $http.get('/products').then(function(response) {
    //     $scope.list = response.data;
    // });
});