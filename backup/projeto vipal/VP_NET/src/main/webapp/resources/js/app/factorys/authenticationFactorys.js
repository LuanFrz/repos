vipalnet.factory('authenticationFactorys', function($http) {
    var dataStorage;

    return (function() {
        return (dataStorage =
            dataStorage ||
            $http({
                method: 'POST',
                url: `${vipal.server}/authenticate`,
                headers: {
                    'Content-Type': 'application/json ',
                },
                data: {
                    login: WCMAPI.userLogin,
                    code: WCMAPI.userCode,
                },
            }).then(
                function(response) {
                    return response;
                },
                function(response) {
                    // optional
                    return response;
                }
            ));
    })();
});
