vipalnet.directive('ngCommentInComment', function(commentFactory, $compile) {
  const linkComment = (scope, elem, attrs) => {
    scope.itemCommentInComment.created_at = moment(
      scope.itemCommentInComment.created_at,
      'YYYY-MM-DD hh/mm/ss'
    ).format('DD/MM/YYYY hh:mm');
    scope.shiftClicked = false;

    let editComment = () => {
      commentFactory

        .editComment(scope.itemCommentInComment.id, scope.editedComment)
        .then(function() {
          scope.itemCommentInComment.comment = angular.copy(
            scope.editedComment
          );
          scope.editedComment = '';

          removeEditCommentInput();
        });
    };

    scope.inativeComment = () => {
      commentFactory
        .inativeComment(scope.itemCommentInComment.id)
        .then(function() {
          scope.itemCommentInComment.active = false;
          scope.commentTotal = parseInt(scope.commentTotal) - 1;
        });
    };

    let removeEditCommentInput = () => {
      const commentContainer = document.getElementById(
        `editCommentContainerInComment2${scope.itemCommentInComment.id}`
      );
      document.getElementById(
        `showCommentInComment2${scope.itemCommentInComment.id}`
      ).style.display = 'block';
      commentContainer.innerHTML = '';
    };

    scope.inputEditComment = () => {
      const component = `<form class="comment-form inline-items comment-form-vipal">
      <div class="post__author author vcard inline-items">
        <img src="/social/api/rest/social/image/profile/${WCMAPI.userLogin}/SMALL_PICTURE" alt="author" />

        <div class="form-group with-icon-right ">
          <textarea
            class="form-control commentPost"
            ng-model="editedComment"
            value="{{scope.itemCommentInComment.comment}}"
            id="editCommentInComment2${scope.itemCommentInComment.id}"
            placeholder="Comente ;)"
          ></textarea>
        </div>
      </div>

    </form>`;
      let compile = $compile(component);
      compile = compile(scope);

      const commentContainer = document.getElementById(
        `editCommentContainerInComment2${scope.itemCommentInComment.id}`
      );
      if (commentContainer.innerHTML === '') {
        commentContainer.append(compile[0]);
        document.getElementById(
          `showCommentInComment2${scope.itemCommentInComment.id}`
        ).style.display = 'none';

        const commnetElement = document.getElementById(
          `editCommentInComment2${scope.itemCommentInComment.id}`
        );
        scope.editedComment = scope.itemCommentInComment.comment;
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
    templateUrl: '/VP_NET/resources/js/app/views/commentInComment.html',
    scope: {
      itemCommentInComment: '=',
      commentTotal: '=',
    },
    replace: true,
  };
});
