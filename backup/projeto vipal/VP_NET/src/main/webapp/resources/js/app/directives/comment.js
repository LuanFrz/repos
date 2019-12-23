vipalnet.directive('ngComment', function(commentFactory, $compile) {
  const linkComment = (scope, elem, attrs) => {
    scope.commentItem.created_at = moment(
      scope.commentItem.created_at,
      'YYYY-MM-DD hh/mm/ss'
    ).format('DD/MM/YYYY hh:mm');
    scope.shiftClicked = false;
    scope.page = 1;
    scope.perPage = 2;
    scope.loadedLastItem = false;
    let postComment = () => {
      commentFactory

        .createComment(2, scope.commentItem.id, scope.comment)
        .then(function(response) {
          scope.comment = '';
          response.data.content.active = true;
          if (scope.commentItem.commentInComment) {
            scope.commentItem.commentInComment.unshift(response.data.content);
          } else {
            scope.commentItem.commentInComment = [response.data.content];
          }
          scope.commentItem.__meta__.totalComments++;
          if (
            scope.commentItem.__meta__.totalComments ===
            scope.commentItem.commentInComment.length
          ) {
            scope.loadedLastItem = true;
          }

          scope.removeCommentInput();
        });
    };

    let editComment = () => {
      commentFactory

        .editComment(scope.commentItem.id, scope.editedComment)
        .then(function(response) {
          scope.commentItem.comment = angular.copy(scope.editedComment);
          scope.editedComment = '';

          removeEditCommentInput();
        });
    };

    scope.inativeComment = () => {
      commentFactory.inativeComment(scope.commentItem.id).then(function() {
        scope.commentItem.active = false;

        scope.commentTotal = parseInt(scope.commentTotal) - 1;
      });
    };

    scope.removeCommentInput = () => {
      const commentContainer = document.getElementById(
        `commentContainerInPost2${scope.commentItem.id}`
      );
      commentContainer.innerHTML = '';
    };

    let removeEditCommentInput = () => {
      const commentContainer = document.getElementById(
        `editCommentContainerInPost2${scope.commentItem.id}`
      );
      document.getElementById(
        `showComment2${scope.commentItem.id}`
      ).style.display = 'block';
      commentContainer.innerHTML = '';
    };

    scope.loadingComments = () => {
      if (!scope.loadedLastItem) {
        if (scope.perPage === 2) {
          commentFactory
            .getComments(2, scope.commentItem.id, scope.page, scope.perPage)
            .then(function(response) {
              if (response.data.content.data.length === 2) {
                scope.perPage = 10;
              } else {
                scope.loadedLastItem = true;
              }
              scope.commentItem.commentInComment = response.data.content.data;

              if (
                scope.commentItem.commentInComment.length ===
                scope.commentItem.__meta__.totalComments
              ) {
                scope.loadedLastItem = true;
              }
            });
        } else {
          commentFactory
            .getComments(2, scope.commentItem.id, scope.page, scope.perPage)
            .then(function(response) {
              if (scope.page === 1) {
                response.data.content.data.splice(0, 2);
              }
              scope.commentItem.commentInComment.push(
                ...response.data.content.data
              );
              if (
                response.data.content.data.length === 10 ||
                (scope.page === 1 && response.data.content.data.length === 8)
              ) {
                scope.page++;
              } else {
                scope.loadedLastItem = true;
              }
              if (
                scope.commentItem.commentInComment.length ===
                scope.commentItem.__meta__.totalComments
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
        <img src="/social/api/rest/social/image/profile/${WCMAPI.userLogin}/SMALL_PICTURE" alt="author" />

        <div class="form-group with-icon-right ">
          <textarea
            class="form-control commentPost"
            ng-model="comment"
            id="comment2${scope.commentItem.id}"
            placeholder="Comente ;)"
          ></textarea>
        </div>
      </div>

    </form>`;
      let compile = $compile(component);
      compile = compile(scope);

      const commentContainer = document.getElementById(
        `commentContainerInPost2${scope.commentItem.id}`
      );
      if (commentContainer.innerHTML === '') {
        commentContainer.append(compile[0]);
        const commnetElement = document.getElementById(
          `comment2${scope.commentItem.id}`
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
            postComment();
          }
        });

        commnetElement.addEventListener('keyup', function(event) {
          if (event.keyCode === 16) {
            scope.shiftClicked = false;
          }
        });
      }
    };

    scope.inputEditComment = () => {
      const component = `<form class="comment-form inline-items comment-form-vipal">
      <div class="post__author author vcard inline-items">
      <img src="/social/api/rest/social/image/profile/${WCMAPI.userLogin}/SMALL_PICTURE" alt="author" style='width: 28px; height: 28px' />

        <div class="form-group with-icon-right ">
          <textarea
            class="form-control commentPost"
            ng-model="editedComment"
            value="{{scope.commentItem.comment}}"
            id="editComment2${scope.commentItem.id}"
            placeholder="Comente ;)"
          ></textarea>
        </div>
      </div>

    </form>`;
      let compile = $compile(component);
      compile = compile(scope);

      const commentContainer = document.getElementById(
        `editCommentContainerInPost2${scope.commentItem.id}`
      );
      if (commentContainer.innerHTML === '') {
        commentContainer.append(compile[0]);
        document.getElementById(
          `showComment2${scope.commentItem.id}`
        ).style.display = 'none';

        const commnetElement = document.getElementById(
          `editComment2${scope.commentItem.id}`
        );
        scope.editedComment = scope.commentItem.comment;
        commnetElement.addEventListener('keydown', function(event) {
          if (event.keyCode === 27) {
            removeEditCommentInput();
          }
          if (event.keyCode === 16) {
            scope.shiftClicked = true;
          }
          if (event.keyCode === 13 && !scope.shiftClicked) {
            event.preventDefault();
            editComment();
          }
        });

        commnetElement.addEventListener('keyup', function(event) {
          if (event.keyCode === 16) {
            scope.shiftClicked = false;
          }
        });
      }
    };
  };

  return {
    link: linkComment,
    restrict: 'A',
    transclude: true,
    templateUrl: '/VP_NET/resources/js/app/views/comment.html',
    scope: {
      commentItem: '=',
      commentTotal: '=',
    },
    replace: true,
  };
});
