import axios from "axios";

export const sendMessageInWhatsUpp = async (
  idInstance,
  apiTokenInstance,
  chatId,
  message
) => {
  let url = `https://api.green-api.com/waInstance${idInstance}/SendMessage/${apiTokenInstance}`;

  let raw = JSON.stringify({
    chatId: chatId,
    message: message,
  });

  try {
    const responce = await axios.post(url, raw, {
      headers: {
        "Content-Type": "application/json",
      },
    });

    console.log("resp", responce.data);
  } catch (error) {
    console.log("errror", error);
  }
};
