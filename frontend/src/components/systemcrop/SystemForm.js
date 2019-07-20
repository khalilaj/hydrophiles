import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { addSystem } from "../../actions/system";

export class SystemForm extends Component {
  state = {
    system_name: "",
    system_description: "",
    system_photo: null
  };

  static propTypes = {
    addSystem: PropTypes.func.isRequired
  };

  onChange = e => this.setState({ [e.target.name]: e.target.value });

  handleImageChange = e => {
    this.setState({
      system_photo: e.target.files[0]
    });
  };

  onSubmit = e => {
    e.preventDefault();
    const { system_name, system_description, system_photo } = this.state;
    const formData = new FormData();

    formData.append("system_name", system_name);
    formData.append("system_description", system_description);
    formData.append("system_photo", system_photo);
    this.props.addSystem(formData);

    this.setState({
      system_name: "",
      system_description: "",
      system_photo: ""
    });
  };

  render() {
    const { system_name, system_description, system_photo } = this.state;
    return (
      <div className="mt-3">
        <button
          style={{ marginRight: "150px" }}
          type="button"
          className="btn btn-primary text-center float-right"
          data-toggle="modal"
          data-target="#exampleModal"
        >
          Add System
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
                <h5 className="modal-title ">Add System</h5>
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
                    <label>System Name</label>
                    <input
                      className="form-control"
                      type="text"
                      name="system_name"
                      onChange={this.onChange}
                      value={system_name}
                    />
                  </div>
                  <div className="form-group">
                    <label>System Photo</label>
                    <input
                      type="file"
                      id="system_photo"
                      accept="image/png, image/jpeg"
                      onChange={this.handleImageChange}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label>System Description</label>
                    <input
                      className="form-control"
                      type="text"
                      name="system_description"
                      onChange={this.onChange}
                      value={system_description}
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
  { addSystem }
)(SystemForm);
