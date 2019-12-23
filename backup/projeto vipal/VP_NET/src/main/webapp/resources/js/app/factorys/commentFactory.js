vipalnet.factory('commentFactory', function($http, $location, $rootScope) {
  var _createComment = function(place, parentId, comment) {
    return $http({
      method: 'POST',
      headers: {
        authorization: 'bearer ' + vipal.token,
      },
      url: `${vipal.server}/comment/${place}/${parentId}`,
      data: {
        comment,
      },
    });
  };

  var _editComment = function(parentId, comment) {
    return $http({
      method: 'PUT',
      headers: {
        authorization: 'bearer ' + vipal.token,
      },
      url: `${vipal.server}/comment/${parentId}`,
      data: {
        comment,
      },
    });
  };

  var _getComments = function(place, parentId, page, perPage) {
    return $http({
      method: 'GET',
      headers: {
        authorization: 'bearer ' + vipal.token,
      },
      url: `${vipal.server}/comment/parent/${place}/${parentId}?page=${page}&perPage=${perPage}`,
    });
  };

  var _inativeComment = function(parentId) {
    return $http({
      method: 'DELETE',
      headers: {
        authorization: 'bearer ' + vipal.token,
      },
      url: `${vipal.server}/comment/${parentId}`,
    });
  };

  return {
    createComment: _createComment,
    getComments: _getComments,
    editComment: _editComment,
    inativeComment: _inativeComment,
  };
});
