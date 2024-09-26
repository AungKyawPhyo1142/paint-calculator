import { useEffect, useState } from "react";
import RadioBox from "./components/RadioBox";
import RenderCalculator from "./pages/RenderCalculator";
import InfoIcon from "./components/InfoIcon";
import { Tooltip } from "react-tooltip";

function App() {
  const [roomType, setRoomType] = useState<string>("singleWall");
  const [length, setLength] = useState<string>("0.00");
  const [height, setHeight] = useState<string>("0.00");
  const [width, setWidth] = useState<string>("0.00");
  const [doors, setDoors] = useState<number[]>([0]);
  const [windows, setWindows] = useState<number[]>([0]);
  const [area, setArea] = useState<string>("0.00");
  const [amountOfPrimer, setAmountOfPrimer] = useState<number>(0);
  const [amountOfPaint, setAmountOfPaint] = useState<number>(0);
  const [amountOfCeilingPaint, setAmountOfCeilingPaint] = useState<number>(0);

  const handleRoomTypeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setRoomType(e.target.value);
  };

  // standard window, door sizes
  const WINDOWS_WIDTH = 0.5;
  const WINDOWS_LENGTH = 1.2;
  const WINDOWS_AREA = WINDOWS_WIDTH * WINDOWS_LENGTH;
  const DOORS_WIDTH = 0.8;
  const DOORS_LENGTH = 2.0;
  const DOORS_AREA = DOORS_WIDTH * DOORS_LENGTH;

  const NUMBER_OF_TIMES_FOR_PRIMER = 2;
  const AREA_ONE_GALLON_OF_PRIMER_CAN_COVER = 40; // m^2
  const NUMBER_OF_TIMES_FOR_PAINT = 2;
  const AREA_ONE_GALLON_OF_PAINT_CAN_COVER = 40; // m^2
  const BUFFER = 1.15; //15% buffer

  // calculate total area for whole room
  useEffect(() => {
    let Rarea;
    if (roomType === "wholeRoom") {
      Rarea = (
        parseFloat(width) * parseFloat(height) * 2 +
        parseFloat(length) * parseFloat(height) * 2
      ).toFixed(2);

      Rarea = (
        parseFloat(Rarea) -
        DOORS_AREA * doors[0] -
        WINDOWS_AREA * windows[0]
      ).toFixed(2);
    } else if (roomType === "singleWall") {
      // single wall
      Rarea = (parseFloat(length) * parseFloat(height)).toFixed(2);

      Rarea = (
        parseFloat(Rarea) -
        DOORS_AREA * doors[0] -
        WINDOWS_AREA * windows[0]
      ).toFixed(2);
    } else {
      // whole room with ceiling
      Rarea = (parseFloat(width) * parseFloat(length)).toFixed(2);
    }

    // primer
    let primerAmt = (
      (parseFloat(Rarea) / AREA_ONE_GALLON_OF_PRIMER_CAN_COVER) *
      NUMBER_OF_TIMES_FOR_PRIMER
    ).toFixed(2);
    primerAmt = Math.ceil(parseFloat(primerAmt) * BUFFER).toFixed(2);

    // paint
    let paintAmt = (
      (parseFloat(Rarea) / AREA_ONE_GALLON_OF_PAINT_CAN_COVER) *
      NUMBER_OF_TIMES_FOR_PAINT
    ).toFixed(2);
    paintAmt = Math.ceil(parseFloat(paintAmt) * BUFFER).toFixed(2);

    // ceiling paint
    const ceilingPaint = (
      (parseFloat(Rarea) * NUMBER_OF_TIMES_FOR_PAINT * BUFFER) /
      AREA_ONE_GALLON_OF_PAINT_CAN_COVER
    ).toFixed(2);

    setArea(Rarea);
    setAmountOfPrimer(Math.ceil(parseFloat(primerAmt)));
    setAmountOfPaint(Math.ceil(parseFloat(paintAmt)));
    setAmountOfCeilingPaint(Math.ceil(parseFloat(ceilingPaint)));
  }, [
    length,
    height,
    width,
    roomType,
    doors,
    windows,
    DOORS_AREA,
    WINDOWS_AREA,
    area,
  ]);

  return (
    <>
      <div className=" min-h-screen w-full flex flex-col items-center justify-center font-noto-thai px-60 py-10">
        <div className=" px-10  w-full">
          <h1 className="text-[#013149] text-[55px] text-center athiti-regular">
            ต้องใช้สีเท่าไหร่ดี?
          </h1>
          <div className="mt-8">
            <h3 className="text-xl text-[#000]">กำลังทาสี...</h3>
            <div className="mt-3 flex gap-x-6 items-center">
              <div className="flex items-center gap-x-2">
                <RadioBox
                  name="roomType"
                  id="singleWall"
                  label="ผนังเดียว"
                  checked={roomType === "singleWall"}
                  onChange={handleRoomTypeChange}
                  value="singleWall"
                />
              </div>
              <div className="flex items-center gap-x-2">
                <RadioBox
                  name="roomType"
                  id="wholeRoom"
                  label="ทั้งห้อง"
                  checked={roomType === "wholeRoom"}
                  onChange={handleRoomTypeChange}
                  value="wholeRoom"
                />
              </div>
              <div className="flex items-center gap-x-2">
                <RadioBox
                  name="roomType"
                  id="wholeRoomWithCel"
                  label="ทั้งห้องรวมถึงเพดาน"
                  checked={roomType === "wholeRoomWithCel"}
                  onChange={handleRoomTypeChange}
                  value="wholeRoomWithCel"
                />
              </div>
            </div>
            <div className="mt-4">
              <RenderCalculator
                width={width}
                setWidth={setWidth}
                selectedType={roomType}
                length={length}
                setLength={setLength}
                height={height}
                setHeight={setHeight}
                doors={doors}
                setDoors={setDoors}
                windows={windows}
                setWindows={setWindows}
              />
            </div>
            <div className="mt-10 bg-[#f5f9fa] text-[#013149] w-full min-h-[200px] flex flex-col justify-between gap-y-5 p-5">
              <div className="flex flex-col gap-y-2">
                <div className="flex gap-x-2 items-center">
                  <span className="text-base">พื้นที่ผนัง...</span>
                  <a className="walls-tooltip">
                    <InfoIcon className="w-4 h-4 " />
                  </a>
                  <Tooltip anchorSelect=".walls-tooltip" place="right">
                    <p>
                      The total area of walls to paint, with windows and doors
                      removed
                    </p>
                  </Tooltip>
                </div>
                <h1 className="text-3xl font-[500]">
                  {area} m<sup>2</sup>
                </h1>
              </div>
              <div className="flex flex-col gap-y-2">
                <div className="flex gap-x-2 items-center">
                  <span className="text-base">
                    สำหรับการทาสองชั้น คุณจะต้องใช้...
                  </span>
                  <a className="paint-tooltip">
                    <InfoIcon className="w-4 h-4 " />
                  </a>
                  <Tooltip anchorSelect=".paint-tooltip" place="right">
                    <p>Enough for two coats, with +10% allowance included</p>
                  </Tooltip>
                </div>
                <h1 className="text-3xl font-[500]">
                  สีรองพื้น {amountOfPrimer} แกลลอน
                </h1>
                <h1 className="text-3xl font-[500]">
                  สีทับหน้า {amountOfPaint} แกลลอน
                </h1>
                {roomType === "wholeRoomWithCel" && (
                  <h1 className="text-3xl font-[500]">
                    สีทาเพดาน {amountOfCeilingPaint} แกลลอน
                  </h1>
                )}
              </div>
            </div>
            <div className="mt-4 px-3">
              <h1 className="text-xl font-[500]">Heads up</h1>
              <p className="mt-2 text-sm">
                เครื่องคำนวณนี้ช่วยได้เยอะ แต่เป็นเพียงแนวทางคร่าวๆ
                เท่านั้นนะครับ/ค่ะ ถึงแม้จะค่อนข้างแม่นยำ
                แต่การวัดบางอย่างของคุณ (เช่น หน้าต่างหรือประตู)
                อาจทำให้ผลลัพธ์เปลี่ยนไปเล็กน้อย
                โชคดีที่เรามีบริการจัดส่งรวดเร็ว ถ้าสั่งไม่พอ –
                หรือคืนได้ถ้าสั่งเยอะเกิน
                ติดต่อทีมงานใจดีของเราได้เลยหากต้องการความช่วยเหลือเพิ่มเติม:
                hello@voqepaint.com
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
