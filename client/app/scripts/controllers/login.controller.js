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
            password: null,
            email: null,
            rePassword: null            
        };

        $scope.user_switch = true;


        function resetCredentials()
        {
            $scope.credentials = {
                username: null,
                password: null,
                email: null,
                rePassword: null
            };
        }
        $scope.pageSwitch = function(exor)
        {
            resetCredentials();
            $scope.user_switch = !exor;
        }
        $scope.signIn = function()
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

        /** 
        ** Inside this function there should be a post call to Register User
        ** Our post call should take in three parameters
        ** UserName: String
        ** Password: Encrypted string
        ** email: String
        **/ 
        $scope.registerUser = function()
        {

        }
        
    }
})();
    /* jshint ignore:end */
