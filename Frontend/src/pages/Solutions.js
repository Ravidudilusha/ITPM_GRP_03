import React from "react";
import "../App.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Row from "../components/layouts/Row";
import waste from "../components/images/waste.jpg";

function Solutions() {
  return (
    <div className="App">
      <Navbar />
      <div className="paragraph">
        <Row>
          <div>
            <a className="head1">1.Reduce use single use plastic</a>
            <br />
            {/* <br /> */}
            <p>
              Minimize your consumption of single-use plastic and choose
              reusable goods whenever possible.
            </p>
            <br />
            {/* <br /> */}
            <a className="head1">2.Dispose of trash properly</a>
            <br />
            {/* <br /> */}
            <p>
              Make sure to recycle wherever you can and dispose of waste
              correctly.
            </p>
            <br />
            <a className="head1">3. Increase clean up efforts</a>
            <br />
            <p>
              Clean up trash that has accumulated in your neighborhood's
              waterways, participate in local cleanup efforts, or start your own
              to engage the neighborhood.
            </p>
          </div>
          <img alt="" width="60%" src={waste} />
        </Row>
      </div>
      <Footer />
    </div>
  );
}
export default Solutions;
