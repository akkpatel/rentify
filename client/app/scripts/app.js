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
    'ui.router',
    'mm.foundation'
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
    .state('root', {
        url: '',
        abstract: true,
        views: {
            'header@': {
                templateUrl: 'views/header.html',
                controller: 'HeaderController'
            },
            'footer@': {
                templateUrl:'views/footer.html'
            }
        },
        navigation : {
            // tools : globalTools
        }
    })
    .state('home', {
      url: '/home',
      parent: 'root',
      views: {
        'content@': {
          templateUrl: 'views/main.html',
          controller: 'MainCtrl'
        }
      }   
    })
    .state('errorPage', {
      url: '/error',
      parent: 'root',
      views: {
        'content@': {
          templateUrl: 'views/error.html'
        }
      }
    })
    .state('admin',{
      url: '/admin',
      parent: 'root',
      views: {
        'content@': {
          templateUrl: 'views/admin.html'
        }
      }
    })
    .state('contactus',{
      url:'/contactus',
      parent: 'root',
      views: {
        'content@': {
          templateUrl: 'views/contactus.html',
          controller: 'contactCtrl'
        }
      }
    })
    .state('aboutus',{
      url: '/aboutus',
      parent: 'root',
      views: {
        'content@': {
          templateUrl: 'views/aboutus.html',
          controller: 'aboutCtrl'
        }
      }
    })
    .state('faq',{
      url:'/faq',
      parent: 'root',
      views: {
        'content@': {
          templateUrl: 'views/faq.html'
        }
      }
    })
    .state('terms',{
      url:'/terms',
      parent: 'root',
      views: {
        'content@': {
          templateUrl: 'views/terms.html'
        }
      }
    })
    .state('sent',{
      url:'/sent',
      parent: 'root',
      views: {
        'content@': {
          templateUrl: 'views/sent.html'
        }
      }
    })
    .state('privacy',{
      url: '/privacy',
      parent: 'root',
      views: {
        'content@': {
          templateUrl: 'views/privacy.html'
        }
      }
    })
    .state('lend',{
      url: '/lend',
      parent: 'root',
      views: {
        'content@': {
          templateUrl: 'views/lend.html'
        }
      }
    })
    .state('insurance',{
      url: '/insurance',
      parent: 'root',
      views: {
        'content@': {
          templateUrl: 'views/insurance.html'
        }
      }
    })
    .state('howitworks',{
      url: '/howitworks',
      parent: 'root',
      views: {
        'content@': {
          templateUrl: 'views/howitworks.html'
        }
      }
    })
    .state('orders',{
      url: '/orders',
      parent: 'root',
      views: {
        'content@': {
          templateUrl: 'views/orders.html'
        }
      }
    })
    .state('manage',{
      url:'/manage',
      parent: 'root',
      views: {
        'content@':{
          templateUrl:'views/manage.html',
          controller:'manageCtrl'
        }
      }
    })
    .state('howIt', {
      url: '/howIt',
      parent: 'root',
      views: {
        'content@': {
          templateUrl: 'views/works.html',
          controller: 'works'
        }
      }
    });
  $urlRouterProvider.otherwise('/');
  $urlRouterProvider.when('/', ['$state','TokenService' ,
      function ($state, TokenService){
                console.log('check the current state: ', $state);
                    if(TokenService.getAuthToken()){
                      $state.go('login');
                    }else{
                        $state.go('home');
                    }
        }]);
  });
