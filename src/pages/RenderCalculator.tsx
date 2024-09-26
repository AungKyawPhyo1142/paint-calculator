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
          <h1 className="text-xl">ความยาว</h1>
          <div className="flex gap-x-3 w-full">
            <NumericInput value={length} setValue={setLength} />
            <span className="text-gray-500 mt-0.5 text-lg font-[500]">m</span>
          </div>
        </div>
        {selectedType !== "wholeRoomWithCel" && (
          <div className="flex flex-col gap-y-3">
            <h1 className="text-xl">ความสูง</h1>
            <div className="flex gap-x-3 w-full">
              <NumericInput value={height} setValue={setHeight} />
              <span className="text-gray-500 mt-0.5 text-lg font-[500]">m</span>
            </div>
          </div>
        )}
        {(selectedType === "wholeRoom" || selectedType==='wholeRoomWithCel') && (
          <div className="flex flex-col gap-y-3">
            <h1 className="text-xl">ความกว้าง</h1>
            <div className="flex gap-x-3 w-full">
              <NumericInput value={width} setValue={setWidth} />
              <span className="text-gray-500 mt-0.5 text-lg font-[500]">m</span>
            </div>
          </div>
        )}
        {selectedType !== "wholeRoomWithCel" && (
          <>
            <div className="flex flex-col gap-y-10">
              <div className="flex gap-x-3 items-center">
                <h3 className="text-xl ">จำนวนประตูมาตรฐาน</h3>
                <a className="doors-tooltip">
                  <InfoIcon className="w-5 h-5" />
                </a>
              </div>
              <Tooltip anchorSelect=".doors-tooltip" place="right">
                <p>ประตูมาตรฐานมีขนาดประมาณ 1.6 ตารางเมตร</p>
              </Tooltip>
              <RangeSlider values={doors} setValues={setDoors} />
            </div>
            <div className="flex flex-col gap-y-10">
              <div className="flex gap-x-3 items-center">
                <h3 className="text-xl ">จำนวนหน้าต่างมาตรฐาน</h3>
                <a className="windows-tooltip">
                  <InfoIcon className="w-5 h-5" />
                </a>
              </div>
              <Tooltip anchorSelect=".windows-tooltip" place="right">
                <p>หน้าต่างมาตรฐานมีขนาดประมาณ 0.6 ตารางเมตร</p>
              </Tooltip>
              <RangeSlider values={windows} setValues={setWindows} />
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default RenderCalculator;
