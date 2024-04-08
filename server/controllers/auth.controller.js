import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

import prisma from "../lib/prisma.js";

export const register = async (req, res) => {
  const { username, email, password } = req.body;

  try {
    //   hash password
    const hashedPassword = await bcrypt.hash(password, 12);

    // create a user and save it to db
    const newUser = await prisma.user.create({
      data: {
        username,
        email,
        password: hashedPassword,
      },
    });
    res
      .status(201)
      .json({ message: "User created sucessfully!", user: newUser });
    //   res.send(newUser);
  } catch (error) {
    res.status(500).json({ message: "Failed to create a user!", error });
  }
};

export const login = async (req, res) => {
  const { username, password } = req.body;

  try {
    // check if the user exists
    const user = await prisma.user.findUnique({
      where: { username },
    });

    if (!user) return res.status(400).json({ message: "Invalid Credentials!" });

    // Check if password is correct
    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid)
      return res.status(401).json({ message: "Invalid Credentials!" });

    // Generate  cookie token and send to the user
    const age = 1000 * 60 * 60 * 24 * 7;

    const token = jwt.sign(
      { id: user.id, isAdmin: true },
      process.env.JWT_SECRET_KEY,
      {
        expiresIn: age,
      }
    );

    const { password: userPassword, ...userInfo } = user;

    res
      .cookie("token", token, {
        httpOnly: true,
        //   secure: true,
        maxAge: age,
      })
      .status(200)
      .json({ message: "Login successfully!", userData: userInfo });
  } catch (error) {
    res.status(500).json({ message: "Username/Password Incorrect!", error });
  }
};

export const logout = (req, res) => {
  res
    .clearCookie("token")
    .status(200)
    .json({ message: "User logged out successfully!" });
};
