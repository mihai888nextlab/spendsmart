"use client";

import { useUser } from "@/app/Hooks/UserContext";
import ModalTemplate from "./ModalTemplate";
import { deleteIncome, getIncomes } from "@/app/api/income/income";
import { Income } from "@/app/types";

interface Props {
  onClose: () => void;
  income?: Income;
}

export default function DeleteIncomeModal(props: Props) {
  const user = useUser();

  const handleDelete = async () => {
    user.setLoading(true);

    if (!props.income) {
      return;
    }
    await deleteIncome(props.income?._id);

    let incomeData = await getIncomes(user.user._id);

    if (incomeData == null) {
      return;
    }

    user.setIncomeData(JSON.parse(incomeData));
    user.setLoading(false);
  };

  return (
    <ModalTemplate
      title="Delete income source"
      inputs={[]}
      onClose={props.onClose}
      onSave={handleDelete}
      submitText="Delete"
      invertedSubmitButton
    >
      <p>Are you sure you want to delete this income source?</p>
    </ModalTemplate>
  );
}
