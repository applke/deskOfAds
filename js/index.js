/**
 * Created by asus on 17.02.2017.
 */
module.exports = function (ngModule) {
  require('./controllers/detailProductCtrl.js')(ngModule);
  require('./controllers/listPageCtrl.js')(ngModule);

  require('./directives/prevImgDir.js')(ngModule);
  require('./directives/productListDir.js')(ngModule);
  require('./directives/cartDir.js')(ngModule);
  require('./directives/searchDir.js')(ngModule);

  require('./factories/cart.js')(ngModule);
  require('./factories/listProducts.js')(ngModule);

  require('./filters/productFilters.js')(ngModule);

};