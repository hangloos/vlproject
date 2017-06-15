(function() {

    'use strict';

angular
        .module('app')
        .config(function($stateProvider, $urlRouterProvider, $locationProvider) {
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

                $urlRouterProvider.otherwise('/');
          // $locationProvider.html5Mode(false);


              })



}());


// just a template component 
// footer one like money 