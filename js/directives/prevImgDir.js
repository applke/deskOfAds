
deskApp.directive("prevImg",function ($interval) {

    return {
        scope:{
            images:'='
        },
        link: function (scope) {
            scope.indexImg = 0;
            scope.isCurrentImage = function (img) {
                return img == scope.indexImg ? true:false;
            };
            scope.setNextIndexImg = function () {
                scope.indexImg === scope.images.length-1? scope.indexImg=0:scope.indexImg++;

            };
            scope.setPrevIndexImg = function () {
                scope.indexImg === 0? scope.indexImg=scope.images.length-1:scope.indexImg--;
            };
            scope.setIndexImg = function (index) {
                scope.indexImg = index;

            };
            // $interval(function () {
            //     scope.setNextIndexImg();
            // },3000);

        },
        templateUrl:"./template/prevImg.html"
    };
});