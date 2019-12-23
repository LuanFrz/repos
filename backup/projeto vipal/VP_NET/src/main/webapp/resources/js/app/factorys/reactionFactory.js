vipalnet.factory('reactionFactory', function($http, $location, $rootScope) {
  let _createreaction = function(place, parentId, reaction) {
    return $http({
      method: 'POST',
      url: `${vipal.server}/reaction/${place}/${parentId}`,

      headers: {
        authorization: 'bearer ' + vipal.token,
      },
      data: {
        reaction,
      },
    });
  };

  let _removereaction = function(place, parentId, reaction) {
    return $http({
      method: 'DELETE',
      url: `${vipal.server}/reaction/${place}/${parentId}`,

      headers: {
        authorization: 'bearer ' + vipal.token,
      },
      data: {
        reaction,
      },
    });
  };

  return {
    createreaction: _createreaction,
    removereaction: _removereaction,
  };
});
