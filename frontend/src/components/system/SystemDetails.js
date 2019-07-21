import React, { Component } from "react";
import { Link } from "react-router-dom";

import SystemConditionsReports from "../systemconditions/SystemConditionsReports";
import SystemConditionsList from "../systemconditions/SystemConditionsList";
import SystemDashboard from "./SystemDashboard";
import SystemCropDashboard from "../systemcrop/SystemCropDashboard";
import SystemProfile from "./SystemProfile";

export class SystemDetails extends Component {
  render() {
    return (
      <div style={{ paddingTop: "10px" }}>
        <ul className="nav nav-pills mb-3 " id="pills-tab" role="tablist">
          <li className="nav-item">
            <a
              className="nav-link active"
              id="pills-home-tab"
              data-toggle="pill"
              href="#pills-home"
              role="tab"
              aria-controls="pills-home"
              aria-selected="true"
            >
              System Conditions
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link"
              id="pills-profile-tab"
              data-toggle="pill"
              href="#pills-profile"
              role="tab"
              aria-controls="pills-profile"
              aria-selected="false"
            >
              System Crops
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link"
              id="pills-contact-tab"
              data-toggle="pill"
              href="#pills-contact"
              role="tab"
              aria-controls="pills-contact"
              aria-selected="false"
            >
              System Pump
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link"
              id="pills-contact-tab"
              data-toggle="pill"
              href="#pills-details"
              role="tab"
              aria-controls="pills-contact"
              aria-selected="false"
            >
              System Details
            </a>
          </li>
        </ul>
        <hr />
        <div className="tab-content" id="pills-tabContent">
          <div
            className="tab-pane fade show active"
            id="pills-home"
            role="tabpanel"
            aria-labelledby="pills-home-tab"
          >
            <div className="container">
              <SystemConditionsList />
              <SystemConditionsReports />
            </div>
          </div>
          <div
            className="tab-pane fade"
            id="pills-profile"
            role="tabpanel"
            aria-labelledby="pills-profile-tab"
          >
            <div>
              <SystemCropDashboard />
            </div>
          </div>
          <div
            className="tab-pane fade"
            id="pills-contact"
            role="tabpanel"
            aria-labelledby="pills-contact-tab"
          >
            <div>
              <SystemCropDashboard />
            </div>
          </div>
          <div
            className="tab-pane fade"
            id="pills-details"
            role="tabpanel"
            aria-labelledby="pills-profile-tab"
          >
            <div>
              <SystemProfile />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default SystemDetails;
