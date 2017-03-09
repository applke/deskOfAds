module.exports = function (deskApp) {
    deskApp.controller("listPageCtrl", ['$scope', '$window', '$http', 'listProducts', function ($scope, $window, $http, listProducts) {
        $scope.list = listProducts.getList();
        console.log($scope.list.length);
        $scope.displayProductsOffset = 0;
        $scope.displayOnPage = 3;
        $scope.layout = 1;
        $scope.prevButtonEnable = function () {
            return $scope.displayProductsOffset == 0;
        };
        $scope.nextButtonEnable = function () {
            return $scope.list.length - $scope.displayProductsOffset - $scope.displayOnPage <= 0;
        };
        $scope.addMoreItems = function () {
            for (var i = 0; i < ($scope.list.length % $scope.displayOnPage === 0 ? $scope.displayOnPage : $scope.list.length % $scope.displayOnPage); i++) {
                var insert = angular.copy($scope.list[Math.round(Math.random(3) + 1)]);
                insert.productID = $scope.list.length + 2;

                $scope.list.push(insert);
            }
        };
        $scope.isMobile = function () {
            if ($window.innerWidth < 500) {
                $scope.layout = 0;
                return false;
            }
            return true;
        };
        $scope.nextProducts = function () {
            $scope.displayProductsOffset++;
        };
        $scope.prevProducts = function () {
            $scope.displayProductsOffset--;
        };

        $scope.makeGrid = function () {
            $scope.layout = 1;
        };
        $scope.makeList = function () {
            $scope.layout = 0;
        };
        $scope.getLayoutStyle = function () {
            return $scope.layout === 0 ? 'list' : 'grid';
        };
        // $http.get('/products').then(function(response) {
        //     $scope.list = response.data;
        // });
    }]);
};