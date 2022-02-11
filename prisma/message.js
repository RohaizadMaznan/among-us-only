import prisma from "./prisma";

// READ
export const getAllMessages = async () => {
  const messages = await prisma.message.findMany({});
  return messages;
};

export const getMessage = async (sendToName) => {
  const message = await prisma.message.findUnique({
    where: { sendToName },
  });
  return message;
};

// CREATE
export const createMessage = async (sendToName, message, cardColor) => {
  const res = await prisma.message.create({
    data: {
      sendToName,
      message,
      cardColor,
    },
  });
  return res;
};

// UPDATE
export const updateMessage = async (id, updateData) => {
  const message = await prisma.message.update({
    where: {
      id,
    },
    data: {
      ...updateData,
    },
  });
  return message;
};

// DELETE
export const deleteMessage = async (id) => {
  const message = await prisma.message.delete({
    where: {
      id,
    },
  });
  return message;
};
