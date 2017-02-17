module.exports = function (deskApp) {
    deskApp.factory("listProducts", [function () {
        var list = [
            {
                productID: 0,
                productTitle: "Apple Iphone 5S",
                productPrice: "500",
                productAbout: "This is brand new phone from the Apple!",
                productImages: [
                    'product_images/AppleIphone/30018901b.jpg',
                    'product_images/AppleIphone/918201370949PM_635_iPhone-5s.jpeg',
                    'product_images/AppleIphone/apple_iphone_5s_space_grey_450.jpg',
                    'product_images/AppleIphone/iphone5s-gallery-img-1.jpg'
                ],
                productField1: "Field1",
                productField2: "Field2",
                productField3: "Field3",
                productField4: "Field4",
                productField5: "Field5",
            },
            {
                productID: 1,
                productTitle: "SSD",
                productPrice: "250",
                productAbout: "This is brand new ssd from the Intel!",
                productImages: [
                    'product_images/SSD/09fd8a0aac7112501b566d552d4768bb.jpg',
                    'product_images/SSD/ssd (1).jpg',
                    'product_images/SSD/SSD.jpg'
                ],
                productField1: "Field1",
                productField2: "Field2",
                productField3: "Field3",
                productField4: "Field4",
                productField5: "Field5",
            },
            {
                productID: 2,
                productTitle: "MacBook Pro Retina 13 SSD+",
                productPrice: "1250",
                productAbout: "This is brand new MacBook by Apple!",
                productImages: [
                    'product_images/macbook/mac1.jpg',
                    'product_images/macbook/mac2.jpg',
                ],
                productField1: "Field1",
                productField2: "Field2",
                productField3: "Field3",
                productField4: "Field4",
                productField5: "Field5",
            },
            {
                productID: 3,
                productTitle: "SSD",
                productPrice: "250",
                productAbout: "This is brand new ssd from Intel!",
                productImages: [
                    'product_images/SSD/09fd8a0aac7112501b566d552d4768bb.jpg',
                    'product_images/SSD/ssd (1).jpg',
                    'product_images/SSD/SSD.jpg'
                ],
                productField1: "Field1",
                productField2: "Field2",
                productField3: "Field3",
                productField4: "Field4",
                productField5: "Field5",
            }];
        return {
            getList: function () {
                return list;
            },
            getItem: function (id) {
                id = parseInt(id);
                for (var i = 0; i < list.length; i++)
                    if (list[i].productID === id)
                        return angular.copy(list[i]);
            },
            getItems: function (ids) {
                var arr = [];
                ids.sort();
                var j =0;
                for (var i = 0; i < list.length; i++)
                    if (list[i].productID === ids[j] && j<=ids.length )
                        arr.push(list[i]);
                return arr;
            }
        };

    }]);
};