
const Filters = () => {
  return (
    <div className="py-3 ps-5 pe-2">
      {/* sort by */}
      <div className="mb-4">
        <span className="font-bold ">Sort by:</span>
        <select
          name="sort"
          id="sort"
          className="w-full focus:outline-none px-3 py-2 mt-3"
        >
          <option value="">Lowest Price</option>
          <option value="">Highest Price</option>
          <option value="">A - Z</option>
          <option value="">Z - A</option>
          <option value="">Highest Date</option>
          <option value="">Lowest Date</option>
        </select>
      </div>


      {/* Arrial Time */}
      <div className="mb-4">
        <span className="font-bold">Arrival Time</span>
        <div className="flex gap-2 mb-1 mt-2 ">
          <input type="radio" id="date" name="Arrival-Time" value="5:00 AM - 11:59 AM" checked />
          <label for="huey">5:00 AM - 11:59 AM</label>
        </div>
        <div className="flex gap-2 mb-1 mt-2">
          <input type="radio" id="date" name="Arrival-Time" value="12:00 PM - 5:59 PM" checked />
          <label for="huey">12:00 PM - 5:59 PM</label>
        </div>

         
      </div> 

      {/* Stops */}
      <div className="mb-4">
        <span className="font-bold">Stops</span>

        <div className="flex gap-2 mb-1 mt-2">
          <input type="radio" id="Stops" name="Stops" value="Nonstop $230" checked />
          <label for="Stops">Nonstop</label>
          <label for="Stops">$230</label>
        </div>

        <div className="flex gap-2 mb-1 mt-2">
          <input type="radio" id="Stops" name="Stops" value="1 Stop $230" checked />
          <label for="Stops">1 Stop</label>
          <label for="Stops">$230</label>
        </div>

        <div className="flex gap-2 mb-1 mt-2">
          <input type="radio" id="Stops" name="Stops" value="2 Stop $230" checked />
          <label for="Stops">2 Stop</label>
          <label for="Stops">$230</label>
        </div>
         
      </div> 

       {/* Airlines Included */}
       <div className="mb-4">
        <span className="font-bold">Airlines Included</span>

        <div className="flex gap-2 mb-1 mt-2">
          <input type="radio" id="Airlines" name="Airlines" value="Alitalia $230" checked />
          <label for="Airlines">Alitalia</label>
        </div>

        <div className="flex gap-2 mb-1 mt-2">
          <input type="radio" id="Airlines" name="Airlines" value="Lufthansa $230" checked />
          <label for="Airlines">Lufthansa</label>
        </div>

        <div className="flex gap-2 mb-1 mt-2">
          <input type="radio" id="Airlines" name="Airlines" value="Lufthansa $230" checked />
          <label for="Air France">Lufthansa</label>
        </div>

        <div className="flex gap-2 mb-1 mt-2">
          <input type="radio" id="Airlines" name="Airlines" value="Brussels Airlines $230" checked />
          <label for="Air France">Brussels Airlines</label>
        </div>

        <div className="flex gap-2 mb-1 mt-2">
          <input type="radio" id="Airlines" name="Airlines" value="Air Italy $230" checked />
          <label for="Air France">Air Italy</label>
        </div>

        <div className="flex gap-2 mb-1 mt-2">
          <input type="radio" id="Airlines" name="Airlines" value="Siberia $230" checked />
          <label for="Air France">Siberia</label>
        </div>

         
      </div>
    </div>
  );
};

export default Filters;
