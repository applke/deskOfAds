module.exports = function (ngModule) {
    ngModule.directive("navbar", ['$routeParams', '$location', function ($routeParams, $location) {
        return {
            replace: true,
            templateUrl: 'template/navbar.html',
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
                ];
                $scope.accountMenu=[
                    {
                        name:"Sign In",
                        url:"/login"
                    },
                    {
                        name:"Register",
                        url:"/register"
                    }
                ];
            }
        };
    }]);
};
