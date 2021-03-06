/**
 * Created by asus on 17.02.2017.
 */
module.exports = function (ngModule) {
  require('./controllers/detailProductCtrl.js')(ngModule);
  require('./controllers/listPageCtrl.js')(ngModule);
  require('./controllers/loginCtrl')(ngModule);
  require('./controllers/registerCtrl')(ngModule);

  require('./directives/prevImgDir.js')(ngModule);
  require('./directives/productListDir.js')(ngModule);
  require('./directives/cartDir.js')(ngModule);
  require('./directives/searchDir.js')(ngModule);
  require('./directives/navbar.js')(ngModule);

  require('./factories/cart.js')(ngModule);
  require('./factories/listProducts.js')(ngModule);

  require('./filters/productFilters.js')(ngModule);
  require('../bower_components/ngInfiniteScroll/build/ng-infinite-scroll');

};