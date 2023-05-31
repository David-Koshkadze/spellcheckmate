import "./App.css";
import Sidebar from "./components/Sidebar/Sidebar";
import AvatarDropdown from "./components/Header/AvatarDropdown";
import LanguageDropdown from "./components/LanguageDropdown";

import { ReactComponent as CopyIcon } from "./assets/icons/copy-icon.svg";
import { ReactComponent as DeleteIcon } from "./assets/icons/delete-icon.svg";
import { ReactComponent as LogoIcon } from "./assets/icons/logo.svg";

import TextEditor from "./components/TextEditor";


function App() {
  return (
    <>
      <header>
        <nav className="navbar">
          <div className="flex-align-center gap-4">
            <button className="btn btn-secondary flex-align-center gap-2">
              <img src="icons/icon-chrome.svg" alt="icon-chrome" />
              <span>Add to Chrome</span>
            </button>
            <button className="btn btn-primary">Upgrade to Pro</button>
          </div>
          {/* Dropdown */}
          <AvatarDropdown />
        </nav>
      </header>

      {/* Sidebar */}
      <Sidebar />

      <section className="section-container">
        <div className="top__section">
          <button className="btn btn-primary flex-align-center gap-1">
            <img src="/icons/check-line.svg" />
            <span>Check</span>
          </button>
          <div className="top__section__toolbar">
            <button className="btn-tool">
              <CopyIcon />
              <span>Copy</span>
            </button>
            <button className="btn-tool">
              <DeleteIcon />
              <span>Delete</span>
            </button>
            <div style={{ color: "#CCCACA" }}>|</div>
            <LanguageDropdown />
          </div>
        </div>

        <TextEditor />
      </section>

      <LogoIcon className="logo-icon" />
    </>
  );
}

export default App;
