angular
    .module('PokemonApp')
    .factory('BerryService', function($resource, $http) {

        return $resource('https://api.backendless.com/v1/data/berry/:berryId/', {
            berryId: '@berryId'
        }, {
            query: {
                method: 'GET',
                isArray: true,
                transformResponse: function(responseData) {
                    return angular.fromJson(responseData).data;
                }
            },
            update: {
                method: 'PUT'
            }
        })
    });