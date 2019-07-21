import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { getCrops, deleteCrops } from "../../actions/systemcrops";
import Moment from "react-moment";

import ReactTable from "react-table";
import "react-table/react-table.css";

import SystemCropEditForm from "./SystemCropEditForm";

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
        Header: "Created At",
        accessor: "created_at",
        Cell: row => <Moment date={row.value} />
      },
      {
        Header: "Updated On",
        accessor: "updated_on",
        Cell: row => <Moment date={row.value} />
      },
      {
        Header: "Crop Name",
        accessor: "system_crop_name",
        filterMethod: (filter, row) => row[filter.id].includes(filter.value)
      },
      {
        Header: "Seedling Amount",
        accessor: "system_seedlings_amount",
        filterMethod: (filter, row) => row[filter.id].includes(filter.value)
      },
      {
        Header: "Edit",
        accessor: "id",
        Cell: row => (
          <SystemCropEditForm
            rowVal={row.value}
            rowIndex={row.index}
            row={row}
          />
        )
      },
      {
        Header: "Delete",
        accessor: "id",
        Cell: row => (
          <button
            onClick={this.props.deleteCrops.bind(this, row.value)}
            className="btn btn-danger btn-sm"
          >
            {" "}
            Delete
          </button>
        )
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
  { getCrops, deleteCrops }
)(SystemCrop);
