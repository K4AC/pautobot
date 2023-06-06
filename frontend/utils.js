export const openDocument = (document_id) => {
  fetch(
    "/api/default/documents/open_in_file_explorer?document_id=" + document_id,
    {
      method: "POST",
    }
  );
};

export const deleteDocument = (document_id, callbackSuccess, callbackError) => {
  fetch(`/api/default/documents/${document_id}`, {
    method: "DELETE",
  })
    .then(async (response) => {
      let data = await response.json();
      if (!response.ok) {
        const error = (data && data.message) || response.status;
        console.log(error);
        callbackError();
        return Promise.reject(error);
      }
      callbackSuccess();
    })
    .catch((error) => {
      console.error("There was an error!", error);
      callbackError();
    });
};
