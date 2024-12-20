import React from "react";
import "./Sidebar.css";
import SidebarItem from "./SidebarItem.jsx";
import CodeAntLogo from "../CodeAntLogo/CodeAntLogo";
import dropDownLogo from "../../assets/dropDownLogo.png";
import HomeLogo from "../../assets/home.png";
import CodeLogo from "../../assets/code.png";
import CloudLogo from "../../assets/cloud.png";
import BookLogo from "../../assets/book.png";
import SettingsLogo from "../../assets/gear.png";
import PhoneLogo from "../../assets/phone.png";
import SignOutLogo from "../../assets/sign-out.png";

const Sidebar = () => {
  return (
    <div style={{height: "100%", width: "320px"}}>
      <div className="sidebar">
        <div>
          <div className="sidebar-header">
            <CodeAntLogo text="CodeAnt AI" />
            <div className="user-dropdown">
              <p>Yogesh Jangra</p>
              <img src={dropDownLogo} />
            </div>
          </div>
          <div className="sidebar-menu">
            <SidebarItem name="Repositories" symbol={HomeLogo} newStyle="true" />
            <SidebarItem name="AI Code Review" symbol={CodeLogo} />
            <SidebarItem name="Cloud Security" symbol={CloudLogo} />
            <SidebarItem name="How to Use" symbol={BookLogo} />
            <SidebarItem name="Settings" symbol={SettingsLogo} />
          </div>
        </div>
        <div className="sidebar-footer">
          <SidebarItem name="Support" symbol={PhoneLogo} />
          <SidebarItem name="Logout" symbol={SignOutLogo} />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
