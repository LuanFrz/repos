vipalnet.controller('birthdayCtrl', function($scope) {
    $scope.viewBirthday = () => {
        document.getElementById('create-event').style.display = 'block';
    };
});
