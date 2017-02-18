Array.prototype.remove = function(value) {
    var idx = this.indexOf(value);
    if (idx != -1) {
        // Второй параметр - число элементов, которые необходимо удалить
        return this.splice(idx, 1);
    }
    return false;
}
var angular = require('angular');
require('angular-route');
require('../bower_components/angular-ui-notification/dist/angular-ui-notification.js');
var deskApp = angular.module("deskApp", ['ngRoute','ui-notification']);

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
    }).when('/about',{
        templateUrl: "template/aboutus.html"
    }).when('/social',{
        templateUrl:"template/social.html"
    }).when('/login',{
        templateUrl:"template/login.html",
        controller: 'loginCtrl'
    }).when('/register',{
        templateUrl:"template/register.html",
        controller:'registerCtrl'
    }).
    otherwise({
            template: "<h1>404</h1>"
        })
}]);
require('./index.js')(deskApp);