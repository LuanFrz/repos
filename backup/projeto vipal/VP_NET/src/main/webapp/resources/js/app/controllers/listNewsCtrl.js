vipalnet.controller('listNewsCtrl', function(
  $scope,
  newsAPI,
  $state,
  authenticationFactorys,
  fluigAPI,
  tagsAPI,
  $q
) {
  // $scope.initOn = () =>
  authenticationFactorys.then(returnToken => {
    $scope.returnAutentication = returnToken;
    if ($scope.returnAutentication.data.code === '003') {
      $state.go('feed');
    } else {
      vipal.token = returnToken.data.content.tokenData.token;
      vipal.authentication = 'Autenticado';
      vipal.idUser = returnToken.data.content.data[0].id;
      vipal.isAdmin = returnToken.data.content.data[0].isAdmin;
      //AUTENTICADO

      //variaveis para manipular os dados e cadastros
      $scope.news = [];
      $scope.manipulateNews = {};
      $scope.communities = [];
      $scope.groupsInFluig = [];
      $scope.files = [];
      $scope.nameFile = '';
      $scope.tags = [];
      $scope.loadTags = [];
      //trazer todos grupos do fluig

      // variaveis paginação
      $scope.currentPage = 1;
      $scope.totalPage = 0;
      $scope.lastPage = null;

      //get de comunidades do vipal net
      newsAPI.getCommunities().then(response => {
        $scope.communities = response.data.content.data;
      });

      fluigAPI.getGroups().then(response => {
        angular.forEach(response.data, value => {
          $scope.groupsInFluig.push(value);
        });
      });

      //LIBERANDO OS GRUPOS
      $scope.loadingSelect = () => {
        $('.gruposdofluig').selectpicker();
      };

      //traz todas noticias

      newsAPI.getNewsAll(1).then(resp => {
        $scope.news = resp.data.content;
        $scope.totalPage = resp.data.content.total;
        $scope.currentPage = resp.data.content.page;
        $scope.lastPage = resp.data.content.lastPage;
        console.log(resp.data);
        console.log($scope.totalPage);
        $scope.brandPage();
      });

      // proxima pagina
      $scope.nextPage = () => {
        if ($scope.currentPage + 1 > $scope.lastPage) {
          $scope.currentPage = 0; // limita paginas
        }
        newsAPI.getNewsAll($scope.currentPage + 1).then(resp => {
          $scope.news = resp.data.content;
          console.log(resp.data);
          $scope.currentPage++;
          console.log($scope.currentPage);
        });
        $scope.brandPage();
      };
      // pagina anterior
      $scope.previousPage = () => {
        $scope.brandPage();
        if ($scope.currentPage - 1 < 1) {
          $scope.currentPage = $scope.lastPage; // limita paginas
        }
        newsAPI.getNewsAll($scope.currentPage - 1).then(resp => {
          $scope.news = resp.data.content;
          console.log(resp.data);
          $scope.currentPage--;
          console.log($scope.currentPage);
        });
      };
      // ir a pagina especifica
      $scope.goPage = id => {
        $scope.brandPage();
        console.log('num pagina: ' + id);
        $scope.nextPageNow = id++;
        newsAPI.getNewsAll($scope.nextPageNow).then(resp => {
          $scope.news = resp.data.content;
          $scope.currentPage = $scope.nextPageNow;
          console.log(resp.data);
        });
      };

      $scope.loadTags = async function(term) {
        $scope.tag = [];
        await tagsAPI.getTagsById(term).then(res => {
          if (res.data.content.data.length > 0) {
            $scope.tag = res.data.content.data.map(item => {
              return {
                name: item.title,
                id: item.id,
              };
            });
          } else {
            $scope.tag = [
              {
                name: term,
              },
            ];
          }
        });
        return $scope.tag;
      };
      // marca pagina atual
      $scope.brandPage = () => {
        var allPages = document.getElementsByClassName('page-link');
        for (var i = 0; i < allPages.length; i++) {
          allPages[i].style.backgroundColor = 'white';
        }
        document.getElementById(
          'page-link-' + $scope.currentPage
        ).style.backgroundColor = '#1770ff';
      };

      //abrir o input file
      $scope.clickOpenInput = () => {
        document.querySelector('.inputCoverNews').click();
      };
      // $scope o arquivo e salvando dentro da var do arquivo;
      $scope.setFiles = function(element) {
        $scope.files = [];
        for (var i = 0; i < element.files.length; i++) {
          $scope.files.push(element.files[i]);

          $scope.nameFile = $scope.files[0].name;
          $scope.$apply();
        }
      };

      $scope.createNewsorEdit = () => {
        document.getElementById('create-event').style.display = 'block';
        $('.selectpicker').selectpicker();
      };
      $scope.closeCreateNews = () => {
        document.getElementById('create-event').style.display = 'none';
      };

      $scope.formatTimeInitial = () => {
        $scope.timeInitial = formatTime(String($scope.timeInitial));
      };

      $scope.formatTimeFinal = () => {
        $scope.timeFinal = formatTime(String($scope.timeFinal));
      };

      //criar ou editar uma noticia
      $scope.confirmCreateOrEditNews = () => {
        if ($scope.files.length > 0) {
          let initialDate = moment($scope.initialDate).format('YYYY-MM-DD');
          let timeInitial = $scope.timeInitial;
          let concatInitialDate = initialDate + ' ' + timeInitial;
          ///CORRIGINDO DATA PARA ENVIAR PARA O BANCO DE DADOS
          let finalDate = moment($scope.finalDate).format('YYYY-MM-DD');
          let timeFinal = $scope.timeFinal;
          let concatFinalDate = finalDate + ' ' + timeFinal;

          $scope.manipulateNews.initialDate = concatInitialDate;
          $scope.manipulateNews.finalDate = concatFinalDate;

          let newsCommunities = [];
          angular.forEach($scope.communities, val => {
            newsCommunities.push({
              community_id: val.id,
            });
          });

          let newsItens = [];
          angular.forEach($scope.groups, value => {
            newsItens.push({
              group: value,
            });
          });

          $scope.communities = newsCommunities;
          $scope.groups = newsItens;

          // se tudo estive validado ele agora fará upload da image
          if ($scope.files.length > 0) {
            uploadToGEDAndReturnItsDownloadURL(
              $scope.files[0],
              vipal.idMonthYear
            ).then(respToUploadSucces => {
              $scope.manipulateNews.coverImage =
                respToUploadSucces.downloadURL.content;
              $scope.manipulateNews.coverImageParentId =
                respToUploadSucces.parentIdDocument;

              ///manipulando as tag
              $scope.tags = $scope.manipulateNews.tag;
              $scope.manipulateNews.tag = [];
              $$scope.tags.map(item => {
                if (item.id) {
                  $scope.manipulateNews.tag.push({
                    title: item.name,
                    id: item.id,
                  });
                } else {
                  $scope.manipulateNews.tag.push({
                    title: item.name,
                  });
                }
              });

              $scope.paramsToSend = {
                permissionType: $scope.permissionType,
                itemType: 2,
                communities: $scope.communities,
                groups: $scope.groups,
                news: $scope.manipulateNews,
              };

              newsAPI.createNews($scope.paramsToSend).then(success => {
                $scope.news = success.config.data;
                $scope.paramsToSend = {};
                $scope.manipulateNews = {};
              });
            });
          }
        }
      };
      //fechar a criação ou edição
      $scope.openDelete = () => {
        document.getElementById('main-popup-delete').style.display = 'block';
      };
      // cancelar exclusao
      $scope.cancelDelete = () => {
        document.getElementById('main-popup-delete').style.display = 'none';
      };
      // confirmar exclusao
      $scope.confirmDelete = () => {
        document.getElementById('main-popup-delete').style.display = 'none';
      };
    }
  });
});
