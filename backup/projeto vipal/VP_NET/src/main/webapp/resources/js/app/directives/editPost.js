vipalnet.directive('ngEditPost', function(timelineFactory, $timeout) {
  const linkComment = (scope, elem, attrs) => {
    scope.userLogin = WCMAPI.userLogin;
    scope.listImages = [];
    scope.message = scope.itemTimeline.post.message;

    for (var i = 0; i < scope.itemTimeline.post.postFile.length; i++) {
      scope.listImages.push({
        ...scope.itemTimeline.post.postFile[i],
        link: scope.itemTimeline.post.postFile[i].file,
        id: scope.itemTimeline.post.postFile[i].id,
      });
    }

    $timeout(function() {
      document
        .getElementById('editSendPicture-' + scope.itemTimeline.id)
        .addEventListener('change', function(el) {
          let files = el.target.files;
          for (var i = 0; i < files.length; i++) {
            let thumb = URL.createObjectURL(files[i]);
            scope.listImages.push({ link: thumb, file: files[i] });
          }
          scope.$apply();
        });
      scope.removeImage = image => {
        const index = scope.listImages.indexOf(image);
        if (index > -1) {
          scope.listImages.splice(index, 1);
        }
      };
    }, 0);

    scope.savePost = () => {
      Promise.all(
        scope.listImages.map(item => {
          return new Promise(async (resolve, reject) => {
            if (!item.id) {
              const document = await uploadToGEDAndReturnItsDownloadURL(
                item.file,
                vipal.idMonthYear
              );
              resolve({
                file: document.downloadURL.content,
                type: item.file.type.split('/')[0] === 'image' ? 1 : 2,
                fileParentId: document.parentIdDocument,
              });
            } else {
              resolve({
                file: item.file,
                type: item.type,
                fileParentId: item.fileParentId,
              });
            }
          });
        })
      ).then(function(values) {
        FLUIGC.loading(window).show();
        let newItem = angular.copy(scope.itemTimeline);
        newItem.post.message = angular.copy(scope.message);
        newItem.post.files = values;
        newItem.post.postFile = values;

        timelineFactory.editTimeline(newItem).then(response => {
          scope.itemTimeline = newItem;
          $timeout(function() {
            arrangeTable(`photo1${scope.itemTimeline.id}`);
          }, 0);
          $(`#create-friend-group-1-${scope.itemTimeline.id}`).modal('hide');
          FLUIGC.loading(window).hide();
          // scope.timeline.unshift(response.data.content);
          // scope.message = '';
          // scope.listImages = {};
        });
      });
    };
  };

  return {
    link: linkComment,
    restrict: 'A',
    templateUrl: '/VP_NET/resources/js/app/views/editPost.html',
    scope: {
      itemTimeline: '=',
    },
  };
});
