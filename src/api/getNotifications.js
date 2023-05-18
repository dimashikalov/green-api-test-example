import axios from "axios";

export const getNotifications = async (idInstance, apiTokenInstance) => {
  let url = `https://api.green-api.com/waInstance${idInstance}/ReceiveNotification/${apiTokenInstance}`;
  try {
    const responce = await axios.get(url);

    return responce.data;
  } catch (error) {
    console.log("error", error);
  }
};
