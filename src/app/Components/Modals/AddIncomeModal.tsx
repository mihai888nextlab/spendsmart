import ModalTemplate from "./ModalTemplate";

interface Props {
  onClose: () => void;
}

export default function AddIncomeModal(props: Props) {
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
    />
  );
}
