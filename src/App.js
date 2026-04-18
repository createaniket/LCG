import "./App.css";

// 🔥 LARGE IMAGES (1–5)
import Property from "./images/Property.jpg";
import Events from "./images/Events.jpg";
import Marketing from "./images/Marketing.jpg";
import Architecture from "./images/Architecture.jpg";
import Construction from "./images/Construction.jpg";

// 🔽 SMALL IMAGES (6–9)
import TalentManagement from "./images/TalentManagement.jpeg";
import Afterparties from "./images/Afterparties.jpg";
import Music from "./images/Music.jpg";
import Commercial from "./images/Commercial.jpg";
import Logistics from "./images/Logistics.jpg";
import UniversityPartnerships from "./images/UniversityPartners.jpg";

function App() {
  return (
    <div className="page">

      {/* 🔥 TOP LARGE GRID */}
      <div className="layout">

        {/* LEFT COLUMN */}
        <div className="col">
          <div className="top parent-h">
            <div
              className="box left"
              style={{ backgroundImage: `url(${Property})` }}
            >
              <h2>Property</h2>
            </div>

            <div
              className="box right"
              style={{ backgroundImage: `url(${Architecture})` }}
            >
              <h2>Architecture</h2>
            </div>
          </div>

          <div
            className="box bottom"
            style={{ backgroundImage: `url(${Marketing})` }}
          >
            <h2>Marketing</h2>
          </div>
        </div>

        {/* MIDDLE COLUMN */}
        <div className="col">
          <div
            className="box top"
            style={{ backgroundImage: `url(${Events})` }}
          >
            <h2>Events</h2>
          </div>

          <div
            className="box bottom"
            style={{ backgroundImage: `url(${Construction})` }}
          >
            <h2>Construction</h2>
          </div>
        </div>

        {/* RIGHT COLUMN (KEEP DESIGN BALANCED) */}
        <div className="col">
          <div
            className="box top"
            style={{ backgroundImage: `url(${Property})` }}
          >
            <h2>Property</h2>
          </div>

          <div className="bottom parent-h">
            <div
              className="box left"
              style={{ backgroundImage: `url(${Architecture})` }}
            >
              <h2>Architecture</h2>
            </div>

            <div className="right parent-v">
              <div
                className="box top"
                style={{ backgroundImage: `url(${Marketing})` }}
              >
                <h2>Marketing</h2>
              </div>

              <div
                className="box bottom"
                style={{ backgroundImage: `url(${Events})` }}
              >
                <h2>Events</h2>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 🔽 SMALL TILED GRID */}
      <div className="extra-layout">

        <div className="row">
          <div
            className="extra-box"
            style={{ backgroundImage: `url(${Afterparties})` }}
          >
            <h2>Afterparties</h2>
          </div>

          <div
            className="extra-box"
            style={{ backgroundImage: `url(${Music})` }}
          >
            <h2>Music</h2>
          </div>

          <div
            className="extra-box"
            style={{ backgroundImage: `url(${TalentManagement})` }}
          >
            <h2>Talent Management</h2>
          </div>

          <div
            className="extra-box"
            style={{ backgroundImage: `url(${Logistics})` }}
          >
            <h2>Logistics</h2>
          </div>
        </div>

        <div className="row">
          <div
            className="extra-box"
            style={{ backgroundImage: `url(${Commercial})` }}
          >
            <h2>Commercial</h2>
          </div>

          <div
            className="extra-box wide"
            style={{ backgroundImage: `url(${UniversityPartnerships})` }}
          >
            <h2>University Partners</h2>
          </div>

          <div className="extra-box empty"></div>
        </div>

      </div>
    </div>
  );
}

export default App;