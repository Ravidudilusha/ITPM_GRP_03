import React from "react";
import "../App.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
// import Row from "../components/layouts/Row";
// import waste from "../components/images/waste.jpg";

function Community() {
  return (
    <div className="App">
      <Navbar />
      <div className="paragraph">
        {/* <Row> */}
        <p>
          The largest of these unusual creatures the blue whale- as well as
          hundreds of ecosystems teeming with lively and eye-catching lifeforms
          call the oceans home. The extraction of fish and other manne life is
          ongoing at an unsustainable rate, and it is also one of our biggest
          waste areas. These and other elements are having an impact on ocean
          life. Here are the top seven issues that fish are now dealing with in
          our waters.
          <li>Overfishing</li>
          <li>Ocean Acidification</li>
          <li>Ghost fishing</li>
          <li>Plastic</li>
          <li>Commercial Whaling</li>
          <li>Irresponsible fish farming</li>
          <li>Habitat Destruction</li>
        </p>
        {/* <img alt="" width="60%" src={waste} />
        </Row> */}
      </div>
      <Footer />
    </div>
  );
}
export default Community;
