"use server";

import connectDB from "@/app/dbConfig/config";

connectDB();

export async function addIncome() {
  console.log("addIncome");
}
