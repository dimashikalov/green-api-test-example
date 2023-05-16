import axios from "axios";

export const getAuthStatus = async (idInstance, apiTokenInstance) => {
  let requestOptions = {
    method: "GET",
    headers: {},
    credentials: "include",
    redirect: "follow",
  };

  try {
    const responce = await axios.get(
      `https://api.green-api.com/waInstance${idInstance}/getStateInstance/${apiTokenInstance}`,
      requestOptions
    );
    let statusUser = responce.data.stateInstance;
    console.log("res", statusUser);
    return statusUser;
  } catch (error) {
    alert("Неправильный idInstance или apiTokenInstance");
  }
};

export const handlerStatus = (status) => {
  switch (status) {
    case "notAuthorized":
      return "Аккаунт не авторизован";

    case "blocked":
      return "Аккаунт забанен";
    case "sleepMode":
      return "Аккаунт ушел в спящий режим. Состояние возможно, когда выключен телефон.";
    case "starting ":
      return " Аккаунт в процессе запуска (сервисный режим). Происходит перезагрузка инстанса, сервера или инстанс в режиме обслуживания.";
    default:
      return;
  }
};
