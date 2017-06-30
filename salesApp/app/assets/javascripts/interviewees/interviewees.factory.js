angular
  .module('app')
  .factory('IntervieweesFactory', IntervieweesFactory)

  UsersFactory.$inject = ['$stateParams', '$http'];

  function IntervieweesFactory($stateParams, $http) {

    return {
      getIndex: getIndex,
    }


    function getIndex() {
      return $http.get('/interviewees')
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