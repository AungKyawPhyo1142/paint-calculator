import React, { useState } from "react";
import { Range } from "react-range";

interface Props {
  values: number[];
  setValues: React.Dispatch<React.SetStateAction<number[]>>;
}

const RangeSlider: React.FC<Props> = ({ values, setValues }) => {
  const [value, setValue] = useState(values);

  //   const [value, setValue] = useState([3]); // Initial value set to 3
  const step = 1;
  const min = 0;
  const max = 5;

  return (
    <div className="w-full flex flex-col items-center  px-1">
      <Range
        step={step}
        min={min}
        max={max}
        values={value}
        onChange={(values) => {
          setValue(values);
          setValues(values);
        }}
        renderTrack={({ props, children }) => (
          <div {...props} className="relative w-full h-6">
            {/* Full track (gray background) */}
            <div className="absolute top-0 left-0 w-full h-[2px] bg-gray-300 " />

            {/* Filled part (black up to the current value) */}
            <div
              className="absolute top-0 left-0 h-[2px] bg-black "
              style={{ width: `${((value[0] - min) / (max - min)) * 100}%` }}
            />

            {/* Custom ticks and numbers */}
            <div className="absolute inset-0 flex justify-between">
              {Array.from({ length: max - min + 1 }, (_, i) => {
                const positionPercentage = ((i) / (max - min)) * 100; // Calculate position percentage
                return (
                  <div key={i} className="relative flex flex-col items-center">
                    {/* Vertical line */}
                    <div
                      className="absolute bottom-4 w-px h-3 bg-gray-300"
                      style={{ left: `${positionPercentage}%` }}
                    ></div>
                    {/* Number below tick mark */}
                    <span className="mt-2 text-sm">{min + i}</span>
                  </div>
                );
              })}
            </div>

            {children}
          </div>
        )}
        renderThumb={({ props }) => (
          <div
            {...props}
            className="relative flex items-center justify-center cursor-pointer"
          >
            {/* Tooltip */}
            <div className="absolute -top-10 transform -translate-x-1/5 px-2.5 py-1 text-xs text-white bg-gray-700 rounded">
              {value[0]}
            </div>
            {/* Triangle thumb */}

            <div className="w-0 h-0 border-l-[10px] border-r-[10px] border-transparent border-t-[10px] border-t-black rotate-180 -translate-y-2.5 ring-0 appearance-none focus:ring-0"></div>
          </div>
        )}
      />
    </div>
  );
};

export default RangeSlider;
