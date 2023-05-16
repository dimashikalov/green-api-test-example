export const getAuthStatus = (idInstance, apiTokenInstance) => {
  let requestOptions = {
    method: "GET",
    headers: {},
    credentials: "include",
    redirect: "follow",
  };

  return fetch(
    `https://api.green-api.com/waInstance${idInstance}/getStateInstance/${apiTokenInstance}`,
    requestOptions
  )
    .then((response) => response.text())
    .then((result) => console.log(result))
    .catch((error) => console.log("error", error));
};
