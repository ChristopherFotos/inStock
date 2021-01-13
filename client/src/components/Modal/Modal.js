import React from "react";
import "./Modal.scss";
import PropTypes from "prop-types";

export default class Modal extends React.Component {
  onClose = e => {
    this.props.onClose && this.props.onClose(e);
  };
  render() {
    if (!this.props.show) {
      return null;
    }
    return (
  <div className="modal">
      <div className="modal" id="modal">
        <h1 className="modal__title">Modal Window</h1>
        <div className="modal__copy">{this.props.children}</div>
        <div className="modal__but-container">
          <button className="modal__delete-but" onClick={this.onClose}>
            close
          </button>
        </div>
      </div>
  </div>
    );
  }
}
Modal.propTypes = {
  onClose: PropTypes.func.isRequired,
  show: PropTypes.bool.isRequired
};