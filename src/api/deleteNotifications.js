import axios from "axios";

export const deleteNotifications = async (
  idInstance,
  apiTokenInstance,
  receiptId
) => {
  let url = `https://api.green-api.com/waInstance${idInstance}/DeleteNotification/${apiTokenInstance}/${receiptId}`;
  try {
    const responce = await axios.delete(url);

    return responce.data;
  } catch (error) {
    console.log("error", error);
  }
};
