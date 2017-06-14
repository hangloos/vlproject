angular
  .module('app')
  .factory('UsersFactory', UsersFactory)

  function UsersFactory($stateParams, $http) {
    return {
      updateUser: updateUser
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


    function handleResponse(response) {
        return response.data

      }

      function handleError(response)  {
        return response.data

      }

  }