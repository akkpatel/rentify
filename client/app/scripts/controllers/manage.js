/* jshint ignore:start */

(function () {
    'use strict';

    angular
        .module('clientApp')
        .controller('manageCtrl', manageCtrl);

    manageCtrl.$inject = ['$scope',];
    function manageCtrl($scope) {
        $scope.items = [
        	{
        		name: 'Manage Profile',
        		value: 'Profile'
        	},
        	{
        		name: 'Manage Payments',
        		value: 'Payment'
        	},
        	{
        		name: 'Deals and Referrals',
        		value: 'Deal'
        	},
        	{
        		name: 'Messages',
        		value: 'Message'
        	},
        	{
        		name: 'Listings',
        		value: 'Listing'
        	}
        ];

        $scope.selection = $scope.items[0].value;

        $scope.updateChoice = function(choice)
        {
        	$scope.selection = choice.value;
        	console.log('check the selection: ', $scope.selection);
        }
    }
})();
    /* jshint ignore:end */
