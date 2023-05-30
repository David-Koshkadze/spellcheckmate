import { useState } from "react";

export default function AvatarDropdown() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="avatar-dropdown" onClick={() => setIsOpen((op) => !op)}>
        <div id="user_avatar"></div>
        {isOpen ? (
          <img src="/icons/arrow-drop-up-line.svg" />
        ) : (
          <img src="/icons/arrow-drop-down-line.svg" />
        )}
      </div>
      {isOpen ? (
        <div className="dropdown__container">
          <p id="username">George.bugianishvili@gmail.com</p>

          <ul>
            <li>Free plan</li>
            <li>Subscription</li>
            <li>Settings</li>
            <li>Log out</li>
          </ul>
        </div>
      ) : null}
    </>
  );
}
