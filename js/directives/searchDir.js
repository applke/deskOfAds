module.exports = function (ngModule) {
  ngModule.directive("search",['listProducts',function (listProducts) {
      return{
          templateUrl: './template/search.html',
          replace:true,
          controller:function ($scope) {
           $scope.list = listProducts.getList();
          }
      }
  }]);

};