(function() {

    'use strict';


angular
        .module('app')
        .controller('JobsController', JobsController)
         
         JobsController.$inject = ['JobsFactory', 'UsersFactory']

        function JobsController(JobsFactory, UsersFactory) {
          var vm = this
          vm.createJob = createJob
          vm.getJobs = getJobs
          vm.user = JSON.parse(localStorage.user)

          // (function () {
          //   vm.user = JSON.parse(localStorage.user)
          // })();

          getJobs();


          function getJobs() {
            return JobsFactory.getJobs()
                    .then(setJobs)
          }

          function setJobs(data) {
            vm.jobs = data
          }


          function createJob(data) {

            return JobsFactory.createJob(data, JSON.parse(localStorage.user))
                                  .then(function(){
                                    $('#notice').append("Successfully Created Job")
                                  })
            
          }
        }






}());
