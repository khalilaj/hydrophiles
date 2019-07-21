import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getConditions } from "../../actions/systemcondition";
import Moment from "react-moment";
import ReactTable from "react-table";
import "react-table/react-table.css";

export class SystemConditionsList extends Component {
  static propTypes = {
    conditions: PropTypes.array.isRequired,
    getConditions: PropTypes.func.isRequired
  };

  componentDidMount() {
    this.props.getConditions();
  }

  render() {
    const columns = [
      {
        Header: "Created At",
        accessor: "created_at",
        Cell: row => <Moment date={row.value} />
      },
      {
        Header: "Humidity Levels",
        accessor: "humidity_levels",
        filterMethod: (filter, row) => row[filter.id].includes(filter.value)
      },
      {
        Header: "Temperature Levels",
        accessor: "temp_levels",
        filterMethod: (filter, row) => row[filter.id].includes(filter.value)
      },
      {
        Header: "Ph Levels",
        accessor: "ph_levels",
        filterMethod: (filter, row) => row[filter.id].includes(filter.value)
      },
      {
        Header: "Oxygen Levels",
        accessor: "oxygen_levels",
        filterMethod: (filter, row) => row[filter.id].includes(filter.value)
      }
    ];
    return (
      <div className="container" style={{ marginBottom: "20px" }}>
        <h1 className=" text-primary text-center visible-xs-block, hidden-xs hidden-sm-down ">
          System Conditions
        </h1>
        <hr className="bg-primary" style={{ borderColor: "50px solid" }} />
        <ReactTable
          defaultPageSize={5}
          className="-striped -highlight"
          columns={columns}
          data={this.props.conditions}
        />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  conditions: state.conditions.conditions
});

export default connect(
  mapStateToProps,
  { getConditions }
)(SystemConditionsList);
