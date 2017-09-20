angular.module('clientApp')
.controller('manangeCtrl', ['$scope', function($scope) {

	$scope.profile = function(){
  		console.log("Open Profile");
    };
}]);