vipalnet.service('usersAPI', function($http) {
    let _getAllUserPaginate = () => {
        return $http({
            method: 'GET',
            url: `${vipal.server}/user?page=1&perPage=10`,
            headers: {
                'Content-Type': 'application/json',
                Authorization: 'bearer ' + vipal.token,
            },
        });
    };

    let _createUser = params => {
        return $http({
            method: 'POST',
            url: `${vipal.server}/user?page=1&perPage=10`,
            headers: {
                'Content-Type': 'application/json',
            },
            data: params,
        });
    };

    let _getUserById = id => {
        return $http({
            method: 'GET',
            url: `${vipal.server}/user/${id}`,
            headers: {
                'Content-Type': 'application/json',
                Authorization: 'bearer ' + vipal.token,
            },
        });
    };

    return {
        userGetAll: _getAllUserPaginate,
        createUser: _createUser,
        getUserById: _getUserById,
    };
});
