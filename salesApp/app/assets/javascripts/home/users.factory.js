angular
  .module('app')
  .factory('UsersFactory', UsersFactory)

  UsersFactory.$inject = ['$stateParams', '$http'];

  function UsersFactory($stateParams, $http) {
    var user;
    return {
      updateUser: updateUser,
      getUsers: getUsers,
      setUser: setUser,
      getUser: getUser,
      isLoggedIn: isLoggedIn,
      setupInterview: setupInterview,
      deleteUser: deleteUser
    }

    function setupInterview(user, company)  {
      var req = {
        method: 'POST',
        url: '/setupInterview',
        headers: {
          'Content-Type': 'application/json'
        },
        data: {
          user: user,
          company: company
        }
      };
      return $http(req)
              .catch(handleError)
    }
    function setUser(user)  {
      user = user
    }

    function getUser() {
      return $http.get('/getuser')
                    .then(handleResponse)
                    .catch(handleError)
    }

    function isLoggedIn() {
      return(user)? localStorage.user : false
    }

    function updateUser(id, user) {
      var req = {
        method: 'PATCH',
        url: '/user/' + id,
        headers: {
          'Content-Type': 'application/json'
        },
        data: {
          id: id,
          user: user
        }
      }
      console.log(req)
      return $http(req)
          .catch(handleError)
    }

    function getUsers() {
      return $http.get('/users')
              .then(handleResponse)
              .catch(handleError)
    }

    function deleteUser(user) {
      var req = {
        method: 'DELETE',
        url: '/user/' + user.id,
        headers: {
            'Content-Type': 'application/json'
          }
      }
      return $http(req)
                  .catch(handleError)
    }


    function handleResponse(response) {
        return response.data

      }

      function handleError(response)  {
        return response.data

      }

  }