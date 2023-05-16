import whatsAppClient from "@green-api/whatsapp-api-client";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

const { idInstance, apiTokenInstance } = useContext(AuthContext);

export const restAPI = whatsAppClient.restAPI({
  idInstance: idInstance,
  apiTokenInstance: apiTokenInstance,
});
