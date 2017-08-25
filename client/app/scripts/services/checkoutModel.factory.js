(function () {
    'use strict';
    var SEQUENCE_TRACKER = {};
    checkoutModel.$inject = [];
    function checkoutModel() {
        var Address = function (user) {
            this.address1 = user && user.Address1 || '';
            this.address2 = user && user.Address2 || '';
            this.city = user && user.City || '';
            this.state = user && user.State || null;
            this.country = user && user.Country || '';
            this.zip = user && user.Zip || '';
            var fName = user && user.FirstName;
            var lName = user && user.LastName;
            var name = fName && fName || '';
            name += lName ? ' ' + lName : '';
            this.name = name;
            this.phone = user && user.Phone || '';
            this.email = user && user.Email || '';
        };

        var ShippingInfoModel = function (user) {
            this.address = new Address(user);
            this.method = {};
        };
        var PaymentInfoModel = function () {
            this.creditCard = {
                cardNumber: '',
                expirationMonth: '',
                expirationYear: '',
                cardHolderName: '',
                ccv: ''
            };
        };

        var DeliveryInfoModel = function () {
            this.address = new Address();
        };


        return {
            createCCPaymentModel: function () {
                return new PaymentInfoModel();
            },
            createDeliveryModel: function () {
                return new DeliveryInfoModel();
            },
            createShippingModel: function (user) {
                return new ShippingInfoModel(user);
            }
        };
    }

    angular.module('clientApp').factory('checkoutModel', checkoutModel);
})();