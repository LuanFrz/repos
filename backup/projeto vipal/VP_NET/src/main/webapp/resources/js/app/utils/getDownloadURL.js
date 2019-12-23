const getDownloadURL = (parentId) => new Promise((resolve, reject) => {
    fetch(window.location.origin + `/api/public/2.0/documents/getDownloadURL/${parentId}`, {
      method: 'GET',
      headers: new Headers({
        'Content-Type': 'application/json; charset=UTF-8',
      }),
    }).then(response => response.json()).then((data) => {
      resolve(data);
    }).catch((error) => {
      reject(error);
    });
  });
  