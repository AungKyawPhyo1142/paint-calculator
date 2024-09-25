import React from "react";

interface Props {
  value: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
}

const NumericInput: React.FC<Props> = ({ value, setValue }) => {
  const handleDecrement = () => {
    setValue((prev) => (parseFloat(prev) - 1).toFixed(2));
  };

  const handleIncrement = () => {
    setValue((prev) => (parseFloat(prev) + 1).toFixed(2));
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    setValue(newValue);
  };

  const handleBlur = () => {
    setValue((prev) => (parseFloat(prev) || 0).toFixed(2));
  };

  return (
    <div className="border border-[#E3E7E9] rounded-[4px] h-9 py-3 w-full flex items-center justify-between px-4">
      <button
        className="text-3xl flex items-center justify-center"
        onClick={handleDecrement}
      >
        -
      </button>
      <input
        className=" w-full mx-4 border-l border-r border-[#E3E7E9] ps-5 text-lg focus:outline-none"
        type="text"
        value={value}
        onChange={handleChange}
        onBlur={handleBlur}
      />
      <button
        className="text-2xl flex items-center justify-center"
        onClick={handleIncrement}
      >
        +
      </button>
    </div>
  );
};

export default NumericInput;
