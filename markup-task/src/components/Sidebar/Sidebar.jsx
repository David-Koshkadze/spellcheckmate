import React from "react";
import SidebarItem from "./SidebarItem";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebar__options__wrapper">
        <SidebarItem icon={"/icons/check-abc.svg"} text="Spellchecker" />
        <SidebarItem
          icon={"/icons/voiceprint-line.svg"}
          text="Text to speech"
          active={true}
        />
        <SidebarItem icon={"/icons/webcam-line.svg"} text="Speech to text" />
      </div>

      {/* Settings */}
      <div>
        <div className="sidebar__settings__wrapper">
          <ul>
            <li>
              <img src="/icons/settings-5-line.svg" alt="" />
              <span>Settings</span>
            </li>
            <li>
              <img src="/icons/facebook-circle-line.svg" alt="" />
              <span>Facebook</span>
            </li>
            <li>
              <img src="/icons/question-line.svg" alt="" />
              <span>Contact Support</span>
            </li>
          </ul>
        </div>

        <div className="theme-switch__wrapper"></div>
      </div>
    </div>
  );
}
