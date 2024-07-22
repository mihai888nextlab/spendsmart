"use server";

import connectDB from "@/app/dbConfig/config";
import { userModel } from "@/app/dbConfig/models";
import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken";
import { setSession } from "../sessions";
import { redirect } from "next/navigation";

connectDB();

export default async function login(
  _currentState: unknown,
  formData: FormData
) {
  const email = formData.get("email") as string;
  const password = formData.get("password") as string;

  if (!email || !password) {
    return "Please fill in all fields";
  }

  try {
    let users = await userModel.find({ email });

    if (!users.length) {
      return "Email or password is incorrect";
    }

    const user = users[0];

    if (bcryptjs.compareSync(password, user.password)) {
      return "Email or password is incorrect";
    }

    let sessionData = {
      _id: user._id,
      email: user.email,
      password: user.password,
    };

    const session = jwt.sign(sessionData, process.env.JWT_SECRET || "");
    setSession(session);
  } catch (error) {
    return "An error occurred";
  }

  redirect("/dashboard");
}
