import { useState } from "react";
import { IoAirplaneSharp } from "react-icons/io5";
import { BiSolidPlaneTakeOff } from "react-icons/bi";
import { BiSolidPlaneLand } from "react-icons/bi";
import { IoMdCalendar } from "react-icons/io";
const BookFlight = () => {
  const [tripType, setTripType] = useState("roundTrip");
  return (
    <form className="white-card-wrapper">
        {/* book flight header */}
      <div className="flex xs:items-center justify-between gap-3 xs:gap-1 mb-6 flex-wrap flex-col xs:flex-row">
        <div className="flex items-center gap-1">
          <IoAirplaneSharp size="20px" />
          <h4 className="font-semibold   text-sm sm:text-lg  ">BOOK YOUR FLIGHT</h4>
        </div>

        {/* //? tripType buttons */}
        <div className="text-xs sm:text-sm  flex item-center text-nowrap x  flex-col sm:flex-row ">
          <button
            className={
              "py-2 px-2 sm:px-5  rounded-t-xl sm:rounded-s-full hover:bg-opacity-80 transition-all font-semibold " +
              (tripType === "roundTrip"
                ? " bg-primary-color text-home-bg "
                : " bg-home-bg text-primary-color")
            }
            type="button"
            onClick={() => setTripType("roundTrip")}
          >
            Round trip
          </button>
          <button
            className={
              " py-2 px-2 sm:px-5  rounded-b-xl sm:rounded-e-full   hover:bg-opacity-80 transition-all font-semibold " +
              (tripType === "oneWay"
                ? " bg-primary-color text-home-bg"
                : " bg-home-bg text-primary-color")
            }
            type="button"
            onClick={() => setTripType("oneWay")}
          >
            One way
          </button>
        </div>
      </div>

      {/* //? inputs */}
      <div className="flex  items-center gap-3 flex-wrap  mb-6  ">
        {/* departure and arrival inputs */}
        <div className="flex sm:items-center gap-1 flex-1 flex-col sm:flex-row  ">
          <div className=" border rounded-t-2xl  sm:rounded-s-full flex items-center justify-start  flex-1  ">
            <label htmlFor="departure" className="pe-2 ps-3 ">
              <BiSolidPlaneTakeOff size="25"   className="text-primary-color"/>
            </label>
            <input
              type="text"
               
              className="p-1 pl-3    bg-transparent focus:outline-none  "
              placeholder="Departure"
              name="departure"
              id="departure"
              //   value={inputs.username}
              //   onChange={handleChange}
            />
          </div>
          <div className=" border rounded-b-2xl sm:rounded-e-full flex items-center justify-start  flex-1">
            <label htmlFor="arrival" className="pe-2 ps-2 ">
              <BiSolidPlaneLand   size="25" className="text-primary-color"/>
            </label>
            <input
              type="text"
               
              className="p-1 pl-3   bg-transparent focus:outline-none   "
              placeholder="Arrival"
              name="arrival"
              id="arrival"
              //   value={inputs.username}
              //   onChange={handleChange}
            />
          </div>
          

        </div>



        {/* dates inputs */}
        <div className="flex sm:items-center gap-1 flex-1 flex-col sm:flex-row">
          <div className=" border rounded-t-2xl  sm:rounded-s-full flex items-center justify-start flex-1 ">
            <label htmlFor="departure" className="pe-2 ps-3 ">
              <IoMdCalendar size="25" className="text-primary-color" />
            </label>
            <input
              type="date" 
              className="p-1 pl-3    bg-transparent focus:outline-none  "
              name="departure"
              id="departure"
              //   value={inputs.username}
              //   onChange={handleChange}
            />
          </div>
          <div className=" border rounded-b-2xl sm:rounded-e-full flex items-center justify-start  flex-1">
            <label htmlFor="landing" className="pr-2 ps-2 ">
              <IoMdCalendar size="25" className="text-primary-color"  />
            </label>
            <input
              type="date" 
              className="p-1 pl-3   bg-transparent focus:outline-none   "
              name="landing"
              id="landing"
              //   value={inputs.username}
              //   onChange={handleChange}
            />
          </div>
          

        </div>
      </div>

      {/* submit button */}
      <div>
        <button className=" btn-primary">Show flights</button>
      </div>
    </form>
  );
};

export default BookFlight;
