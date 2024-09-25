import React from "react";
import clsx from "clsx";

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  className?: string;
  icon?: string;
  id?: string;
  label?: string;
}

const RadioBox: React.FC<Props> = (props) => {
  const { id, label, ...rest } = props;

  return (
    <div className="flex items-center pl-1">
      <input
        {...rest}
        id={id}
        type='radio'
        className={clsx(
          "h-4 w-4 shrink-0 cursor-pointer appearance-none rounded-full border-2 border-solid border-neutral-400 checked:border-transparent checked:bg-[#013149] checked:ring-2 checked:ring-neutral-300 ring-offset-1 focus:outline-none "
        )}
      />
      <label
        htmlFor={id}
        className="ml-3 cursor-pointer text-md font-[500] leading-relaxed "
      >
        {label}
      </label>
    </div>
  );
};

export default RadioBox;
