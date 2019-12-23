var vipal = SuperWidget.extend({

  server: "https://vipalnetdev-dot-apps-iv2.appspot.com",

  authentication: false,
  idUser: "",
  isAdmin: "",
  token: "",
  idToWork: 0,
  idFolderRaiz: 0,
  idMonthYear: 0,

  //método iniciado quando a widget é carregada
  init: function() {},

  //BIND de eventos
  bindings: {
    local: {
      execute: ["click_executeAction"]
    },
    global: {}
  },

  executeAction: function(htmlElement, event) {}
});
