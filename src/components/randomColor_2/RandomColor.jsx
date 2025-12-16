import { useState } from "react";

function RandomColor() {
  const [typeOfColor, setTypeOfColor] = useState("hex");
  const [color, setColor] = useState("#F9E935");

  function CreateRandomColor(length) {
    return Math.floor(Math.random() * length);
  }

  function handleCreateRandomHexColor() {
    const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9,"A", "B", "C", "D", "E", "F", ];

    let hexColor = "#";
    for (let i = 0; i < 6; i++) {
      hexColor += hex[CreateRandomColor(hex.length)];
    }
    setColor(hexColor);
  }

  function handleCreateRandomRgbColor() {
    const r = CreateRandomColor(256);
    const g = CreateRandomColor(256);
    const b = CreateRandomColor(256);
    setColor(`rgb(${r},${g},${b})`);
  }

  return (
    <div className="flex flex-col lg:flex-row w-full min-h-screen bg-gray-300 justify-center items-center gap-6 px-4">
      
      {/* LEFT TEXT */}
      <div
        className=" text-4xl sm:text-6xl lg:text-8xl italic font-semibold transition duration-300 hover:scale-90"
        style={{ color }}
      >
        {typeOfColor}
      </div>

      {/* FACE */}
      <div
        className=" relative w-72 h-72 sm:w-96 sm:h-96 lg:w-150 lg:h-150 rounded-full shadow-2xl"
        style={{ backgroundColor: color }}
      >
        {/* LEFT EYE */}
        <button
          onClick={() => setTypeOfColor("hex")}
          className=" absolute top-[35%] left-[20%] w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-black text-white shadow-lg font-semibold transition duration-300 hover:scale-90 " >
          HEX
        </button>

        {/* RIGHT EYE */}
        <button
          onClick={() => setTypeOfColor("rgb")}
          className="  absolute top-[35%] right-[20%] w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-black text-white shadow-lg font-semibold transition duration-300 hover:scale-90 " >
          RGB
        </button>

        {/* MOUTH */}
        <button
          onClick={
            typeOfColor === "hex"
              ? handleCreateRandomHexColor
              : handleCreateRandomRgbColor
          }
          className="absolute bottom-[20%] left-1/2 -translate-x-1/2 w-52 sm:w-50 h-10 bg-black text-white rounded-3xl shadow-2xl font-semibold text-base sm:text-lg transition duration-300  hover:scale-90 ">
          Generate {typeOfColor} Color
        </button>
      </div>

      {/* RIGHT TEXT */}
      <h1
        className=" text-4xl sm:text-5xl lg:text-8xl italic font-semibold transition duration-300 hover:scale-90"
        style={{ color }}
      >
        {color}
      </h1>
    </div>
  );
}

export default RandomColor;
