    /* jshint ignore:start */

(function () {
    'use strict';

    angular
        .module('clientApp')
        .controller('HeaderController', HeaderController);

    HeaderController.$inject = ['$scope', '$state', 'LoginService'];
    function HeaderController($scope, $state, LoginService) {
        
        $scope.name = 'Company Name';

        $scope.credentials = {
            username: null,
            password: null
        };

        $scope.onSubmit = function()
        {
            var authenticated = LoginService.authenticate($scope.credentials.username, $scope.credentials.password);
            if(authenticated)
            {
                $state.go('home');
            }else
            {
                console.log('You have entered an invalid username and password');
            }
        }
        
    }
})();
    /* jshint ignore:end */
