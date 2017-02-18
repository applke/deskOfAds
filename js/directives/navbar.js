module.exports = function (ngModule) {
    ngModule.directive("navbar", ['$routeParams', '$location', function ($routeParams, $location) {
        return {
            replace: true,
            template: '  <ul class="nav navbar-nav"><li ng-repeat="e in listMenu" ng-class="isActive($index)"><a href="{{dev+e.url}}" ng-bind="e.name"></a></li></ul>',
            controller: function ($scope) {
                $scope.active = -1;
                $scope.dev = "#!";
                $scope.$on('$routeChangeSuccess', function () {

                        var loc = $location.path();
                        for (var i = 0; i < $scope.listMenu.length; i++) {
                            if (loc === $scope.listMenu[i].url) {

                                return $scope.active = i;

                            }
                        }
                        $scope.active = -1;

                    }
                );

                $scope.isActive = function (id) {
                    if (id === $scope.active)
                        return 'active';
                    else return '';
                }
                $scope.listMenu = [
                    {
                        name: "About Us",
                        url: "/about"
                    },
                    {
                        name: "Social Network",
                        url: "/social"
                    }
                ]
            }
        };
    }]);
};
