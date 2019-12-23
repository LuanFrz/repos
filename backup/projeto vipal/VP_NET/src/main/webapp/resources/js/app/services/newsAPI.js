vipalnet.service('newsAPI', function($http) {
    let _getNewsAll = page => {
        return $http({
            method: 'GET',
            url: `${vipal.server}/news?page=${page}&perPage=8`,
            headers: {
                'Content-Type': 'application/json',
                Authorization: 'bearer ' + vipal.token,
            },
        });
    };

    let _createNews = news => {
        return $http({
            method: 'POST',
            url: `${vipal.server}/timeline`,
            headers: {
                'Content-Type': 'application/json',
                Authorization: 'bearer ' + vipal.token,
            },
            data: news,
        });
    };

    let _getNewsById = id => {
        return $http({
            method: 'GET',
            url: `${vipal.server}/timeline/${id}`,
            headers: {
                'Content-Type': 'application/json',
                Authorization: 'bearer ' + vipal.token,
            },
        });
    };

    let _updateNews = (id, news) => {
        return $http({
            method: 'PUT',
            url: `${vipal.server}/timeline/${id}`,
            headers: {
                'Content-Type': 'application/json',
                Authorization: 'bearer ' + vipal.token,
            },
            data: news,
        });
    };

    // CATEGORIAS
    let _getCommunities = () => {
        return $http({
            method: 'GET',
            url: `${vipal.server}/community`,
            headers: {
                'Content-Type': 'application/json',
                Authorization: 'bearer ' + vipal.token,
            },
        });
    };

    let _getNewsForNotAdmin = page => {
        return $http({
            method: 'GET',
            url: `${vipal.server}/news/groups?page=${page}&perPage=20`,
            headers: {
                'Content-Type': 'application/json',
                Authorization: 'bearer ' + vipal.token,
            },
        });
    };
    let _getNewsAllFeed = page => {
        return $http({
            method: 'GET',
            url: `${vipal.server}/news/groups?=${page}&perPage=20`,
            headers: {
                'Content-Type': 'application/json',
                Authorization: 'bearer ' + vipal.token,
            },
        });
    };
    let _inativeNews = id => {
        return $http({
            method: 'DELETE',
            url: `${vipal.server}/timeline/${id}`,
            headers: {
                'Content-Type': 'application/json',
                Authorization: 'bearer ' + vipal.token,
            },
        });
    };

    return {
        getNewsAll: _getNewsAll,
        createNews: _createNews,
        getNewsById: _getNewsById,
        updateNews: _updateNews,
        getCommunities: _getCommunities,
        getNewsForNotAdmin: _getNewsForNotAdmin,
        getNewsAllFeed: _getNewsAllFeed,
        inativeNews: _inativeNews,
    };
});
