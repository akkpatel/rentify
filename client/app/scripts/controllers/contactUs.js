    /* jshint ignore:start */

(function () {
    'use strict';

    angular
        .module('clientApp')
        .controller('contactCtrl', contactCtrl);

    contactCtrl.$inject = ['$scope', '$state'];
    function contactCtrl($scope, $state) {
        $scope.Close = function()
        {
            $state.go('home');
        }
        $scope.send = function(){
            $state.go('sent');
        }
        
    }
})();
    /* jshint ignore:end */
