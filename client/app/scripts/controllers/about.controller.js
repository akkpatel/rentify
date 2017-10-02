    /* jshint ignore:start */

(function () {
    'use strict';

    angular
        .module('clientApp')
        .controller('aboutCtrl', aboutCtrl);

    aboutCtrl.$inject = ['$scope', '$state'];
    function aboutCtrl($scope, $state) {
        $scope.information = {
            member1: {
                imgSrc: '/images/harshil.png.jpg',
                name: 'Harshil Narsana',
                position: 'Co-Founder and CEO',
                description: 'He is an avid reader and a quick learnder. He is not afraid to try new things. A very big soccer fan who supports Chelsea FC.'
            },
            member2: {
                imgSrc: '/images/anand.png.jpg',
                name: 'Anand Patel',
                position: 'Co-Founder and CTO',
                description: 'He is the brains behind the company\'s awesome technologu. He is a very big soccer and bollywood fan. Loves Manchester Untied'
            },
            member3: {
                imgSrc: '/images/nikhil.png.jpg',
                name: 'Nikhil Puri',
                position: 'Business Development',
                description: 'He is the brains behind the way the website works. The craziest soccer fan amongst us and loves Manchester United.'
            }
        };
        console.log('print the information: ', $scope.information);
    }
})();