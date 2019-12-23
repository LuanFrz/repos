vipalnet.controller('listServicesCtrl', function($scope) {
    $scope.createLinkOrEdit = () => {
        document.getElementById('create-event').style.display = 'block';
    };
    $scope.closeCreateLink = () => {
        document.getElementById('create-event').style.display = 'none';
    };
    $scope.openDelete = () => {
        document.getElementById('main-popup-delete').style.display = 'block';
    };
    $scope.cancelDelete = () => {
        document.getElementById('main-popup-delete').style.display = 'none';
    };
    $scope.confirmDelete = () => {
        document.getElementById('main-popup-delete').style.display = 'none';
    };
});
