vipalnet.service('foldersAPI', function($http) {
    let _saveFolderInfo = folderInfo => {
        let optYear = {
            year: 'numeric',
        };

        let optMonth = {
            month: 'long',
        };

        let year = new Date().toLocaleDateString('pt-BR', optYear);
        let month = new Date().toLocaleDateString('pt-BR', optMonth);

        return $http({
            method: 'POST',
            url: `${vipal.server}/imagesFolder`,
            headers: {
                'Content-Type': 'application/json',
                Authorization: 'bearer ' + vipal.token,
            },
            data: {
                month,
                year,
                parentId: folderInfo,
            },
        });
    };

    let _getFolderAtualMonth = () => {
        let optYear = {
            year: 'numeric',
        };

        let optMonth = {
            month: 'long',
        };

        let year = new Date().toLocaleDateString('pt-BR', optYear);
        let month = new Date().toLocaleDateString('pt-BR', optMonth);

        return $http({
            method: 'GET',
            url: `${vipal.server}/imagesFolder/${year}/${month}`,
            async: false,
            headers: {
                'Content-Type': 'application/json',
                Authorization: 'bearer ' + vipal.token,
            },
        });
    };

    return {
        saveFolderInfo: _saveFolderInfo,
        getFolderAtualMonth: _getFolderAtualMonth,
    };
});
