vipalnet.controller('listPortalCtrl', function($scope, portalsAPI, authenticationFactorys, $filter) {
    authenticationFactorys.then(returnToken => {
        $scope.returnAutentication = returnToken;
        if ($scope.returnAutentication.data.code === '003') {
            $state.go('feed');
        } else {
            vipal.token = returnToken.data.content.tokenData.token;
            vipal.authentication = 'Autenticado';
            vipal.idUser = returnToken.data.content.data[0].id;
            vipal.isAdmin = returnToken.data.content.data[0].isAdmin;


            $scope.createPortal = () => {
                document.getElementById('create-event').style.display = 'block';
            };
            $scope.closeCreatePortal = () => {
                document.getElementById('create-event').style.display = 'none';
            };

            $scope.openDelete = () => {
                document.getElementById('main-popup-delete').style.display = 'block';
            };
            $scope.cancelDelete = () => {
                document.getElementById('main-popup-delete').style.display = 'none';
            };
            $scope.confirmDelete = () => {
                portalsAPI.inativePortal();

                document.getElementById('main-popup-delete').style.display = 'none';
            };

            $scope.numPages = 1;
            $scope.currentPage = 1;

            function load () {
              portalsAPI.getallPortals($scope.currentPage, '').then(resp => {
                $scope.portalData = resp.data.content.data;
                $scope.numPages = resp.data.content.lastPage;

                $scope.range = [];
                for(var i = 1; i <= $scope.numPages; i++) {
                  $scope.range.push(i);
                };
              });
            }
            load();

            $scope.Search = (page, input) => {
              portalsAPI.getallPortals(page, input).then(resp => {
                $scope.portalData = resp.data.content.data;
                console.log(input);
              });
            }

            $scope.nextPage = () => {
              console.log($scope.numPages);
                if ($scope.currentPage + 1 > $scope.numPages) {
                    $scope.currentPage = 0;
                }
                portalsAPI.getallPortals($scope.currentPage + 1, '').then(resp => {
                    console.log($scope.currentPage + 1)
                    $scope.portalData = resp.data.content.data;
                    $scope.currentPage++;
                    $scope.numPages++;
                });
            };

            $scope.previousPage = () => {
                if ($scope.currentPage - 1 < 1) {
                    $scope.currentPage = $scope.numPages;
                    console.log($scope.currentPage);
                }
                portalsAPI.getallPortals($scope.currentPage - 1, '').then(resp => {
                    $scope.portalData = resp.data.content.data;
                    $scope.currentPage--;
                    $scope.numPages--;

                });
            };

            $scope.specificPage = (page) => {
                $scope.nextPageNow = page++;
                console.log(page);
                portalsAPI.getallPortals((page - 1), '').then(resp => {
                    $scope.portalData = resp.data.content.data;
                    $scope.currentPage = $scope.nextPageNow;
                });
            };

            $scope.normalizeData = function (date) {
                return moment(date, "YYYY-MM-DD HH:mm:ss").format("DD/MM/YYYY");
            }
        }
    });

});
