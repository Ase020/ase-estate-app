import bcrypt from "bcrypt";

import prisma from "../lib/prisma.js";

export const getUsers = async (req, res) => {
  try {
    const users = await prisma.user.findMany();
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ message: "Failed to get users!", error });
  }
};

export const getUser = async (req, res) => {
  const id = req.params.id;
  try {
    const user = await prisma.user.findUnique({
      where: { id },
    });
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ message: "Failed to get a user!", error });
  }
};

export const updateUser = async (req, res) => {
  const id = req.params.id;
  const tokenId = req.userId;
  const { password, avatar, ...userInfo } = req.body;

  if (id !== tokenId) {
    return res.status(403).json({ message: "Not Authorized!" });
  }

  let updatedPassword = null;

  try {
    if (password) {
      updatedPassword = await bcrypt.hash(password, 12);
    }
    const updatedUser = await prisma.user.update({
      where: { id },
      data: {
        ...userInfo,
        ...(updatedPassword && { password: updatedPassword }),
        ...(avatar && { avatar }),
      },
    });

    res.status(200).json(users);
    res.status(200).json(updatedUser);
  } catch (error) {
    res.status(500).json({ message: "Failed to update user!", error });
  }
};

export const deleteUser = async (req, res) => {
  const id = req.params.id;
  const tokenId = req.userId;

  try {
    if (id !== tokenId) {
      return res.status(403).json({ message: "Not Authorized!" });
    }

    await prisma.user.delete({
      where: { id },
    });

    res.status(200).json({ message: "User deleted sucessfully!" });
  } catch (error) {
    res.status(500).json({ message: "Failed to delete user!", error });
  }
};
