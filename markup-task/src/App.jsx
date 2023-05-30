import "./App.css";

function App() {
  return (
    <>
      <header>
        <nav className="navbar">
          <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
            <button
              className="btn btn-secondary"
              style={{ display: "flex", alignItems: "center", gap: "0.6rem" }}
            >
              <img src="icons/icon-chrome.svg" alt="icon-chrome" />
              <span>Add to Chrome</span>
            </button>
            <button className="btn btn-primary">Upgrade to Pro</button>
          </div>
          {/* Dropdown */}
          <div className="avatar-dropdown"></div>
        </nav>
      </header>

      <div className="sidebar">
        <div>Hello</div>
      </div>

      <section className="section-container">
        <button className="btn btn-primary">Check</button>
      </section>
    </>
  );
}

export default App;
