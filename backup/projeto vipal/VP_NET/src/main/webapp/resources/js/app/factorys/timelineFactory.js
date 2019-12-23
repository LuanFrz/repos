vipalnet.factory('timelineFactory', function($http, $location, $rootScope) {
  var _gettimeline = function(shownCodes) {
    return $http({
      method: 'POST',
      headers: {
        authorization: 'bearer ' + vipal.token,
      },
      url: `${vipal.server}/timeline/feedLoggedUser`,
      data: {
        perPage: 10,
        shownCodes,
      },
    });
  };

  var _createTimeline = function(message, files) {
    return $http({
      method: 'POST',
      headers: {
        authorization: 'bearer ' + vipal.token,
      },
      url: `${vipal.server}/timeline`,
      data: {
        itemType: 1,
        permissionType: 1,
        post: {
          message,
          postType: 1,
          files,
        },
      },
    });
  };

  var _editTimeline = function(timeline) {
    return $http({
      method: 'PUT',
      headers: {
        authorization: 'bearer ' + vipal.token,
      },
      url: `${vipal.server}/timeline/${timeline.code}`,
      data: timeline,
    });
  };

  var _inativeTimeline = function(code) {
    return $http({
      method: 'DELETE',
      headers: {
        authorization: 'bearer ' + vipal.token,
      },
      url: `${vipal.server}/timeline/${code}`,
    });
  };

  return {
    gettimeline: _gettimeline,
    createTimeline: _createTimeline,
    editTimeline: _editTimeline,
    inativeTimeline: _inativeTimeline,
  };
});
