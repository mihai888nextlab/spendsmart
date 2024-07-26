"use server";

import connectDB from "@/app/dbConfig/config";
import mongoose from "mongoose";
import { getSession, removeSession } from "../sessions";
import jwt from "jsonwebtoken";
import { userModel } from "@/app/dbConfig/models";

connectDB();

export default async function getUserData() {
  let session = await getSession();

  if (!session) {
    await removeSession();
    return null;
  }

  let userData = jwt.verify(session, process.env.JWT_SECRET || "");

  console.log(userData);

  if (!userData) {
    await removeSession();
    return null;
  }

  let modUserData = userData as {
    _id: string;
    email: string;
    password: string;
  };

  let user = await userModel.findOne({
    _id: modUserData._id,
    email: modUserData.email,
    password: modUserData.password,
  });

  if (!user) {
    await removeSession();
    return null;
  }

  return JSON.stringify(user);
}
