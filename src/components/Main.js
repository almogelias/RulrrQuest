import React from "react";
import video1 from "./../media/Sequence 01_1.mp4";
import automatedStoreImage from "./../media/automatedStore.PNG";
import { IoIosArrowDropdownCircle } from "react-icons/io";
import Button from "react-bootstrap/Button";

const Main = () => {
  return (
    <div>
      <section>
        <div className="mainVideoContainer">
          <video
            src={video1}
            controls="false"
            autoplay="true"
            loop="true"
            muted="true"
          />
          <Button className="discoverBtn">Discover rulrr</Button>
          <Button className="scrollDownBtn">
            <IoIosArrowDropdownCircle id="faArrow" size={50} />
          </Button>
        </div>
      </section>
      <section className="sectionAdvertisingContainer">
        <div className="advertisingContainer">
          <div className="advertisingHeader">rulrr ></div>
          <div className="advertisingSection">Physical Store's Advertising</div>
          <div className="advertisingSection">
            rulrr is an{" "}
            <span id="boldingBlue">autonomous advertising platform</span> that
            systematically drives more revenues to both past and new customers.
          </div>
        </div>
        <div className="automatedStore">
          <div class="container">
            <div class="row align-items-center">
              <div class="col-8">
                <img src={automatedStoreImage} alt="Logo" />
              </div>
              <div class="col-4 automatedStoreData">
                <div className="automatedStoreHeader">
                  Building the next evolution of stores advertising.
                </div>
                <div className="automatedStoreSection">
                  A unique technology that tracks advertising results inside
                  your store.
                </div>
                <Button className="automatedStoreBtn">
                  Automated Store’s Advertising
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Main;
