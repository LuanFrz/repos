vipalnet.directive('ngPost', function(
  timelineFactory,
  commentFactory,
  $compile,
  $timeout
) {
  const linkComment = (scope, elem, attrs) => {
    scope.idUser = vipal.idUser;
    scope.isAdmin = vipal.isAdmin;
    if (parseInt(scope.timeline.itemType) === 1) {
      $timeout(() => {
        arrangeTable(`photo1${scope.timeline.id}`);
      }, 0);

      scope.timeline.created_at = moment(
        scope.timeline.created_at,
        'YYYY-MM-DD hh/mm/ss'
      ).format('DD/MM/YYYY hh:mm');
      scope.shiftClicked = false;
      scope.page = 1;
      scope.perPage = 2;
      scope.loadedLastItem = false;
      scope.postComment = () => {
        commentFactory
          .createComment(1, scope.timeline.id, scope.comment)
          .then(function(response) {
            response.data.content.active = true;
            scope.comment = '';
            if (scope.timeline.comment) {
              scope.timeline.comment.unshift(response.data.content);
            } else {
              scope.timeline.comment = [response.data.content];
            }
            scope.timeline.__meta__.totalComments++;
            scope.removeCommentInput();
          });
      };
      scope.removeCommentInput = () => {
        const commentContainer = document.getElementById(
          `commentContainer1${scope.timeline.id}`
        );
        commentContainer.innerHTML = '';
      };
      scope.loadingComments = () => {
        if (!scope.loadedLastItem) {
          if (scope.perPage === 2) {
            commentFactory
              .getComments(1, scope.timeline.id, scope.page, scope.perPage)
              .then(function(response) {
                if (response.data.content.data.length === 2) {
                  scope.perPage = 10;
                } else {
                  scope.loadedLastItem = true;
                }
                scope.timeline.comment = response.data.content.data;
                if (
                  scope.timeline.comment.length ===
                  scope.timeline.__meta__.totalComments
                ) {
                  scope.loadedLastItem = true;
                }
              });
          } else {
            commentFactory
              .getComments(1, scope.timeline.id, scope.page, scope.perPage)
              .then(function(response) {
                if (scope.page === 1) {
                  response.data.content.data.splice(0, 2);
                }
                scope.timeline.comment.push(...response.data.content.data);
                if (
                  response.data.content.data.length === 10 ||
                  (scope.page === 1 && response.data.content.data.length === 8)
                ) {
                  scope.page++;
                } else {
                  scope.loadedLastItem = true;
                }
                if (
                  scope.timeline.comment.length ===
                  scope.timeline.__meta__.totalComments
                ) {
                  scope.loadedLastItem = true;
                }
              });
          }
        }
      };
      scope.inputComment = () => {
        const component = `<form class="comment-form inline-items comment-form-vipal">
            <div class="post__author author vcard inline-items">
              <img src="/social/api/rest/social/image/profile/${WCMAPI.userLogin}/SMALL_PICTURE" alt="author" style='width: 28px; height: 28px' />
              <div class="form-group with-icon-right ">
                <textarea
                  class="form-control commentPost"
                  ng-model="comment"
                  id="comment1${scope.timeline.id}"
                  placeholder="Comente ;)"
                ></textarea>
              </div>
            </div>
          </form>`;
        let compile = $compile(component);
        compile = compile(scope);
        const commentContainer = document.getElementById(
          `commentContainer1${scope.timeline.id}`
        );
        if (commentContainer.innerHTML === '') {
          commentContainer.append(compile[0]);
          const commnetElement = document.getElementById(
            `comment1${scope.timeline.id}`
          );
          commnetElement.addEventListener('keydown', function(event) {
            if (event.keyCode === 27) {
              scope.removeCommentInput();
            }
            if (event.keyCode === 16) {
              scope.shiftClicked = true;
            }
            if (event.keyCode === 13 && !scope.shiftClicked) {
              event.preventDefault();
              scope.postComment();
            }
          });
          commnetElement.addEventListener('keyup', function(event) {
            if (event.keyCode === 16) {
              scope.shiftClicked = false;
            }
          });
        }
      };
      scope.editPost = () => {
        $(`#create-friend-group-1-${scope.timeline.id}`).modal();
      };
      scope.inativePost = () => {
        timelineFactory
          .inativeTimeline(scope.timeline.code)
          .then(function(response) {
            scope.timeline.active = false;
          });
      };
    }
  };

  return {
    link: linkComment,
    restrict: 'A',
    templateUrl: '/VP_NET/resources/js/app/views/postDirective.html',
    scope: {
      timeline: '=',
    },
  };
});
