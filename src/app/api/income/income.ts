"use server";

import connectDB from "@/app/dbConfig/config";
import { incomeModel } from "@/app/dbConfig/models";

connectDB();

export async function addIncome(
  source: string,
  amount: number,
  date_received: Date,
  frequency: string,
  uid: string
) {
  try {
    let income = new incomeModel({
      source,
      amount,
      date_received,
      frequency,
      uid,
    });

    await income.save();
  } catch (error) {
    console.log(error);
  }
}

export async function getIncomes(uid: string) {
  try {
    let incomes = await incomeModel.find({ uid });
    console.log(incomes);
    return incomes;
  } catch (error) {
    console.log(error);
    return null;
  }
}
