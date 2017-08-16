'use strict';

/**
 * @ngdoc overview
 * @name clientApp
 * @description
 * # clientApp
 *
 * Main module of the application.
 */
angular
  .module('clientApp', [
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ui.router'
  ])
  .config(function ($routeProvider, $stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('login', {
        url: '/login',
        views: {
            'content@': {
                templateUrl: 'views/login.html',
                controller: 'LoginController'
            }
        }
    })
    .state('home', {
      url: '/home',
      views: {
        'content@': {
          templateUrl: 'views/main.html',
          controller: 'MainCtrl'
        }
      }   
    });
  $urlRouterProvider.otherwise('/');
  $urlRouterProvider.when('/', ['$state','TokenService' ,
      function ($state, TokenService){
                console.log('check the current state: ', $state);
                    if(TokenService.getAuthToken()){
                      $state.go('home');
                    }else{
                        $state.go('login');
                    }
        }]);
  });
