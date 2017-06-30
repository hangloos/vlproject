angular
  .module('app')
  .factory('JobsFactory', JobsFactory)

  JobsFactory.$inject = ['$stateParams', '$http'];

  function JobsFactory($stateParams, $http) {

    return {
      createJob: createJob,
      getJobs: getJobs,
      deleteJob: deleteJob,
      getJob: getJob,
      updateJob: updateJob

    }


    function updateJob(job) {
      var req = {
        method: 'PATCH',
        url: '/jobs/' + job.id,
        headers: {
          'Content-Type': 'application/json'
        },
        data: {
          job: job
        }
      }
      return $http(req)
          .catch(handleError)

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


        function getJob(id) {
          return $http.get('/jobs/' + id)
                    .then(handleResponse)
                    .catch(handleError)
        }


        function deleteJob(job) {
          var req = {
        method: 'DELETE',
        url: '/jobs/' + job.id,
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
