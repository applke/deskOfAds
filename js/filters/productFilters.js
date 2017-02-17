/**
 * Created by asus on 17.02.2017.
 */
deskApp.filter('cartExist',['cart',function (cart) {
    return function (element) {
        var i=0;
        var c = cart.getCart();
        for(i;i<c.length;i++){
            if(c[i] === element.productID)
                return true;
        }
        return false;
    }
}]);