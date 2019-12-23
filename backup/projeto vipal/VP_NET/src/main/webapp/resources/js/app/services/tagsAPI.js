vipalnet.service('tagsAPI', function($http) {
    let _getTagById = param => {
        return $http({
            method: 'GET',
            url: `${vipal.server}/tag?search=${param}`,
            headers: {
                'Content-Type': 'application/json',
                Authorization: 'bearer ' + vipal.token,
            },
            async: true,
        });
    };

    return {
        getTagsById: _getTagById,
    };
});
