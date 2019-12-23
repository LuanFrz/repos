const saveDocumentAPI = (file, parentId) =>
  new Promise((resolve, reject) => {
    const documentPack = {
      description: file.name,
      parentId,
      attachments: [
        {
          fileName: file.name,
        },
      ],
    };

    fetch(window.location.origin + '/api/public/ecm/document/createDocument', {
      method: 'POST',
      redirect: 'follow',
      headers: new Headers({
        'Content-Type': 'application/json; charset=UTF-8',
      }),
      body: JSON.stringify(documentPack),
    })
      .then(response => response.json())
      .then(data => {
        resolve(data);
      })
      .catch(error => {
        reject(error);
      });
  });
