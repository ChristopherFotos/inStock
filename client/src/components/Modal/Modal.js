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
        <div className="modal__container" id="modal">
         <div className="modal__close-container">
          <div className="modal__close-but" onClick={this.onClose}><div className="modal__close-x">X</div>
          </div>
        </div>
          <h1 className="modal__title">Delete [King West] warehouse?</h1>
          <div className="modal__copy">{this.props.children}</div>
          <div className="modal__but-container">
              <div className="modal__cancel-but" onClick={this.onClose}>Cancel
              </div>       
              <div className="modal__delete-but" onClick={this.onClose}>Delete
              </div>
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