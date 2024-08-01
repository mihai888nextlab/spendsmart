"use client";

import { addIncome, getIncomes } from "@/app/api/income/income";
import ModalTemplate from "./ModalTemplate";
import { useUser } from "@/app/Hooks/UserContext";

interface Props {
  onClose: () => void;
}

export default function AddIncomeModal(props: Props) {
  const user = useUser();

  const handleSave = async (formData: FormData) => {
    user.setLoading(true);

    const incomeSource = formData.get("Income source") as string;
    const incomeAmount = Number(formData.get("Income amount") as string);
    const dateReceived = new Date(formData.get("Date received") as string);
    const frequency = formData.get("Frequency") as string;
    const incomeDescription = formData.get("Income description") as string;

    await addIncome(
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
      title="Add income source"
      inputs={[
        {
          inputName: "Income source",
          inputType: "text",
          placeholder: "Enter income source",
          size: "sm",
        },
        {
          inputName: "Income amount",
          inputType: "number",
          placeholder: "Enter income amount",
          size: "sm",
        },
        {
          inputName: "Date received",
          inputType: "date",
          placeholder: "Enter date received",
          size: "sm",
        },
        {
          inputName: "Frequency",
          inputType: "select",
          options: ["Regular", "Irregular"],
          placeholder: "Enter frequency",
          size: "sm",
        },
        {
          inputName: "Income description",
          inputType: "text",
          placeholder: "Enter income description",
          size: "lg",
        },
      ]}
      onClose={props.onClose}
      onSave={handleSave}
    />
  );
}
