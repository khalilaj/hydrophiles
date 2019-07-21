import React, { Component } from "react";

import _ from "lodash";
import PropTypes from "prop-types";
import { connect } from "react-redux";

class SystemCropEditForm extends Component {
  static propTypes = {
    crops: PropTypes.array.isRequired
  };
  state = {
    system_crop_name: "",
    system_seedlings_amount: "",
    system_crop_description: "",
    system_crop_photo: null,
    defaultValue: []
  };

  onChange = e => this.setState({ [e.target.name]: e.target.value });

  handleImageChange = e => {
    this.setState({
      system_crop_photo: e.target.files[0]
    });
  };

  onSubmit = e => {
    e.preventDefault();
    const {
      system_crop_name,
      system_crop_description,
      system_crop_photo,
      system_seedlings_amount
    } = this.state;
    const formData = new FormData();

    formData.append("system_crop_name", system_crop_name);
    formData.append("system_seedlings_amount", system_seedlings_amount);
    formData.append("system_crop_description", system_crop_description);
    formData.append("system_crop_photo", system_crop_photo);
    this.props.addCrops(formData);

    this.setState({
      system_crop_name: "",
      system_crop_description: "",
      system_seedlings_amount: "",
      system_crop_photo: ""
    });
  };

  componentDidMount() {
    const id = this.props.rowVal;
    const myArr = this.props.crops ? this.props.crops : [];
    const defaultValue = _.find(myArr, function(o) {
      return o.id === id;
    });
    this.setState({
      defaultValue: defaultValue,
      system_crop_photo: defaultValue.system_crop_photo
    });
  }

  render() {
    const {
      system_crop_name,
      system_crop_description,
      system_seedlings_amount,
      system_crop_photo,
      defaultValue
    } = this.state;

    // const system_crop_name = defaultValue.system_crop_name;
    // const system_crop_description = defaultValue.system_crop_description;
    // const system_seedlings_amount = defaultValue.system_seedlings_amount;
    // const system_crop_photo = defaultValue.system_crop_photo;

    console.log(this.props.row);

    return (
      <div className="mt-3">
        <button
          style={{ marginRight: "150px" }}
          type="button"
          className="btn btn-primary btn-sm "
          data-toggle="modal"
          data-target="#editModal"
        >
          Edit
        </button>
        <div
          className="modal fade"
          id="editModal"
          tabIndex="-1"
          role="dialog"
          aria-labelledby="editModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header  ">
                <h5>Edit Crop</h5>
                <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
                <form onSubmit={this.onSubmit}>
                  <div className="form-group">
                    <label>System Crop Name</label>
                    <input
                      className="form-control"
                      type="text"
                      name="system_crop_name"
                      onChange={this.onChange}
                      defaultValue={this.props.row.original.system_crop_name}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label>System Crop Seedling Amount</label>
                    <input
                      className="form-control"
                      type="text"
                      name="system_seedlings_amount"
                      onChange={this.onChange}
                      defaultValue={defaultValue.system_seedlings_amount}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label>System Crop Photo</label>
                    <input
                      type="file"
                      id="system_crop_photo"
                      accept="image/png, image/jpeg"
                      onChange={this.handleImageChange}
                    />
                  </div>
                  <div className="form-group">
                    <label>System Crop Description</label>
                    <input
                      className="form-control"
                      type="text"
                      name="system_crop_description"
                      onChange={this.onChange}
                      defaultValue={defaultValue.system_crop_description}
                    />
                  </div>
                  <div className="form-group text-center">
                    <button type="submit" className="btn  btn-primary">
                      Submit
                    </button>
                  </div>
                </form>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-dismiss="modal"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  crops: state.crops.crops
});

export default connect(mapStateToProps)(SystemCropEditForm);
