'use strict';

/**
 * @ngdoc function
 * @name clientApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the clientApp
 */
angular.module('clientApp')
  .controller('MainCtrl', function ($scope, $modal) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    $scope.newAddress = function() {
      console.log('click on addAddress');
      var params = {
        templateUrl: 'views/addressForm.html',
        windowClass: 'add-address-modal',
        controller: 'addressFormController',
        controllerAs: 'vm'
      };

      $modal.open(params);
    };


 });
