import Flights from "../components/homePage/flights/Flights";
import BookFlight from "../components/homePage/BookFlight";
import HomeNavbar from "../components/homePage/Header";
import Filters from "../components/homePage/filters/Filters";
import OtherJobCard from "../components/homePage/OtherJobCard";
import carRental from "../assets/CARRENTALS.jpg";
import hotelImage from "../assets/HOTELS.jpg";
import travelImage from "../assets/TRAVEL-PACKAGES.jpg";
import { IoCarSportOutline } from "react-icons/io5";
import { FaHotel } from "react-icons/fa";
import { FaUmbrellaBeach } from "react-icons/fa6";
const HomePage = () => {
  return (
    <div className="bg-home-bg min-h-screen  p-2">
      <div className="bg-box-bg min-h-[80%] lg:w-10/12 rounded-3xl mx-auto mt-16 lg:mt-32 py-8 px-4">
        <HomeNavbar />

        {/* //?  Home page content  */}
        <section className="flex   flex-col 2xl:flex-row py-5 gap-6">
          {/*  */}
          <div className="flex-1">
            {/* Book Flight */}
            <BookFlight />
            {/* Flights and filters */}
            <div className="mt-8 grid grid-cols-4">
              {/* flights */}
              <div className="col-span-4 md:col-span-3">
                <Flights />
              </div>

              {/* filters */}
              <div className="col-span-1 hidden md:block">
                <Filters />
              </div>
            </div>
            
          </div>

          {/* //? Other Jobs */}
          <div className="2xl:w-[350px] border flex flex-col md:flex-row 2xl:flex-col gap-5">
            {/* Car rental, hotels, travel packages */}
            {/* cards */}
            <OtherJobCard label={"CAR RENTALS"} icon={<IoCarSportOutline size="34" />} img={carRental} color={'orange'}/>
            <OtherJobCard label={"HOTELS"} icon={<FaHotel size="34" />} img={hotelImage} color={'#003198'}/>
            <OtherJobCard label={"TRAVEL PACKAGES"} icon={<FaUmbrellaBeach size="34" />} img={travelImage} color={'green'}/>
          </div>
        </section>
      </div>
    </div>
  );
};

export default HomePage;
