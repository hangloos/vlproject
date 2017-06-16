(function() {

    'use strict';

    angular
        .module('app')
        .controller('HomeController', ['Auth', '$rootScope', '$location', '$http', 'UsersFactory', 'ModalService', function(Auth, $rootScope, $location, $http, UsersFactory, ModalService){

            var vm = this
            vm.logout = Auth.logout
            vm.login = login
            vm.register = register
            vm.location = location.hash
            vm.changeLocation = changeLocation
            vm.editUser = editUser
            vm.getUsers = getUsers

            getUsers();

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

            vm.setupInterview = function(user, company) {
              return UsersFactory.setupInterview(user, company)
            }
            
            vm.deleteUser = function(user)  {
              return UsersFactory.deleteUser(user)
                                .then(getUsers)
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

        }]);

}());