import { useState } from "react";
import { BiDollar } from "react-icons/bi";
import { BsPercent } from "react-icons/bs";
BsPercent;

const inputValues = {
  totalValue: "",
  salesTarget: "",
  winRates: "",
};

const PipelineCoverageCalc = () => {
  const [inputData, setInputData] = useState(inputValues);
  const [result, setResult] = useState("");
  const [remainingValue, sestRemaining] = useState("");

  //calculating the  sales pipeline coverage

  const Calculate = () => {
    const { totalValue, salesTarget, winRates } = inputData;

    const PipelineCoverage = (totalValue * (winRates / 100)) / salesTarget;
    const total = winRates * salesTarget;
    console.log("total-", total);
    setResult(PipelineCoverage);

    // calculating the remaining value of opportunities

    const remainingValue = salesTarget * (3 / (winRates / 100)) - totalValue;
    sestRemaining(remainingValue);
  };

  console.log("result-", result);

  const handleChangle = (e) => {
    // geting input data and store in inputData state
    setInputData({ ...inputData, [e.target.name]: e.target.value });
  };
  return (
    <>
      {/* Calculator logo start */}
      <div className="  fixed h-[100vh] w-full  ">
        <div className="flex items-center justify-center text-6xl mt-10  h-[100px] w-[inherit]">
          <div className=" text shadow-md font-bold ">
            Pipeline Coverage Calculator
          </div>
        </div>
        {/* Calculator logo end */}

        {/* Calculation start */}
        <div className="  flex items-center  h-[300px] mt-3 w[inherit] border border-black rounded-md mx-10 ">
          <div className="   w-[50%]    h-[inherit]">
            <div className="  relative flex justify-between w-full mt-3 px-5 ">
              <label htmlFor="totalValue" className=" font-semibold">
                Total value of Opportunities in Pipeline
                <BiDollar className=" absolute right-[220px] top-2  z-10 " />
              </label>

              <input
                type="number"
                name="totalValue"
                // value={inputValues.totalValue}
                className="     px-4 py-1 border  border-black ring-black rounded-md"
                onChange={(e) => handleChangle(e)}
              />
            </div>
            <div className=" relative  flex justify-between w-full mt-3 px-5 ">
              <label htmlFor="salesTarget" className=" font-semibold">
                Sales Target
              </label>
              <BiDollar className=" absolute right-[220px] top-2  z-10  " />

              <input
                type="number"
                name="salesTarget"
                // value={inputValues.sales}
                className="px-4 py-1 border  border-black ring-black  rounded-md"
                onChange={(e) => handleChangle(e)}
              />
            </div>
            <div className="relative flex justify-between w-full mt-3 px-5 ">
              <label htmlFor="winRates" className=" font-semibold">
                {" "}
                Win Rates
              </label>
              <BsPercent className=" absolute right-6 top-2 " />
              <input
                type="number"
                name="winRates"
                // value="values"
                className="px-4 py-1 border  border-black ring-black  rounded-md"
                onChange={(e) => handleChangle(e)}
              />
            </div>
            <div className="flex justify-end w-full px-6">
              <button
                className=" bg-black text-white font-semibold rounded-md px-6 py-2 mt-4 "
                onClick={() => Calculate()}
              >
                Calculate
              </button>
            </div>
          </div>

          <div className=" relative w-[50%] flex flex-col items-center justify-center h-[inherit]">
            {result && result >= 3 ? (
              <div className=" absolute bottom-6  text-green-700 font-semibold ">
                Your sales pipeline is healthy{" "}
              </div>
            ) : result && result < 3 ? (
              <div className=" absolute bottom-6 font-semibold text-red-600 ">
                Add ${remainingValue} to your pipeline to achieve 3.0x pipeline
                coverage
              </div>
            ) : (
              ""
            )}
            <div className="absolute top-4 font-bold text-3xl">
              Sales Pipeline Coverage
            </div>

            {result && result >= 3 ? (
              <div className="  flex justify-center font-semibold text-4xl mt-4 text-green-600">
                {result}
              </div>
            ) : result && result < 3 ? (
              <div>
                <div className="  flex justify-center font-semibold text-4xl mt-4 text-red-600 ">
                  {result}
                </div>
              </div>
            ) : (
              ""
            )}
          </div>
        </div>
        {/* Calculation end */}
      </div>
    </>
  );
};

export default PipelineCoverageCalc;
