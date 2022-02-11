import {
    createMessage,
    deleteMessage,
    getAllMessages,
    getMessage,
    updateMessage,
  } from "../../prisma/message";
  
  export default async function handle(req, res) {
    try {
      switch (req.method) {
        case "GET":
          if (req.query.sendToName) {
            const message = await getMessage(req.query.sendToName);
            return res.status(200).json(message);
          } else {
            // Otherwise, fetch all users
            const messages = await getAllMessages();
            return res.json(messages);
          }
  
        case "POST": {
          // Create a new message
          const { sendToName, message, cardColor } = req.body;
          const pMessage = await createMessage(sendToName, message, cardColor);
          return res.json(pMessage);
        }
  
        case "PUT": {
          // Update an existing message
          const { id, ...updateData } = req.body;
          const message = await updateMessage(id, updateData);
          return res.json(message);
        }
  
        case "DELETE": {
          // Delete an existing user
          const { id } = req.body;
          const message = await deleteMessage(id);
          return res.json(message);
        }
  
        default:
          break;
      }
    } catch (error) {
      return res.status(500).json({ ...error, message: error.message });
    }
  }
  