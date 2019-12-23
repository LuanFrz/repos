vipalnet.controller('calendarCtrl', function($scope) {
    var e = document.getElementById('calendar');
    new FullCalendar.Calendar(e, {
        plugins: ['interaction', 'dayGrid', 'timeGrid'],

        header: {
            right: 'prev,next,dayGridMonth,timeGridWeek,timeGridDay',
        },
        buttonText: {
            month: ' ',
            week: ' ',
            day: ' ',
        },
        buttonIcons: {
            prev: 'chevron-left',
            next: 'chevron-right',
        },
        eventClick: function(e) {
            var i = e.event.url.match(/^modal\:(#[-\w]+)$/);
            if (i) {
                e.jsEvent.preventDefault();
                var a = i[1];
                $(a).modal('show');
            }
        },
        events: [],
    }).render();

    $scope.createCalendarOrEdit = () => {
        document.getElementById('create-event').style.display = 'block';
        document.getElementById('edit-my-poll-popup').style.display = 'none';
    };
    $scope.closeCreateCalendar = () => {
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

    $scope.viewCalendar = () => {
        document.getElementById('edit-my-poll-popup').style.display = 'block';
    };
    $scope.closeViewCalendar = () => {
        document.getElementById('edit-my-poll-popup').style.display = 'none';
    };
});
