module.exports = function (ngModule) {
    ngModule.factory("account",[function () {
        var isSignedIn = false;
        return {
            isSignedIn:function () {
                return isSignedIn;
            }
        };
    }]);
};