const uploadToGEDAndReturnItsDownloadURL = (file, parentId) =>
  new Promise((resolve, reject) => {
    // Mostra loading
    FLUIGC.loading(window).show();

    // Upload no temp do fluig, necessário. (Equivalente a JQuery Fileupload)
    const data = new FormData();
    data.append('file', file);
    fetch('/ecm/upload', {
      method: 'POST',
      body: data,
    })
      .then(() => {
        saveDocumentAPI(file, parentId)
          .then(documentData => {
            // Pega downloadURL através da api de pegar downloadURL
            let parentIdDocument = documentData.content.id;
            getDownloadURL(documentData.content.id)
              .then(downloadURL => {
                FLUIGC.loading(window).hide();
                //Depois de ter carregado ele acaba o Loading..//
                resolve({
                  downloadURL,
                  parentIdDocument,
                });
              })
              .catch(error => {
                reject(error);
                FLUIGC.toast({
                  message:
                    'Houve um erro ao carregar o arquivo. Contate o suporte.',
                  type: 'danger',
                });
              });
          })
          .catch(error => {
            reject(error);
            FLUIGC.toast({
              message: 'Houve um erro ao salvar o arquivo. Contate o suporte.',
              type: 'danger',
            });
          });
      })
      .catch(error => {
        reject(error);
        FLUIGC.toast({
          message:
            'Houve um erro ao criar o documento no GED. Contate o suporte.',
          type: 'danger',
        });
      });
  });
