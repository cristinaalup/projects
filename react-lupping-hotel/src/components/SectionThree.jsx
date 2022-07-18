import React from "react";

import Form from "./Form";
import "./css/SectionThree.css";
import "./css/Form.css";
const SectionThree = () => {
  return (
    <section id="sectionThree" className="margin-bottom-40">
      <div className="block-center max-width-600 ">
        <h2 className="text-center large-text font-poppins blue-text">
          Book now
        </h2>
        <div>
          <Form />
        </div>
      </div>
    </section>
  );
};

export default SectionThree;
