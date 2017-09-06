angular.module('clientApp').controller('manageCtrl', function ($scope) {
  $scope.tabs = [
    { title:"Change Profile", content: "Name" },
    { title:"Change Payment", content:"Payment" },
    {title: "Deals and Referrals", content: "Deal"}
  ];

  $scope.alertMe = function() {
    setTimeout(function() {
      alert("You've selected the alert tab!");
    });
  };
});
