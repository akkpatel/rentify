/**
 * Used to track changes within an editing context.
 */

(function () {
    'use strict';
    
    EditContext.$inject = ['$rootScope', 'SubmitModel'];
    function EditContext($rootScope, SubmitModel) {
        var scope = $rootScope.$new();
        var deregWatch = null;

        var api = {
            model: null,
            action: null,
            postActionHandler: null,
            dirty: false,

            init: function (model, action, postActionHandler) {
                if(deregWatch !== null)
                {
                    // deregister watch function for old model
                    deregWatch();
                }

                this.model = model ? angular.copy(model) : new SubmitModel();
                this.action = action;
                this.postActionHandler = postActionHandler;
                this.dirty = false;
            }
        };

        api.init();
        return api;
    }

    angular.module('clientApp').factory('EditContext', EditContext);
})();


