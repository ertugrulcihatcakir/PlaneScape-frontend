 
import { IoIosAirplane } from "react-icons/io";
import { ImPriceTag } from "react-icons/im";
import { FaEarthAmericas } from "react-icons/fa6";
import { GiHamburgerMenu } from "react-icons/gi";
import { Link } from "react-router-dom";

const HomeNavbar = () => {
  return (
    
    <div className="flex items-center justify-between">
      <Link to="/" className=" flex items-center flex-start gap-3">
        <div className="bg-[rgb(74,0,150)] w-8 h-8 rounded-full flex items-center"> 
            <IoIosAirplane color="white" size="37" className=" -translate-x-1" /> 
        </div>
        <span className="font-semibold">PLANE SCAPE</span>
      </Link>
      <div className="hidden items-center gap-7 md:flex">
        <ul className="flex items-center gap-4">
          <li>
            <Link className="flex items-center gap-2  transition-all duration-300 hover:text-primary-color active:text-black   hover:scale-105  ">
              <ImPriceTag color="#4A0096" className=" translate-y-0.5" />
              <span>Deals</span>
            </Link>
          </li>
          <li>
            <Link className="flex items-center gap-2 transition-all duration-300 hover:text-primary-color active:text-black   hover:scale-105 ">
              <FaEarthAmericas color="#4A0096" className=" translate-y-0.5" />
              <span>Discover</span>
            </Link>
          </li>
        </ul>
        <div>
          <a href="../../pages/MyFlights.jsx">
            <img src="../../assets/user.png" alt="" />
            <span>cihat</span>
          </a>
        </div>
      </div>
      <div className="hamburger md:hidden bg-primary-color px-3 py-2 rounded-lg hover:bg-[white] group cursor-pointer border border-transparent hover:border-primary-color active:bg-black transition-all">
        <GiHamburgerMenu  className="text-white group-hover:text-primary-color group-active:text-white"/>
      </div>
    </div>
  );
};

export default HomeNavbar;
