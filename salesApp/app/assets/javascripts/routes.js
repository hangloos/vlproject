(function() {

    'use strict';

angular
        .module('app')
        .config(function($stateProvider, $urlRouterProvider, $locationProvider) {
          $urlRouterProvider.otherwise('/');
          $locationProvider.html5Mode(false);
            $stateProvider
                .state({
                    name: 'home',
                    url: '/',
                    templateUrl: 'home/home.html',
                    controller: 'HomeController as vm'
                })


              })



}());


// just a template component 
// footer one like money 