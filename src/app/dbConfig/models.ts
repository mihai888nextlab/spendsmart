import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  fullName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  phoneNumber: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
});

const incomeSchema = new mongoose.Schema({
  source: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: false,
  },
  amount: {
    type: Number,
    required: true,
  },
  date_received: {
    type: Date,
    required: true,
  },
  frequency: {
    type: String,
    required: true,
  },
  uid: {
    type: String,
    required: true,
  },
});

const userModel =
  mongoose.models.spendsmart_users ||
  mongoose.model("spendsmart_users", userSchema);
const incomeModel =
  mongoose.models.spendsmart_incomes ||
  mongoose.model("spendsmart_incomes", incomeSchema);

export { userModel, incomeModel };
