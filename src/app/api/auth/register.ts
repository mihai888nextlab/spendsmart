"use server";

import connectDB from "@/app/dbConfig/config";
import { userModel } from "@/app/dbConfig/models";
import { setSession } from "../sessions";
import jwt from "jsonwebtoken";
import bcryptjs from "bcryptjs";
import { redirect } from "next/navigation";

connectDB();

export default async function register(
  _currentState: unknown,
  formData: FormData
) {
  const name = formData.get("name") as string;
  const email = formData.get("email") as string;
  const phoneNumber = formData.get("phoneNumber") as string;
  const address = formData.get("address") as string;
  const password = formData.get("password") as string;
  const repPassword = formData.get("repPassword") as string;

  if (
    !name ||
    !email ||
    !phoneNumber ||
    !address ||
    !password ||
    !repPassword
  ) {
    return "Please fill in all fields";
  }

  if (password !== repPassword) {
    return "Passwords do not match";
  }

  if (password.length < 8) {
    return "Password must be at least 8 characters";
  }

  let users = await userModel.find({ email });
  if (users.length) {
    return "User already exists";
  }

  users = await userModel.find({ phoneNumber });
  if (users.length) {
    return "Phone number already exists";
  }

  let encPass = bcryptjs.hashSync(password, 10);

  try {
    let usr = new userModel({
      fullName: name,
      email,
      phoneNumber,
      address,
      password: encPass,
    });

    await usr.save();

    let sessionData = {
      _id: usr._id,
      email: usr.email,
      password: usr.password,
    };

    const session = jwt.sign(sessionData, process.env.JWT_SECRET || "");
    setSession(session);
  } catch (error) {
    console.error(error);
    return "An error occurred";
  }

  redirect("/dashboard");
}
