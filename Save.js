import React from "react";
import { Link } from "react-router-dom";
import "/style.css";

function Dashboard() {
  return (
    <div className="dashboardContainer">
      <h1> Meditation </h1>
      <div class="card shadow1">
        <h4>HEADSPACE</h4>
        <p>Application de méditation pour passer les moment difficiles.</p>
        <div className="linkToContainer">
          <a className="linkTo" href="https://www.headspace.com/">
            Learn more
          </a>
        </div>
      </div>
      <div class="card shadow2">
        <h3>Petit Bambou</h3>
        <p>Application de méditation en Français</p>
        <div className="linkToContainer">
          <a className="linkTo" href="https://www.headspace.com/">
            Learn more
          </a>
        </div>
      </div>
      <div class="card shadow2">
        <h3>Petit Bambou</h3>
        <p>Application de méditation en Français</p>
        <div className="linkToContainer">
          <a className="linkTo" href="https://www.headspace.com/">
            Learn more
          </a>
        </div>
      </div>
      <h1> Videos </h1>
      <div class="card shadow2">
        <h3>Petit Bambou</h3>
        <p>Application de méditation en Français</p>
        <div className="linkToContainer">
          <a className="linkTo" href="https://www.headspace.com/">
            Learn more
          </a>
        </div>
      </div>
      <div class="card shadow2">
        <h3>Petit Bambou</h3>
        <p>Application de méditation en Français</p>
        <div className="linkToContainer">
          <a className="linkTo" href="https://www.headspace.com/">
            Learn more
          </a>
        </div>
      </div>
    </div>
  );
}
export default Dashboard;
