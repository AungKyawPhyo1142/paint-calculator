import React from "react";
import NumericInput from "../components/NumericInput";
import RangeSlider from "../components/RangeSlider";
import { Tooltip } from "react-tooltip";
import InfoIcon from "../components/InfoIcon";

interface Props {
  selectedType: string;
  length: string;
  setLength: React.Dispatch<React.SetStateAction<string>>;
  height: string;
  setHeight: React.Dispatch<React.SetStateAction<string>>;
  width: string;
  setWidth: React.Dispatch<React.SetStateAction<string>>;
  doors: number[];
  setDoors: React.Dispatch<React.SetStateAction<number[]>>;
  windows: number[];
  setWindows: React.Dispatch<React.SetStateAction<number[]>>;
}
const RenderCalculator: React.FC<Props> = ({
  selectedType,
  length,
  setLength,
  height,
  setHeight,
  width,
  setWidth,
  doors,
  setDoors,
  windows,
  setWindows,
}) => {
  return (
    <div className=" mt-8">
      <div className="flex flex-col gap-y-7">
        <div className="flex flex-col gap-y-3">
          <h1 className="text-xl">Length</h1>
          <div className="flex gap-x-3 w-full">
            <NumericInput value={length} setValue={setLength} />
            <span className="text-gray-500 mt-0.5 text-lg font-[500]">m</span>
          </div>
        </div>
        <div className="flex flex-col gap-y-3">
          <h1 className="text-xl">Height</h1>
          <div className="flex gap-x-3 w-full">
            <NumericInput value={height} setValue={setHeight} />
            <span className="text-gray-500 mt-0.5 text-lg font-[500]">m</span>
          </div>
        </div>
        {selectedType === "wholeRoom" && (
          <div className="flex flex-col gap-y-3">
            <h1 className="text-xl">Width</h1>
            <div className="flex gap-x-3 w-full">
              <NumericInput value={width} setValue={setWidth} />
              <span className="text-gray-500 mt-0.5 text-lg font-[500]">m</span>
            </div>
          </div>
        )}
        <div className="flex flex-col gap-y-10">
          <div className="flex gap-x-3 items-center">
            <h3 className="text-xl ">Number of standard doors</h3>
            <a className="doors-tooltip">
              <InfoIcon className="w-5 h-5 mt-[3px]" />
            </a>
          </div>
          <Tooltip anchorSelect=".doors-tooltip" place="right">
            <p>Include more doors if you've got double doors or open arches</p>
          </Tooltip>
          <RangeSlider values={doors} setValues={setDoors} />
        </div>
        <div className="flex flex-col gap-y-10">
          <div className="flex gap-x-3 items-center">
            <h3 className="text-xl ">Number of standard windows</h3>
            <a className="windows-tooltip">
              <InfoIcon className="w-5 h-5 mt-[3px]" />
            </a>
          </div>
          <Tooltip anchorSelect=".windows-tooltip" place="right">
            <p>
              Include more windows if you've got bay windows or large patio
              doors
            </p>
          </Tooltip>
          <RangeSlider values={windows} setValues={setWindows} />
        </div>
      </div>
    </div>
  );
};

export default RenderCalculator;
