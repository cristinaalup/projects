import React from "react";

import HotelCardsList from "./HotelCardsList";
import "./css/SectionOne.css";
import HotelCard from "./HotelCard";

const SectionOne = () => {
  return (
    <section id="sectionOne">
      <div className="block-center max-width-1200">
        <h2 className="text-center large-text font-poppins blue-text p-bottom-40 ">
          Our Hotels
        </h2>

        <div className="columns-container gap-8">
          <HotelCardsList />
        </div>
      </div>
    </section>
  );
};

export default SectionOne;
