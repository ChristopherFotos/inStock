import React from "react";
import "./Modal.scss";
import x from "../../images/Icons/close-24px.svg"
import PropTypes from "prop-types";

export default class Modal extends React.Component {
  constructor(props) {
    super(props);
          this.state = {
        // //   data: ''
            };
    }
    componentDidMount(){
      let id = this.props.match.params.id
      axios.get(`http://localhost:8080/warehouses/${id}`)
          .then(res => {
              this.setState(res.data)
          })
  }
    handleDelete(){
      let id = this.props.match.params.id
      axios.delete(`http://localhost:8080/warehouses/${id}`, this.state)
          .then(res=>this.props.history.splice(`/warehouse/${res.data.id}`))
  }

  showModal = e => {
    this.setState({
      show: !this.state.show
    });
  };

  onClose = e => {
    this.props.onClose && this.props.onClose(e);
  };

  render() {
    if (!this.props.show) {
      return null;
    }
    return (
      <div className="modal-backdrop">
          <div className="modal">
              <form method="DELETE" id="delete_warehouse" className="modal-form">
                <div className="modal__container" id="modal">
                  <div className="modal__close-container">
                      <div className="modal__close-but" onClick={this.onClose}><div className="modal__close-x">X
                      </div>
                  </div>
                </div>
        {/* need to use dynamic content */}
                <h1 className="modal__title">Delete [King West] warehouse?</h1>
                <div className="modal__copy">{this.props.children}</div>
                <div className="modal__but-container">
                    <div className="modal__cancel-but" id="cancel" onClick={this.onClose}>Cancel
                    </div>       
                    {/* needs a function handleDelete to delete data */}
                    <div className="modal__delete-but" id="delete" onClick={(e)=>this.handleDelete(e)}>Delete
                    </div>
                </div>
                </div>
              </form>
          </div>
      </div>
   
    );
  }
}
export default Modal;

Modal.propTypes = {
  onClose: PropTypes.func.isRequired,
  show: PropTypes.bool.isRequired
};