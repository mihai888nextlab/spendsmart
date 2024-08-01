"use server";

import connectDB from "@/app/dbConfig/config";
import { incomeModel } from "@/app/dbConfig/models";

connectDB();

export async function addIncome(
  source: string,
  description: string,
  amount: number,
  date_received: Date,
  frequency: string,
  uid: string
) {
  try {
    let income = new incomeModel({
      source,
      description,
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
    return JSON.stringify(incomes);
  } catch (error) {
    console.log(error);
    return null;
  }
}

export async function deleteIncome(id: string) {
  try {
    await incomeModel.findByIdAndDelete(id);
  } catch (error) {
    console.log(error);
  }
}

export async function updateIncome(
  _id: string,
  source: string,
  description: string,
  amount: number,
  date_received: Date,
  frequency: string,
  uid: string
) {
  try {
    await incomeModel.findByIdAndUpdate(_id, {
      source,
      description,
      amount,
      date_received,
      frequency,
      uid,
    });
  } catch (error) {
    console.log(error);
  }
}
