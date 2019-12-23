vipalnet.directive('ngReaction', function(reactionFactory, $timeout) {
  const linkReaction = (scope, elem, attrs, ctrl) => {
    const selectImage = () => {
      if (
        !scope.reaction[0] ||
        parseInt(scope.reaction[0].creator) !== vipal.idUser
      ) {
        scope.userReaction = '/VP_NET/resources/images/icon-chat27.png';
        scope.userReacted = false;
      } else {
        scope.userReacted = true;
        switch (scope.reaction[0].reaction) {
          case 1:
            scope.userReaction = '/VP_NET/resources/images/icon-chat13.png';
            break;
          case 2:
            scope.userReaction = '/VP_NET/resources/images/icon-chat15.png';
            break;
          case 3:
            scope.userReaction = '/VP_NET/resources/images/icon-chat9.png';
            break;
          case 4:
            scope.userReaction = '/VP_NET/resources/images/icon-chat4.png';
            break;
          case 5:
            scope.userReaction = '/VP_NET/resources/images/icon-chat6.png';
            break;
          case 6:
            scope.userReaction = '/VP_NET/resources/images/icon-chat26.png';
            break;
          case 7:
            scope.userReaction = '/VP_NET/resources/images/icon-chat27.png';
            break;
        }
      }
    };

    selectImage();

    const updateReaction = reactionType => {
      $(`#reaction-${scope.place}-${scope.id}`).popover('hide');
      reactionFactory
        .createreaction(scope.place, scope.id, reactionType)
        .then(function(response) {
          if (
            scope.reaction[0] &&
            parseInt(scope.reaction[0].creator) === vipal.idUser
          ) {
            scope.reaction[0] = response.data.content;
          } else {
            scope.reaction.unshift(response.data.content);
            scope.reactionCount++;
          }
          selectImage();
        });
    };

    const removeReaction = reactionType => {
      $(`#reaction-${scope.place}-${scope.id}`).popover('hide');
      reactionFactory
        .removereaction(scope.place, scope.id, reactionType)
        .then(function(response) {
          scope.reaction.splice(0, 1);
          scope.reactionCount--;
          selectImage();
        });
    };

    $timeout(function() {
      $(`#reaction-${scope.place}-${scope.id}`).popover({
        html: true,
        placement: 'top',
        trigger: 'click',
        content: `
        <div class="choose-reaction reactionVipal">
          <ul>
            <li>
              <a >
                <img
                  src="/VP_NET/resources/images/icon-chat13.png"
                  alt="icon"
                  data-toggle="tooltip"
                  data-placement="top"
                  data-original-title="LOL"
                  id="LOL-${scope.place}-${scope.id}"
                />
              </a>
            </li>
            <li>
              <a>
                <img
                  src="/VP_NET/resources/images/icon-chat15.png"
                  alt="icon"
                  data-toggle="tooltip"
                  data-placement="top"
                  data-original-title="Amazed"
                  id="Amazed-${scope.place}-${scope.id}"
                />
              </a>
            </li>
            <li>
              <a>
                <img
                  src="/VP_NET/resources/images/icon-chat9.png"
                  alt="icon"
                  data-toggle="tooltip"
                  data-placement="top"
                  data-original-title="ANGER"
                  style="filter: grayscale(0%);"
                  id="ANGER-${scope.place}-${scope.id}"
                />
              </a>
            </li>
            <li>
              <a>
                <img
                  src="/VP_NET/resources/images/icon-chat4.png"
                  alt="icon"
                  data-toggle="tooltip"
                  data-placement="top"
                  data-original-title="joy"
                  id="joy-${scope.place}-${scope.id}"
                />
              </a>
            </li>
            <li>
              <a>
                <img
                  src="/VP_NET/resources/images/icon-chat6.png"
                  alt="icon"
                  data-toggle="tooltip"
                  data-placement="top"
                  data-original-title="BAD"
                  id="BAD-${scope.place}-${scope.id}"
                />
              </a>
            </li>
            <li>
              <a>
                <img
                  src="/VP_NET/resources/images/icon-chat26.png"
                  alt="icon"
                  data-toggle="tooltip"
                  data-placement="top"
                  data-original-title="LIKE"
                  id="LIKE-${scope.place}-${scope.id}"
                />
              </a>
            </li>
            <li>
              <a>
                <img
                  src="/VP_NET/resources/images/icon-chat27.png"
                  alt="icon"
                  data-toggle="tooltip"
                  data-placement="top"
                  data-original-title="COOL"
                  id="COOL-${scope.place}-${scope.id}"
                />
              </a>
            </li>
          </ul>
        </div>
        `,
      });
      $(`#reaction-${scope.place}-${scope.id}`).on(
        'inserted.bs.popover',
        function() {
          document
            .getElementById(`LOL-${scope.place}-${scope.id}`)
            .addEventListener('click', function() {
              let reactionType = 1;
              if (
                (scope.userReacted &&
                  parseInt(scope.reaction[0].reaction) !== reactionType) ||
                !scope.userReacted
              ) {
                updateReaction(reactionType);
              } else {
                removeReaction(reactionType);
              }
            });

          document
            .getElementById(`Amazed-${scope.place}-${scope.id}`)
            .addEventListener('click', function() {
              let reactionType = 2;
              if (
                (scope.userReacted &&
                  parseInt(scope.reaction[0].reaction) !== reactionType) ||
                !scope.userReacted
              ) {
                updateReaction(reactionType);
              } else {
                removeReaction(reactionType);
              }
            });

          document
            .getElementById(`ANGER-${scope.place}-${scope.id}`)
            .addEventListener('click', function() {
              let reactionType = 3;
              if (
                (scope.userReacted &&
                  parseInt(scope.reaction[0].reaction) !== reactionType) ||
                !scope.userReacted
              ) {
                updateReaction(reactionType);
              } else {
                removeReaction(reactionType);
              }
            });
          document
            .getElementById(`joy-${scope.place}-${scope.id}`)
            .addEventListener('click', function() {
              let reactionType = 4;
              if (
                (scope.userReacted &&
                  parseInt(scope.reaction[0].reaction) !== reactionType) ||
                !scope.userReacted
              ) {
                updateReaction(reactionType);
              } else {
                removeReaction(reactionType);
              }
            });
          document
            .getElementById(`BAD-${scope.place}-${scope.id}`)
            .addEventListener('click', function() {
              let reactionType = 5;
              if (
                (scope.userReacted &&
                  parseInt(scope.reaction[0].reaction) !== reactionType) ||
                !scope.userReacted
              ) {
                updateReaction(reactionType);
              } else {
                removeReaction(reactionType);
              }
            });
          document
            .getElementById(`LIKE-${scope.place}-${scope.id}`)
            .addEventListener('click', function() {
              let reactionType = 6;
              if (
                (scope.userReacted &&
                  parseInt(scope.reaction[0].reaction) !== reactionType) ||
                !scope.userReacted
              ) {
                updateReaction(reactionType);
              } else {
                removeReaction(reactionType);
              }
            });
          document
            .getElementById(`COOL-${scope.place}-${scope.id}`)
            .addEventListener('click', function() {
              let reactionType = 7;
              if (
                (scope.userReacted &&
                  parseInt(scope.reaction[0].reaction) !== reactionType) ||
                !scope.userReacted
              ) {
                updateReaction(reactionType);
              } else {
                removeReaction(reactionType);
              }
            });
        }
      );
    });
  };

  return {
    link: linkReaction,
    restrict: 'A',
    templateUrl: '/VP_NET/resources/js/app/views/reaction.html',
    scope: {
      id: '@',
      place: '@',
      reaction: '=',
      reactionCount: '=',
    },
  };
});
