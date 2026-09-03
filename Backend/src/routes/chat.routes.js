import { Router } from "express";
import { 
      sendMessage,
      getChats,
      getMessages,
      deleteChat,
      renameChat,
      clearAllChats,
} from "../controllers/chat.controller.js";

import {authUser} from "../middleware/auth.middleware.js"



const chatRouter = Router();

chatRouter.post("/message", authUser, sendMessage)

chatRouter.get("/", authUser, getChats)


chatRouter.delete("/clear", authUser, clearAllChats);

chatRouter.get("/:chatId/messages", authUser, getMessages)

chatRouter.delete("/delete/:chatId", authUser, deleteChat);


chatRouter.patch("/rename/:chatId", authUser, renameChat);


export default chatRouter;