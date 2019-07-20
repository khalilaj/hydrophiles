import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { getSystem } from "../../actions/system";

export class System extends Component {
  static propTypes = {
    system: PropTypes.array.isRequired,
    getSystem: PropTypes.func.isRequired
  };

  componentDidMount() {
    this.props.getSystem();
  }

  render() {
    return (
      <Fragment>
        <div className="container">
          <h1 className=" text-primary text-center visible-xs-block, hidden-xs hidden-sm-down ">
            Systems{" "}
          </h1>

          <hr className="bg-primary" style={{ borderColor: "50px solid" }} />
          <div className="row" style={{ marginTop: "50px" }}>
            {this.props.system.map(system => (
              <div className="col-lg-4 col-sm-6 mb-4" key={system.id}>
                <div className="card h-100">
                  <Link to="/conditions/">
                    <img
                      style={{ height: "200px" }}
                      className="card-img-top"
                      src={system.system_photo}
                      alt="http://placehold.it/700x400"
                    />
                  </Link>
                  <div className="card-body">
                    <h4 className="card-title">
                      <Link to="/conditions/">{system.system_name}</Link>
                    </h4>
                    <p className="card-text">{system.system_description}</p>
                  </div>
                  <div className="card-footer text-center">
                    <Link to="/conditions/" className="btn btn-primary">
                      View More
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Fragment>
    );
  }
}

const mapStateToProps = state => ({
  system: state.system.systems
});

export default connect(
  mapStateToProps,
  { getSystem }
)(System);
