vipalnet.service("portalsAPI", function($http) {
  let _getallPortals = (page, input) => {
    return $http({
      method: "GET",
      url: `${vipal.server}/community?page=${page}&perPage=8&search=${input}`,
      headers: {
        "Content-Type": "application/json",
        Authorization: "bearer " + vipal.token
      }
    });
  };

  let _createPortal = dados => {
    return $http({
      method: "POST",
      url: `${vipal.server}/community`,
      headers: {
        "Content-Type": "application/json",
        Authorization: "bearer " + vipal.token
      },
      data: dados
    });
  };

  let _updatePortal = (id, dados) => {
    return $http({
      method: "PUT",
      url: `${vipal.server}/community/${id}`,
      headers: {
        "Content-Type": "application/json",
        Authorization: "bearer " + vipal.token
      },
      data: dados
    });
  };

  let _getallPortalByid = id => {
    return $http({
      method: "GET",
      url: `${vipal.server}/community/${id}`,
      headers: {
        "Content-Type": "application/json",
        Authorization: "bearer " + vipal.token
      }
    });
  };

  //ESTE METODO ELE SERVE PARA TRAZER QUANDO O CARA ABRIU AS POSTAGENS DO PORTAL
  let _getPostPaginated = (data, id) => {
    return $http({
      method: "POST",
      url: `${vipal.server}/timeline/feedCommunity/${id}`,
      headers: {
        "Content-Type": "application/json",
        Authorization: "bearer " + vipal.token
      },
      data: data
    });
  };
  let _newPost = data => {
    return $http({
      method: "POST",
      url: `${vipal.server}/timeline`,
      headers: {
        "Content-Type": "application/json",
        Authorization: "bearer " + vipal.token
      },
      data: data
    });
  };

  let _getPostByCode = code => {
    return $http({
      method: "GET",
      url: `${vipal.server}/timeline/${code}`,
      headers: {
        "Content-Type": "application/json",
        Authorization: "bearer " + vipal.token
      }
    });
  };

  let _updatePostByCode = (code, data) => {
    return $http({
      method: "PUT",
      url: `${vipal.server}/timeline/${code}`,
      headers: {
        "Content-Type": "application/json",
        Authorization: "bearer " + vipal.token
      },
      data: data
    });
  };

  let _inativePost = (code, permission) => {
    return $http({
      method: "DELETE",
      url: `${vipal.server}/timeline/${permission}${code}`,
      headers: {
        "Content-Type": "application/json",
        Authorization: "bearer " + vipal.token
      }
    });
  };

  let _inativePortal = code => {
    return $http({
      method: "PUT",
      url: `${vipal.server}/community/status/${code}`,
      headers: {
        "Content-Type": "application/json",
        Authorization: "bearer " + vipal.token
      },
      data: {
        active: false
      }
    });
  };

  return {
    getallPortals: _getallPortals,
    createPortal: _createPortal,
    updatePortal: _updatePortal,
    getallPortalByid: _getallPortalByid,
    getPostPaginated: _getPostPaginated,
    newPost: _newPost,
    getPostByCode: _getPostByCode,
    updatePostByCode: _updatePostByCode,
    inativePost: _inativePost,
    inativePortal: _inativePortal
  };
});
