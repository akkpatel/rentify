(function () {
    'use strict';

    existingUser.$inject = [];

    function existingUser() {
        return {
            restrict: 'E',
            templateUrl: 'views/existingUser.html',
            replace: true,
            scope: true,
            link: function (scope)
            {
                console.log('we are in existingUser');

            }
        };
    }

    angular.module('clientApp').directive('existingUser', existingUser);
})();
