import React from "react";
import AdvantageCardsList from "./AdvantageCardList";
import Advantages from "../data/advantages.json";

const SectionTwo = () => {
  return (
    <section id="sectionTwo">
      <div className="block-center max-width-2000 py-3 font-poppins ">
        <h2 className="blue-text text-center large-text">Why book with us?</h2>
        <div className="columns-container-s2 gap-6 ">
          <AdvantageCardsList />
        </div>
      </div>
    </section>
  );
};

export default SectionTwo;
