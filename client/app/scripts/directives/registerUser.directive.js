(function () {
    'use strict';

    registerUser.$inject = [];

    function registerUser() {
        return {
            restrict: 'E',
            templateUrl: 'views/registerUser.html',
            replace: true,
            scope: true,
            link: function (scope)
            {
                console.log('we are in registerUser');

            }
        };
    }

    angular.module('clientApp').directive('registerUser', registerUser);
})();
