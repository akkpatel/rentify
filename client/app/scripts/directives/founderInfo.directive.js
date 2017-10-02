(function () {
    'use strict';

    founderInfo.$inject = [];

    function founderInfo() {
        return {
            restrict: 'E',
            templateUrl: 'views/founderInfo.html',
            replace: true,
            scope: {
                information: '='
            },
            link: function (scope)
            {
                console.log('we are in founderInfo: ', scope.information);

            }
        };
    }

    angular.module('clientApp').directive('founderInfo', founderInfo);
})();
