    /* jshint ignore:start */

(function () {
    'use strict';

    angular
        .module('clientApp')
        .controller('LoginController', LoginController);

    LoginController.$inject = ['$scope', '$state', 'LoginService'];
    function LoginController($scope, $state, LoginService) {
        
        $scope.name = 'Rentify';

        $scope.credentials = {
            username: null,
            password: null
        };

        $scope.user_switch = true;

        $scope.pageSwitch = function(exor)
        {
            $scope.user_switch = !exor;
        }
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
