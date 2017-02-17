var deskApp = angular.module("deskApp", ['ngRoute']);

deskApp.config(['$routeProvider','$locationProvider',function ($routeProvider,$locationProvider) {
    // $locationProvider.html5Mode({
    //     enabled:true,
    //     requireBase:false
    // });
    $routeProvider.when('/', {
        templateUrl: "template/home.html",
        controller: 'listPageCtrl'
    }).when('/product/:productId',{
        templateUrl: 'template/singleProductAbout.html',
        controller: 'detailProductCtrl'
    })

        .otherwise({
            template: "<h1>404</h1>"
        })
}]);