import "./Footer.css";
import FooterList from "./FooterList";

const Footer = () => {
  return (
    <div className="footer">
      <div className="fLists">
        <FooterList
          keywords={[
            "Countries",
            "Regions",
            "Cities",
            "Districts",
            "Airports",
            "Hotels",
          ]}
        />
        <FooterList
          keywords={[
            "Homes",
            "Apartments",
            "Resorts",
            "Villas",
            "Hostels",
            "Guest Houses",
          ]}
        />
        <FooterList
          keywords={[
            "Unique places to stay",
            "Reviews",
            "Unpacked: Travel articles",
            "Travel communities",
            "Seasonal and holiday deals",
            "Hotels",
          ]}
        />
        <FooterList
          keywords={[
            "Car Rental",
            "Bike Rental",
            "Bus Rental",
            "Flight Finder",
            "Restaurant Reservations",
            "Travel Agents",
          ]}
        />
        <FooterList
          keywords={[
            "Customer Service",
            "Partner Help",
            "Careers",
            "Sustainability",
            "Press center",
            "Terms & conditions",
          ]}
        />
      </div>
      <div className="fText">Copyright © 2023 Indian Booking.</div>
    </div>
  );
};

export default Footer;
