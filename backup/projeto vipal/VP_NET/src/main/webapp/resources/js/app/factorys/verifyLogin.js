authenticationFactorys.then(returnToken => {
    $scope.returnAutentication = returnToken;

    if ($scope.returnAutentication.data.code === '003') {
    } else {
        vipal.token = returnToken.data.content.tokenData.token;
        vipal.authentication = 'Autenticado';
        vipal.idUser = returnToken.data.content.data[0].id;
        vipal.isAdmin = returnToken.data.content.data[0].isAdmin;
    }
});
