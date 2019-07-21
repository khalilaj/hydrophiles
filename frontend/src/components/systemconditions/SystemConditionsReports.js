import React, { PureComponent } from "react";
import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  Legend,
  PieChart,
  Pie,
  Tooltip,
  RadialBarChart,
  RadialBar,
  LineChart,
  Line,
  CartesianGrid
} from "recharts";

import { connect } from "react-redux";
import PropTypes from "prop-types";

export class SystemConditionsReports extends PureComponent {
  static propTypes = {
    conditions: PropTypes.array.isRequired
  };

  static jsfiddleUrl = "https://jsfiddle.net/alidingling/30763kr7/";

  render() {
    return (
      <div style={{ marginTop: "10px" }}>
        <h1 className=" text-primary text-center visible-xs-block, hidden-xs hidden-sm-down ">
          Reports{" "}
        </h1>
        <hr
          className="bg-primary"
          style={{ borderColor: "50px solid", marginBottom: "10px" }}
        />
        <div className="conatiner row mt-2" style={{ marginBottom: "10px" }}>
          <div className="col conatiner " style={{ marginTop: "25px" }}>
            <h4 className=" text-primary visible-xs-block, hidden-xs hidden-sm-down ">
              Conditions Bar Graph{" "}
            </h4>
            <hr className="primary" style={{ marginBottom: "10px" }} />
            <BarChart
              width={1000}
              height={400}
              data={this.props.conditions}
              margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 5
              }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="created_at" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="humidity_levels" fill="#8884d8" />
              <Bar dataKey="temp_levels" fill="#a83232" />
              <Bar dataKey="oxygen_levels" fill="#2377cc" />
              <Bar dataKey="ph_levels" fill="#decd33" />
            </BarChart>
          </div>

          <div className="col conatiner" style={{ marginTop: "25px" }}>
            <h4 className=" text-primary visible-xs-block, hidden-xs hidden-sm-down ">
              Conditions Stacked Bar Graph{" "}
            </h4>
            <hr className="primary" style={{ marginBottom: "10px" }} />
            <BarChart
              width={1000}
              height={400}
              data={this.props.conditions}
              margin={{
                top: 20,
                right: 30,
                left: 20,
                bottom: 5
              }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="created_at" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="humidity_levels" fill="#8884d8" stackId="a" />
              <Bar dataKey="temp_levels" fill="#a83232" stackId="a" />
              <Bar dataKey="oxygen_levels" fill="#2377cc" stackId="a" />
              <Bar dataKey="ph_levels" fill="#decd33" stackId="a" />
            </BarChart>
          </div>
        </div>
        <div className="conatiner row mt-2">
          <div
            className="col"
            style={{ marginTop: "25px", marginBottom: "25px" }}
          >
            <h4 className=" text-primary visible-xs-block, hidden-xs hidden-sm-down ">
              Conditions Stacked Bar Graph{" "}
            </h4>
            <hr className="primary" style={{ marginBottom: "10px" }} />
            <LineChart
              width={1000}
              height={400}
              data={this.props.conditions}
              margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 5
              }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="created_at" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line
                type="monotone"
                dataKey="oxygen_levels"
                stroke="#2377cc"
                activeDot={{ r: 8 }}
              />
              <Line
                type="monotone"
                dataKey="temp_levels"
                stroke="#a83232"
                activeDot={{ r: 8 }}
              />
              <Line
                type="monotone"
                dataKey="humidity_levels"
                stroke="#8884d8"
                activeDot={{ r: 8 }}
              />
              <Line
                type="monotone"
                dataKey="ph_levels"
                stroke="#decd33"
                activeDot={{ r: 8 }}
              />
            </LineChart>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  conditions: state.conditions.conditions
});

export default connect(mapStateToProps)(SystemConditionsReports);
