angular
  .module('app')
  .factory('UsersFactory', UsersFactory)

  function UsersFactory($stateParams, $http) {
    return {
      updateUser: updateUser,
      getUsers: getUsers
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


    function handleResponse(response) {
        return response.data

      }

      function handleError(response)  {
        return response.data

      }

  }