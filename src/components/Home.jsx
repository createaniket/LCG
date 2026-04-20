import React from 'react'


// 🔥 IMAGES
import Property from "../images/Property.jpg";
import Events from "../images/Events.jpg";
import Marketing from "../images/Marketing.jpg";
import Architecture from "../images/Architecture.jpg";
import Construction from "../images/Construction.jpg";

import TalentManagement from "../images/TalentManagement.jpeg";
import Afterparties from "../images/Afterparties.jpg";
import Music from "../images/Music.jpg";
import Commercial from "../images/Commercial.jpg";
import Logistics from "../images/Logistics.jpg";
import UniversityPartnerships from "../images/UniversityPartners.jpg";


const Home = () => {
    return (
        <div className="page">
          {/* 🔥 TOP LARGE GRID */}
          <div className="layout">
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
    
            <div className="col">
              <div
                className="box top"
                style={{ backgroundImage: `url(${Afterparties})` }}
              >
                <h2>Afterparties</h2>
              </div>
    
              <div className="bottom parent-h">
                <div
                  className="box left"
                  style={{ backgroundImage: `url(${Music})` }}
                >
                  <h2>Music</h2>
                </div>
    
                <div className="right parent-v">
                  <div
                    className="box top"
                    style={{ backgroundImage: `url(${TalentManagement})` }}
                  >
                    <h2>
                      Talent <br /> Management
                    </h2>
                  </div>
    
                  <div
                    className="box bottom"
                    style={{ backgroundImage: `url(${Logistics})` }}
                  >
                    <h2>Logistics</h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
    
          {/* 🔽 SMALL GRID */}
          <div className="extra-layout">
            <div className="row">
              <div
                className="extra-box"
                style={{ backgroundImage: `url(${Commercial})` }}
              >
                <h2>Commercial</h2>
              </div>
    
              <div
                className="extra-box"
                style={{ backgroundImage: `url(${UniversityPartnerships})` }}
              >
                <h2>
                  University <br /> Partners
                </h2>
              </div>
    
              <div className="extra-box multi-tile">
                <div className="multi-item">Ventures</div>
                <div className="multi-item">Media</div>
                <div className="multi-item">App/Web <br></br> Development</div>
                <div className="multi-item">
                  Architecture &<br />
                  Interior Design
                </div>
                <div className="multi-item">Private Office</div>
              </div>
            </div>
          </div>
        </div>
      );
}

export default Home