import { ReactComponent as UKIcon } from "../assets/icons/UKIcon.svg";
import { ReactComponent as DownIcon } from "../assets/icons/arrow-drop-down-line.svg";

export default function LanguageDropdown() {
  return (
    <div className="lang__dropdown">
      <UKIcon />
      <span className="text-sm">Language</span>
      <DownIcon />
    </div>
  );
}
