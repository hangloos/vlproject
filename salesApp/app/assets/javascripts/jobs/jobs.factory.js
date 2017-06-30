angular
  .module('app')
  .factory('JobsFactory', JobsFactory)

  JobsFactory.$inject = ['$stateParams', '$http'];

  function JobsFactory($stateParams, $http) {

    var user;
    return {
      createJob: createJob,
      getJobs: getJobs

    }


    function createJob(data,user) {

        var req = {
          method: 'POST',
          url: '/createJob',
          headers: {
          'Content-Type': 'application/json'
        },
        data: {
          job: data,
          id: user.id
        }
      };
      return $http(req)
              .catch(handleError)
        }


        function getJobs() {
          return $http.get('/jobs')
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
