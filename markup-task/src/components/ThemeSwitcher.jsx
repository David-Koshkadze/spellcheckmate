import React from "react";

import { ReactComponent as SunIcon } from "../assets/icons/sun-icon.svg";
import { ReactComponent as MoonIcon } from "../assets/icons/moon-icon.svg";

export default function ThemeSwitcher() {
  return (
    <div className="theme-switch__wrapper">
      <SunIcon />
      <MoonIcon />
    </div>
  );
}
