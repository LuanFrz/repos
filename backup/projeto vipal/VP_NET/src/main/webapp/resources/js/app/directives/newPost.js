vipalnet.directive('ngNewPost', function(timelineFactory) {
  const linkComment = (scope, elem, attrs) => {
    scope.userLogin = WCMAPI.userLogin;
    scope.listImages = [];
    document
      .getElementById('sendPicture')
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

    scope.savePost = () => {
      Promise.all(
        scope.listImages.map(item => {
          return new Promise(async (resolve, reject) => {
            const document = await uploadToGEDAndReturnItsDownloadURL(
              item.file,
              vipal.idMonthYear
            );
            resolve({
              file: document.downloadURL.content,
              type: item.file.type.split('/')[0] === 'image' ? 1 : 2,
              fileParentId: document.parentIdDocument,
            });
          });
        })
      ).then(function(values) {
        timelineFactory.createTimeline(scope.message, values).then(response => {
          scope.timeline.unshift(response.data.content);
          scope.message = '';
          scope.listImages = {};
        });
      });
    };
  };

  return {
    link: linkComment,
    restrict: 'A',
    templateUrl: '/VP_NET/resources/js/app/views/newPost.html',
    scope: {
      timeline: '=',
    },
  };
});
