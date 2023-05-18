import axios from "axios";

export const getMessagesInChat = async (
  idInstance,
  apiTokenInstance,
  chatId
) => {
  let url = `https://api.green-api.com/waInstance${idInstance}/GetChatHistory/${apiTokenInstance}`;

  let raw = JSON.stringify({
    chatId,
    count: 100,
  });

  try {
    const responce = await axios.post(url, raw, {
      headers: {
        "Content-Type": "application/json",
      },
    });

    return responce.data;
  } catch (error) {}
};
