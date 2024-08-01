"use client";

import { Income } from "@/app/types";
import ModalTemplate from "./ModalTemplate";
import { useUser } from "@/app/Hooks/UserContext";
import { getIncomes, updateIncome } from "@/app/api/income/income";

interface Props {
  onClose: () => void;
  income?: Income;
}

export default function EditIncomeModal(props: Props) {
  const user = useUser();

  const handleEdit = async (formData: FormData) => {
    user.setLoading(true);

    const incomeSource = formData.get("Income source") as string;
    const incomeAmount = Number(formData.get("Income amount") as string);
    const dateReceived = new Date(formData.get("Date received") as string);
    const frequency = formData.get("Frequency") as string;
    const incomeDescription = formData.get("Income description") as string;

    if (!props.income) {
      return;
    }

    await updateIncome(
      props.income?._id,
      incomeSource,
      incomeDescription,
      incomeAmount,
      dateReceived,
      frequency,
      user.user._id
    );

    let incomeData = await getIncomes(user.user._id);

    if (incomeData == null) {
      return;
    }

    user.setIncomeData(JSON.parse(incomeData));
    user.setLoading(false);
  };
  return (
    <ModalTemplate
      title="Edit income source"
      inputs={[
        {
          inputName: "Income source",
          inputType: "text",
          placeholder: "Enter income source",
          size: "sm",
          defaultValue: props.income?.source,
        },
        {
          inputName: "Income amount",
          inputType: "number",
          placeholder: "Enter income amount",
          size: "sm",
          defaultValue: props.income?.amount,
        },
        {
          inputName: "Date received",
          inputType: "date",
          placeholder: "Enter date received",
          size: "sm",
          defaultValue: props.income?.date_received.toString(),
        },
        {
          inputName: "Frequency",
          inputType: "select",
          options: ["Regular", "Irregular"],
          placeholder: "Enter frequency",
          size: "sm",
          defaultValue: props.income?.frequency,
        },
        {
          inputName: "Income description",
          inputType: "text",
          placeholder: "Enter income description",
          size: "lg",
          defaultValue: props.income?.description,
        },
      ]}
      onClose={props.onClose}
      onSave={handleEdit}
    />
  );
}
