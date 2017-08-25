(function () {
    'use strict';
    
    SubmitModel.$inject = [];
    function SubmitModel() {
        function Model(searchText, currentLocation) {
            this.searchText = searchText;
            this.currentLocation = currentLocation;
            this.shippingService =  [];
            this.paymentInfo = [];
            this.address = [];
            this.subtotal = 0;
            var self = this;
        }
        return Model;
    }

    angular.module('clientApp').factory('SubmitModel', SubmitModel);

})();
