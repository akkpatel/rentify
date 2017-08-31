(function(){
    'use strict';

    angular
        .module('clientApp')
        .controller('addressFormController', addressFormController);

    addressFormController.$inject = ['$modalInstance'];

    function addressFormController ($modalInstance) {
        var vm = this;
         //vm.model = ShippingInfoModel.createShippingModel().address;

        vm.closeModal = function(){
            $modalInstance.close();
        };

        // vm.addAddress = function(model)
        // {
        //     console.log('lets check the model: ', model);
        //     ReceivingEditContext.model.shippingInfo = model;
        //     vm.closeModal();
        // };
    }

})();