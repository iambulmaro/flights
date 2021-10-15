import React from "react";
import "../styles/ReviewPage.css";
import SelectedFlight from "./SelectedFlight";
import Roundtrip from "./Roundtrip";

const ReviewPage = () => {
  return (
    <div className="reviewPageContainer">
      <SelectedFlight />
      <Roundtrip dynamicLink='/info'/>
    </div>
  );
};

export default ReviewPage;
