import { addIncome } from "@/app/api/income/income";
import ModalTemplate from "./ModalTemplate";

interface Props {
  onClose: () => void;
}

export default function AddIncomeModal(props: Props) {
  const handleSave = async (formData: FormData) => {
    const incomeSource = formData.get("Income source") as string;
    const incomeAmount = Number(formData.get("Income amount") as string);
    const dateReceived = new Date(formData.get("Date received") as string);
    const frequency = formData.get("Frequency") as string;
    const incomeDescription = formData.get("Income description") as string;

    await addIncome(
      incomeSource,
      incomeAmount,
      dateReceived,
      frequency,
      incomeDescription
    );
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
