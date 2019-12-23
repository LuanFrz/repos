vipalnet.controller('listbirthdaysCtrl', function($scope) {
    $scope.viewBirthday = () => {
        document.getElementById('create-event').style.display = 'block';
    };
});
