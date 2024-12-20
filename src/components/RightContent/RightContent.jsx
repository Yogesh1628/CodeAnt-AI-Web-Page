import React from "react";
import RepositoryHeader from "./RepositoryHeader";
import RepositoryList from "./RepositoryList";
import "./RightContent.css";

const RightContent = () => {
  return (
    <div className="right-complete">
      <div className="right-content">
        <RepositoryHeader />
        <RepositoryList />
      </div>
    </div>
  );
};

export default RightContent;
