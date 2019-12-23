vipalnet.controller('feedCtrl', function(
  $scope,
  authenticationFactorys,
  usersAPI,
  foldersAPI,
  fluigAPI,
  timelineFactory
) {
  $scope.userLogin = WCMAPI.userLogin;
  $scope.userCode = WCMAPI.userCode;
  $scope.userName = WCMAPI.user;
  $scope.userEmail = WCMAPI.userEmail;
  $scope.isAdmin = WCMAPI.isAdmin();
  $scope.returnAutentication = [];
  $scope.contentNewsinFeed = [];
  $scope.showCodes = [];
  $scope.timelines = [];
  $scope.hasItens = true;

  $scope.authentication = {
    login: $scope.userLogin,
    code: $scope.userCode,
  };

  authenticationFactorys.then(returnToken => {
    $scope.returnAutentication = returnToken;

    if ($scope.returnAutentication.data.code === '003') {
      let userInfo = {
        login: $scope.userLogin,
        code: $scope.userCode,
        name: $scope.userName,
        email: $scope.userEmail,
        isAdmin: $scope.isAdmin,
        functionalCode: '000',
      };

      usersAPI.createUser(userInfo);
    } else {
      vipal.token = returnToken.data.content.tokenData.token;
      vipal.authentication = 'Autenticado';
      vipal.idUser = returnToken.data.content.data[0].id;
      vipal.isAdmin = returnToken.data.content.data[0].isAdmin;
      $scope.getTimelineItens = () => {
        timelineFactory.gettimeline($scope.showCodes).then(function(response) {
          $scope.timelines.push(...response.data.content.data);
          if (response.data.content.data.length < 10) {
            $scope.hasItens = false;
          }
          response.data.content.data.forEach(item => {
            $scope.showCodes.push(item.code);
          });
        });
      };
      $scope.getTimelineItens();

      setTimeout(() => {
        ///criação e verificação de pastas///
        let nameFolder = `VipalNet`;

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
            pattern: 'VipalNet',
            period: null,
            Types: 'FOLDER',
            startPeriod: null,
          },
          success: function(retorno) {
            let yearNow = {
              month: 'long',
              year: 'numeric',
            };

            let pastas = [];

            retorno.content.items.forEach(function(el, index, array) {
              if (
                el.fields.DocumentSubType == 'FOLDER' &&
                el.fields.DocumentDescription == nameFolder
              ) {
                pastas.push(el);
              }
            });

            if (pastas.length === 0) {
              fluigAPI.creatingFolder().then(respostaCriandoPastaRaiz => {
                if (vipal.idFolderRaiz > 0) {
                  return;
                } else {
                  vipal.idFolderRaiz = fluigAPI.getIdToXML(
                    respostaCriandoPastaRaiz
                  );

                  fluigAPI
                    .createSubFolder(
                      new Date().toLocaleDateString('pt-br', yearNow),
                      vipal.idFolderRaiz
                    )
                    .then(respostaSubPasta => {
                      vipal.idMonthYear = fluigAPI.getIdToXML(respostaSubPasta);
                      foldersAPI.saveFolderInfo(vipal.idMonthYear);
                    });
                }
              });
            } else {
              vipal.idFolderRaiz = parseInt(pastas[0].fields.DocumentId);

              foldersAPI.getFolderAtualMonth().then(respostaGetMonth => {
                if (respostaGetMonth.data.content.length === 0) {
                  fluigAPI
                    .createSubFolder(
                      new Date().toLocaleDateString('pt-br', yearNow),
                      vipal.idFolderRaiz
                    )
                    .then(respostaSubPasta => {
                      vipal.idMonthYear = fluigAPI.getIdToXML(respostaSubPasta);
                      foldersAPI.saveFolderInfo(vipal.idMonthYear);
                    });
                } else {
                  vipal.idMonthYear = respostaGetMonth.data.content[0].parentId;
                }
              });
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
      }, 1000);
    }
  });
});
