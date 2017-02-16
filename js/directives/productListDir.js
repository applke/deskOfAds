deskApp.directive('productList',function () {
    return {
        scope:{
            product:'='
        },
        link: function (scope) {

        },
        templateUrl: "./template/singleProduct.html"

    };
});