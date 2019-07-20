import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { getCrops } from "../../actions/systemcrops";

import ReactTable from "react-table";
import "react-table/react-table.css";

export class SystemCrop extends Component {
  static propTypes = {
    crops: PropTypes.array.isRequired,
    getCrops: PropTypes.func.isRequired
  };

  componentDidMount() {
    this.props.getCrops();
  }

  render() {
    const columns = [
      {
        Header: "Crop Name",
        accessor: "system_crop_name",
        filterMethod: (filter, row) => row[filter.id].includes(filter.value)
      },
      {
        Header: "Seedling Amount",
        accessor: "system_seedlings_amount"
      },
      {
        Header: "Edit",
        accessor: "id"
      },
      {
        Header: "Delete",
        accessor: "id"
      }
    ];
    return (
      <div className="container" style={{ marginBottom: "20px" }}>
        <h1 className=" text-primary text-center visible-xs-block, hidden-xs hidden-sm-down ">
          Crop List
        </h1>
        <hr className="bg-primary" style={{ borderColor: "50px solid" }} />
        <ReactTable
          defaultPageSize={5}
          className="-striped -highlight"
          columns={columns}
          data={this.props.crops}
        />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  crops: state.crops.crops
});

export default connect(
  mapStateToProps,
  { getCrops }
)(SystemCrop);
