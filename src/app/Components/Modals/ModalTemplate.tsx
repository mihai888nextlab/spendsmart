import { FormEvent } from "react";

interface Props {
  title: string;
  inputs: {
    inputName: string;
    inputType: string;
    options?: string[];
    placeholder: string;
    size: "sm" | "lg";
    defaultValue?: string | number;
  }[];
  onClose: () => void;
  onSave: (formData: FormData) => void;
  submitText?: string;
  invertedSubmitButton?: boolean;
  children?: React.ReactNode;
}

export default function ModalTemplate(props: Props) {
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);

    props.onSave(formData);
    props.onClose();
  };

  return (
    <div className="bg-gray-500 bg-opacity-80 top-0 left-0 right-0 bottom-0 fixed flex items-center justify-center z-50">
      <form
        onSubmit={handleSubmit}
        className="relative rounded-lg bg-white shadow w-screen max-w-2xl"
      >
        <div className="flex items-start justify-between rounded-t px-5 pt-5 border-b border-gray-200 !p-6">
          <h3 className="text-xl font-medium text-gray-900">
            <strong>{props.title}</strong>
          </h3>
          <button
            aria-label="Close"
            className="ml-auto inline-flex items-center rounded-lg bg-transparent p-1.5 text-sm text-gray-400 hover:bg-gray-200 hover:text-gray-900"
            type="button"
            onClick={props.onClose}
          >
            <svg
              stroke="currentColor"
              fill="none"
              strokeWidth="0"
              viewBox="0 0 24 24"
              aria-hidden="true"
              className="h-5 w-5"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              ></path>
            </svg>
          </button>
        </div>
        <div className="p-6">
          {props.children}
          <div>
            <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
              {props.inputs.map((input, i) => (
                <div
                  className={input.size == "lg" ? "lg:col-span-2" : ""}
                  key={i}
                >
                  <label className="text-sm font-medium text-gray-900">
                    {input.inputName}
                  </label>

                  {input.size == "lg" ? (
                    <textarea
                      name={input.inputName}
                      className="block w-full text-sm p-4 rounded-lg border disabled:cursor-not-allowed disabled:opacity-50 bg-gray-50 border-gray-300 text-gray-900 focus:border-blue-500 focus:ring-blue-500 mt-1"
                      placeholder={input.placeholder}
                      defaultValue={input.defaultValue}
                      rows={6}
                    ></textarea>
                  ) : (
                    <div className="flex mt-1">
                      <div className="relative w-full">
                        {input.inputType == "select" ? (
                          <select
                            name={input.inputName}
                            defaultValue={input.defaultValue}
                            className="block w-full border disabled:cursor-not-allowed disabled:opacity-50 bg-gray-50 border-gray-300 text-gray-900 focus:border-blue-500 focus:ring-blue-500 rounded-lg p-2.5 text-sm"
                          >
                            {input.options?.map((option, i) => (
                              <option key={i}>{option}</option>
                            ))}
                          </select>
                        ) : (
                          <input
                            name={input.inputName}
                            className="block w-full border disabled:cursor-not-allowed disabled:opacity-50 bg-gray-50 border-gray-300 text-gray-900 focus:border-blue-500 focus:ring-blue-500 rounded-lg p-2.5 text-sm"
                            placeholder={input.placeholder}
                            defaultValue={input.defaultValue}
                            type={input.inputType}
                          />
                        )}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="flex items-center space-x-2 rounded-b border-gray-200 p-6 border-t">
          <button
            className={
              "text-white focus:!ring-2 p-0 font-medium rounded-lg" +
              (props.invertedSubmitButton
                ? " bg-red-700 hover:bg-red-800 focus:ring-red-300"
                : " bg-blue-700 hover:bg-blue-800 focus:ring-blue-300")
            }
            type="submit"
          >
            <span className="flex items-center rounded-md text-sm px-3 py-2">
              {props.submitText ? props.submitText : props.title}
            </span>
          </button>
        </div>
      </form>
    </div>
  );
}
