import React from "react";
import "../App.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Row from "../components/layouts/Row";
import waste from "../components/images/waste.jpg";

function Problems() {
  return (
    <div className="App">
      <Navbar />
      <div className="paragraph">
        <Row>
          <p>
            The NEAP has listed nine strategies are to be adopted to protect and
            conserve marine resources: Conserve, manage and sustainably use
            coastal and marine ecosystems Conserve marine mammals and other
            threatened species Conserve, sustainably develop and manage coastal
            and marine resources Administer and manage affected areas along the
            coast Control coastal and marine pollution Control sand mining and
            manage extraction of other mineral resources to enhance beach
            stability, habitat and biodiversity conservation Adapt to climate
            change and natural hazard impacts on coastal features,
            infrastructure, coastal communities and livelihoods Carry out
            research and development to support the conservation and sustainable
            use of coastal and marine resources Strengthen policy, legal and
            institutional framework for coastal and marine resource conservation
            and sustainable use
          </p>
          <img alt="" width="60%" src={waste} />
        </Row>
      </div>
      <Footer />
    </div>
  );
}
export default Problems;
