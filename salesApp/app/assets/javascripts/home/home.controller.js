(function() {

    'use strict';

    

          angular.module('app').filter('unique', function () {

              return function(collection, keyname) {
              // we define our output and keys array;
              var output = [], 
                  keys = [];
              
              // we utilize angular's foreach function
              // this takes in our original collection and an iterator function
              angular.forEach(collection, function(item) {
                  // we check to see whether our object exists
                  var key = item[keyname];
                  // if it's not already part of our keys array
                  if(keys.indexOf(key) === -1) {
                      // add it to our keys array
                      keys.push(key); 
                      // push this item to our final output array
                      output.push(item);
                  }
              });
              // return our array which should be devoid of
              // any duplicates
              return output;
       };
    });


    angular
        .module('app')
        .controller('HomeController', HomeController)

    HomeController.$inject = [ 'Auth', '$stateParams', '$rootScope', '$location', '$http', 'UsersFactory', 'ModalService', 'JobsFactory' ];

   function HomeController(Auth, $stateParams, $rootScope, $location, $http, UsersFactory, ModalService, JobsFactory) {
        
        var vm = this
        vm.logout = Auth.logout
        vm.login = login
        vm.register = register
        vm.location = location.hash
        vm.changeLocation = changeLocation
        vm.editUser = editUser
        vm.getUsers = getUsers
        vm.createJob = createJob
        vm.getJobs = getJobs
        vm.deleteJob = deleteJob
        vm.getJobShow = getJobShow
        vm.setJobShow = setJobShow
        vm.editJob = editJob


        if (!!$stateParams.id) {
          getJobShow($stateParams.id);

        }
        getUsers();
        getJobs();

        function changeLocation(location) {
          vm.location = location
        }

        function getUsers() {
          return UsersFactory.getUsers()
                .then(setUsers)
        }

        function setUsers(data) {
          vm.users = data

        }

        function editUser(id, user) {
          return UsersFactory.updateUser(id, user)
        }


        vm.modalUpdate = function (selectedUser)  {
          vm.selectedUser = selectedUser
        }

        vm.updateUser = function(selectedUser,number)  {        
          return UsersFactory.updateUser(selectedUser.id, selectedUser)
    
        }

        vm.setupInterview = function(user, company, job) {
          return UsersFactory.setupInterview(user, company, job)
        }
        
        vm.deleteUser = function(user)  {
          return UsersFactory.deleteUser(user)
                            .then(getUsers)
        }

        // Jobs

        function getJobs() {
            return JobsFactory.getJobs()
                    .then(setJobs)
          }

          function setJobs(data) {
            vm.jobs = data
          }


          function createJob(data) {
            return JobsFactory.createJob(data, JSON.parse(localStorage.user))
                                  .then(getJobs)
          }

          function deleteJob(job, user) {
            return JobsFactory.deleteJob(job)
                            .then(getJobs)
          }

          vm.modalJob = function (job)  {
          vm.selectedJob = job
          }

          function getJobShow(id) {
            return JobsFactory.getJob(id)
                        .then(setJobShow)

          }

          function setJobShow(data) {
            vm.jobShow = data
          }

          function editJob(job) {
            return JobsFactory.updateJob(job)
                                .then($route.reload())
          }




        // Authentication

        Auth.currentUser()
              .then(function(user)  {
                vm.user = user
                $rootScope.currentUser = user
              }, function(error)  {
                console.log(error)
              }) 


        function login()  {
          var config = {
                  headers: {
                      'X-HTTP-Method-Override': 'POST'
                  }
            };

            Auth.login(vm.userForm, config)
                .then(function(user)  {
                  window.localStorage.setItem('user', JSON.stringify(user))
                  vm.user = user
                  location.reload()
                  $location.path('/')
                }, function(error)  {
                  if (error.data.error) {
                    vm.error = error.data.error
                    alert(error.data.error)
                  }
                  else  {
                    vm.error = error.data.errors
                    alert(error.data.errors)
                  }

                });
          }

        function register() {
           var config = {
                    headers: {
                        'X-HTTP-Method-Override': 'POST'
                    }
            };

        
            Auth.register(vm.userForm, config)
                  .then(function(registeredUser)  {
                      vm.user = registeredUser
                      UsersFactory.setUser(registeredUser)
                      window.localStorage.setItem('user', JSON.stringify(vm.user))
                      location.reload()
                      $location.path('/')
                }, function(error)  {
                 vm.error = error.data.errors
                 vm.errors = error.data.errors
                  if (vm.errors.email)  {
                    vm.errors.email.forEach(function (value){
                      alert("email " + value)
                    }) 
                  }
                  if (vm.errors.password)  {
                    vm.errors.password.forEach(function (value){
                      alert("password " + value)
                    }) 
                  }
            });
        }


        $rootScope.$on('devise:logout', function(event, user)  {
          window.localStorage.removeItem('user')
          vm.user = {}
          location.reload()
          $location.path('/')
          
        })

  }



}());