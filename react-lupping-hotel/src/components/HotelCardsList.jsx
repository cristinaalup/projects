import Hotels from "../data/hotels.json";
import HotelCard from "./HotelCard";

const HotelCardsList = () => {
  return (
    <>
      {Hotels.map((hotel) => {
        return (
          <div key={hotel.name}>
            <HotelCard
              featured_image={hotel.featured_image}
              name={hotel.name}
              price_ppn={hotel.price_ppn}
              breakfast_price={hotel.breakfast_price}
              star_rating={hotel.star_rating}
            />
          </div>
        );
      })}
    </>
  );
};

export default HotelCardsList;
