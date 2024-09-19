import React from "react";
import '../assets/css/Bookings.css';  // Eğer CSS'i ayrı bir dosyada tutmak istersen

const bookings = [
  {
    id: 1,
    time: "10:00 AM - 8:00 PM",
    route: "Istanbul - New York",
    airline: "Turkish Airlines",
    flightType: "Nonstop",
    duration: "10h 0m",
    flightNumber: "TK1234",
    price: "$4500",
    class: "Business",
    options: [
      { name: "extra-baggage", price: "$75" },
      { name: "lounge-access", price: "$250" }
    ]
  },
  {
    id: 2,
    time: "2:00 PM - 5:30 PM",
    route: "Paris - Los Angeles",
    airline: "Air France",
    flightType: "Nonstop",
    duration: "3h 30m",
    flightNumber: "AF987",
    price: "$3600",
    class: "First Class",
    options: [
      { name: "extra-baggage", price: "$75" },
      { name: "lounge-access", price: "$45" },
      { name: "airport-transfer", price: "$110" }
    ]
  },
  {
    id: 3,
    time: "8:00 AM - 11:00 AM",
    route: "Munich - San Francisco",
    airline: "Lufthansa",
    flightType: "Nonstop",
    duration: "3h 0m",
    flightNumber: "LH345",
    price: "$4000",
    class: "First Class",
    options: [
      { name: "airport-transfer", price: "$180" }
    ]
  }
];

const Bookings = () => {
  return (
    <div className="bookings-container">
      <h1>My Bookings</h1>
      <div className="booking-list">
        {bookings.map((booking) => (
          <div key={booking.id} className="booking-card">
            <div className="booking-info">
              <h2>{booking.time}</h2>
              <p>{booking.route}</p>
              <p><strong>{booking.airline}</strong> - {booking.flightType}</p>
              <p>Duration: {booking.duration}</p>
              <p>Flight: {booking.flightNumber}</p>
            </div>
            <div className="booking-pricing">
              <div className="price">{booking.price}</div>
              <div className="class">{booking.class}</div>
            </div>
            <div className="booking-options">
              {booking.options.map((option, index) => (
                <div key={index} className="option">
                  <p>{option.price}</p>
                  <p>{option.name}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Bookings;
