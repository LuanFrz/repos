vipalnet.controller('listMenuCtrl', function($scope) {
    $scope.createMenuOrEdit = () => {
        document.getElementById('create-event').style.display = 'block';
    };
    $scope.closeCreateMenu = () => {
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
    $scope.viewMenu = () => {
        document.getElementById('edit-my-poll-popup').style.display = 'block';
    };
    $scope.closeViewMenu = () => {
        document.getElementById('edit-my-poll-popup').style.display = 'none';
    };
});
