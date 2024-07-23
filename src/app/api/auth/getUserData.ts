"use server";

import connectDB from "@/app/dbConfig/config";
import mongoose from "mongoose";
import { getSession } from "../sessions";
import jwt from "jsonwebtoken";

connectDB();

export default async function getUserData() {
  let session = await getSession();

  if (!session) {
    return null;
  }

  let userData = jwt.verify(session, process.env.JWT_SECRET || "");

  console.log(userData);

  if (!userData) {
    return null;
  }

  //let user = await mongoose.models.userModel.findOne({ _id: userData._id });
}
