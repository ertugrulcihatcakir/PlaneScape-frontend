import { IoAirplaneSharp } from "react-icons/io5";

import { PiAirplaneTakeoffBold } from "react-icons/pi";
import { PiAirplaneLandingBold } from "react-icons/pi";
import { Link } from "react-router-dom";
const Flight = () => {
  return (
    <div>
      <div className="white-card-wrapper relative rounded-bl-none">
        {/* flight details */}
        <p className="font-semibold mb-5">Milano - Madrid</p>
        {/* flight infos */}
        <div className=" flex xs:items-center gap-3 justify-between mb-5 flex-col xs:flex-row  ">
          {/* departure infos */}
          <div className="flex-1 flex flex-col justify-center items-center xs:items-stretch   ">
            <div className="flex items-center gap-2 text-[#848383] font-[500] ">
              <PiAirplaneTakeoffBold size="20" />
              <span className=" text-xs sm:text-sm leading-normal ">
                Departure
              </span>
            </div>

            <div>
              <span className="font-bold text-sm sm:text-md leading-normal ">
                7:30 AM
              </span>
            </div>

            <div className="  text-[#848383] font-[500] ">
              <span className="text-xs sm:text-sm leading-normal ">
                Airport: MXP
              </span>
            </div>
          </div>

          {/* line */}
          <div className="flex-1 ">
            <div className="bg-[#c3c0c0] w-3/5 min-w-1 h-[2px] rounded-full mx-auto"></div>
          </div>

          {/* middle infos */}
          <div className="flex-1 flex flex-col justify-center gap-1   ">
            <div className="flex items-center justify-center  ">
              <img
                src="https://w7.pngwing.com/pngs/629/712/png-transparent-flight-alitalia-airline-ticket-airline-alliance-travel-text-trademark-logo-thumbnail.png"
                alt="logo"
                className="w-14 h-5 object-contain"
              />
            </div>

            <div className="flex items-center justify-center">
              <IoAirplaneSharp size="20" className="text-primary-color" />
            </div>

            <div className="  text-[#848383] font-[500] text-xs sm:text-sm leading-normal text-center ">
              2h 25m (Nonstop)
            </div>
          </div>

          {/* line */}
          <div className="flex-1 ">
            <div className="bg-[#c3c0c0] w-3/5 min-w-1 h-[2px] rounded-full mx-auto"></div>
          </div>

          {/* arrival infos */}
          <div className="flex-1 flex flex-col justify-center  items-center xs:items-stretch ">
            <div className="flex items-center gap-2 text-[#848383] font-[500] ">
              <PiAirplaneLandingBold size="20" />
              <span className=" text-xs sm:text-sm leading-normal ">
                Arrival
              </span>
            </div>

            <div>
              <span className="font-bold text-sm sm:text-md leading-normal ">
                7:30 AM
              </span>
            </div>

            <div className="  text-[#848383] font-[500] ">
              <span className="text-xs sm:text-sm leading-normal ">
                Airport: MAD
              </span>
            </div>
          </div>
        </div>

        {/* cardbottom */}
        {/* price */}
        <div className="flex-1 flex flex-col justify-center gap-1">
          <div className=" ">
            <span className="text-primary-color font-bold">Price: $200</span>
          </div>

          <div className="  text-[#848383] font-[500] ">
            <span className="text-sm">Round Trip</span>
          </div>
        </div>

        {/* book flight button */}
        <div className="absolute bottom-0 right-0">
          <button className="bg-primary-color py-4 xs:py-5 px-5 xs:px-9 text-home-bg font-semibold  hover:bg-home-bg hover:text-primary-color transition-all active:bg-black active:text-home-bg rounded-ss-lg rounded-ee-lg">
            Book Flight
          </button>
        </div>
      </div>
      <div className="pt-2">
        <Link className="bg-[#E6E0EB] px-5 pt-3 pb-3 rounded-b-lg text-[#672CA5]   underline text-sm">Check the details</Link>
      </div>
    </div>
  );
};

export default Flight;
