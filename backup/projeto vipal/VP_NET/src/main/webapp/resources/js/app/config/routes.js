vipalnet.config(($stateProvider, $urlRouterProvider) => {
    $urlRouterProvider.otherwise('/feed');

    $stateProvider
        .state('feed', {
            url: '/feed',
            templateUrl: '/VP_NET/resources/js/app/views/feed.html',
            controller: 'feedCtrl',
        })
        .state('listportal', {
            url: '/listportal',
            templateUrl: '/VP_NET/resources/js/app/views/listportal.html',
            controller: 'listPortalCtrl',
        })
        .state('portal/:id', {
            url: '/portal/:id',
            templateUrl: '/VP_NET/resources/js/app/views/portal.html',
            controller: 'portalCtrl',
        })
        .state('listnews', {
            url: '/listnews',
            templateUrl: '/VP_NET/resources/js/app/views/listnews.html',
            controller: 'listNewsCtrl',
        })
        .state('news/:id', {
            url: '/news/:id',
            templateUrl: '/VP_NET/resources/js/app/views/news.html',
            controller: 'newsCtrl',
        })
        .state('listmenu', {
            url: '/listmenu',
            templateUrl: '/VP_NET/resources/js/app/views/listmenu.html',
            controller: 'listMenuCtrl',
        })
        .state('menu/:id', {
            url: '/menu/:id',
            templateUrl: '/VP_NET/resources/js/app/views/menu.html',
            controller: 'menuCtrl',
        })
        .state('calendar', {
            url: '/calendar',
            templateUrl: '/VP_NET/resources/js/app/views/calendar.html',
            controller: 'calendarCtrl',
        })
        .state('listservices', {
            url: '/listservices',
            templateUrl: '/VP_NET/resources/js/app/views/listservices.html',
            controller: 'listServicesCtrl',
        })
        .state('listbirthdays', {
            url: '/listbirthdays',
            templateUrl: '/VP_NET/resources/js/app/views/listbirthdays.html',
            controller: 'listbirthdaysCtrl',
        })
        .state('birthday', {
            url: '/birthday/:id',
            templateUrl: '/VP_NET/resources/js/app/views/birthday.html',
            controller: 'birthdayCtrl',
        });
});

vipalnet.run(($rootScope, fluigAPI) => {
    $rootScope.serverURL = WCMAPI.serverURL;
    $rootScope.userCode = WCMAPI.userCode;
    $rootScope.userName = WCMAPI.user;

    WebFont.load({
        google: {
            families: ['Roboto:300,400,500,700:latin'],
        },
    });

    let nameFolder = 'VipalNet';
    WCMAPI.Create({
        url: WCMAPI.serverURL + '/api/public/search/advanced',
        contentType: 'application/json',
        async: false,
        data: {
        contentSearch: false,
        endPeriod: null,
        folderToSearch: '0',
        limit: 10,
        offset: 0,
        ordering: 'RELEVANT',
        pattern: nameFolder,
        period: null,
        Types: 'FOLDER',
        startPeriod: null,
        },
        success: function(response) {
        var pastas = [];
        response.content.items.forEach(function(el, index, array) {
            if (
            el.fields.DocumentSubType == 'FOLDER' &&
            el.fields.DocumentDescription == nameFolder
            ) {
            pastas.push(el);
            }
        });

        if (pastas.length === 0) {
            fluigAPI.creatingFolder().then(response => {
            vipal.idFolderRaiz = fluigAPI.getIdToXML(response);

            fluigAPI.createSubFolder('Janeiro').then(response => {
                vipal.idFolderJaneiro = fluigAPI.getIdToXML(response);
            });

            fluigAPI.createSubFolder('Fevereiro').then(response => {
                vipal.idFolderFevereiro = fluigAPI.getIdToXML(response);
            });

            fluigAPI.createSubFolder('Março').then(response => {
                vipal.idFolderMarco = fluigAPI.getIdToXML(response);
            });

            fluigAPI.createSubFolder('Abril').then(response => {
                vipal.idFolderAbril = fluigAPI.getIdToXML(response);
            });

            fluigAPI.createSubFolder('Maio').then(response => {
                vipal.idFolderMaio = fluigAPI.getIdToXML(response);
            });

            fluigAPI.createSubFolder('Junho').then(response => {
                vipal.idFolderJunho = fluigAPI.getIdToXML(response);
            });

            fluigAPI.createSubFolder('Julho').then(response => {
                vipal.idFolderJulho = fluigAPI.getIdToXML(response);
            });

            fluigAPI.createSubFolder('Agosto').then(response => {
                vipal.idFolderAgosto = fluigAPI.getIdToXML(response);
            });

            fluigAPI.createSubFolder('Setembro').then(response => {
                vipal.idFolderSetembro = fluigAPI.getIdToXML(response);
            });

            fluigAPI.createSubFolder('Outubro').then(response => {
                vipal.idFolderOutubro = fluigAPI.getIdToXML(response);
            });

            fluigAPI.createSubFolder('Novembro').then(response => {
                vipal.idFolderNovembro = fluigAPI.getIdToXML(response);
            });

            fluigAPI.createSubFolder('Dezembro').then(response => {
                vipal.idFolderDezembro = fluigAPI.getIdToXML(response);
            });
            });
        } else {
            vipal.idFolderRaiz = pastas[0].fields.DocumentId;
        }
        },
        error: function(err) {
        FLUIGC.toast({
            message:
            'Erro ao consultar pastas dentro do fluig. Contate o suporte da IV2 via suporte@iv2.com.br.',
            type: 'danger',
        });
        },
    });

});
