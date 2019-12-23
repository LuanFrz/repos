vipalnet.controller('newsCtrl', function(
    $scope,
    $state,
    newsAPI,
    authenticationFactorys
) {
    authenticationFactorys.then(returnToken => {
        $scope.returnAutentication = returnToken;
        if ($scope.returnAutentication.data.code === '003') {
            $state.go('feed');
        } else {
            vipal.token = returnToken.data.content.tokenData.token;
            vipal.authentication = 'Autenticado';
            vipal.idUser = returnToken.data.content.data[0].id;
            vipal.isAdmin = returnToken.data.content.data[0].isAdmin;

            $scope.news = [];
            $scope.sp = $state.params.id; // id url

            newsAPI.getNewsById($state.params.id).then(resp => {
                $scope.news = resp.data.content;
                console.log(resp.data.content);
            });
        }
    });
	console.log('ok');
});
