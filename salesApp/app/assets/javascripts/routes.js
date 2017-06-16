(function() {

    'use strict';

angular
        .module('app')
        .config(['$stateProvider', '$urlRouterProvider', '$locationProvider', function($stateProvider, $urlRouterProvider, $locationProvider) {
            $stateProvider
                .state('home', {
                    url: '/',
                    templateUrl: 'home/home.html',
                    controller: 'HomeController as vm'
                })
                .state('home.login', {
                    url: 'login',
                    templateUrl: 'home/login.html',
                    controller: 'HomeController as vm'
                })
                .state('home.profile', {
                    url: 'profile',
                    templateUrl: 'home/profile.html',
                    controller: 'HomeController as vm'
                })
                .state('home.users', {
                    url: 'users',
                    templateUrl: 'home/users.html',
                    // controller: 'HomeController as vm'
                })
                .state('home.candidates', {
                    url:'candidates',
                    templateUrl: 'home/candidates.html'
                })

                $urlRouterProvider.otherwise('/');
          // $locationProvider.html5Mode(false);


              }])

        .run(['$rootScope', 'UsersFactory', '$location', function($rootScope, UsersFactory, $location) {
            $rootScope.$on("$locationChangeStart", function(event) {
                if(!localStorage.user)  {
                    console.log('deny')
                    // event.preventDefault();
                    $location.path('/')
                } 
            })
        }])



}());


// just a template component 
// footer one like money 