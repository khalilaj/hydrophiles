import React, { Component } from "react";
import { connect } from "react-redux";
import { addCrops } from "../../actions/systemcrops";

export class SystemCropAddForm extends Component {
  state = {
    system_crop_name: "",
    system_seedlings_amount: "",
    system_crop_description: "",
    system_crop_photo: null
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

  render() {
    const {
      system_crop_name,
      system_crop_description,
      system_seedlings_amount,
      system_crop_photo
    } = this.state;
    return (
      <div className="mt-3">
        <button
          style={{ marginRight: "150px" }}
          type="button"
          className="btn btn-primary text-center float-right"
          data-toggle="modal"
          data-target="#exampleModal"
        >
          Add System Crop
        </button>
        <div
          className="modal fade"
          id="exampleModal"
          tabIndex="-1"
          role="dialog"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header  ">
                <h5 className="modal-title ">Add System Crop</h5>
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
                      value={system_crop_name}
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
                      value={system_seedlings_amount}
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
                      value={system_crop_description}
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

export default connect(
  null,
  { addCrops }
)(SystemCropAddForm);
