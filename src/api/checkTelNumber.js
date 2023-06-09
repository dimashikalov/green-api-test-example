import axios from "axios";

export const checkTelNumber = async (
  idInstance,
  apiTokenInstance,
  telNumber
) => {
  let url = `https://api.green-api.com/waInstance${idInstance}/CheckWhatsapp/${apiTokenInstance}`;
  let raw = JSON.stringify({
    phoneNumber: Number(telNumber),
  });

  try {
    const responce = await axios.post(url, raw, {
      headers: {
        "Content-Type": "application/json",
      },
    });

    return responce.data.existsWhatsapp;
  } catch (error) {
    console.log("errror", error);
  }
};
