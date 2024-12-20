import React from "react";
import Button from "./Button/Button";
import AddLogo from "../../assets/plus.png";
import RefreshLogo from "../../assets/refresh.png";
import SearchLogo from "../../assets/search.png";
import './RightContent.css'

const RepositoryHeader = () => {
  return (
    <div className="header">
      <div className="header-top">
        <div className="header-top-left">
          <p className="heading-text">Repositories</p>
          <p className="repo-counts">33 Total repositories </p>
        </div>
        <div className="button-style">
          <Button symbol={RefreshLogo} text="Refresh All" />
          <div className= "already-clicked-button">
            <img src={AddLogo} />
            <p>Add Repositories</p>
          </div>
        </div>
      </div>
      <Button symbol={SearchLogo} text="Search Repositories" newStyle="true" />
    </div>
  );
};

export default RepositoryHeader;
