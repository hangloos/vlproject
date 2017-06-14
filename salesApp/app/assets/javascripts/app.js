(function () {
    'use strict'

 angular
      .module('app', ['templates', 'Devise', 'ui.router'])
      .config(function($httpProvider)  {
        // for CSRF errors
       $httpProvider.defaults.headers.common['X-CSRF-TOKEN'] = 
       $('meta[name=csrf-token]').attr('content')
       })

     }())