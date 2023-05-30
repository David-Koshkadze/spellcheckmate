import React from "react";
import SidebarItem from "./SidebarItem";

import { ReactComponent as CheckABCIcon } from "../../assets/icons/check-abc.svg";
import { ReactComponent as VoicePrintIcon } from "../../assets/icons/voiceprint-icon.svg";
import { ReactComponent as WebcamIcon } from "../../assets/icons/webcam-icon.svg";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebar__options__wrapper">
        <SidebarItem
          icon={<CheckABCIcon />}
          text="Spellchecker"
          // active={true}
        />
        <SidebarItem icon={<VoicePrintIcon />} text="Text to speech" active={true}/>
        <SidebarItem icon={<WebcamIcon />} text="Speech to text" />
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
