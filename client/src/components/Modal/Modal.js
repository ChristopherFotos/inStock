import React from "react";
import "./Modal.scss";
import x from "../../images/Icons/close-24px.svg"
// import PropTypes from "prop-types";

function Modal({info}) {
    // constructor(props) {
  //   super(props);
  //         this.state = {
  //       // //   data: ''
  //           };
  //   }
    componentDidMount(){
      axios.get(`http://localhost:8080/warehouses/${this.props.info.id}`, this.state)

  }
  handleDelete(){
    axios.delete(`http://localhost:8080/warehouses/${this.props.info.id}`, this.state)
}
 
/* moved to warehouse/card */
  // showModal = e => {
  //   this.setState({
  //     show: !this.state.show
  //   });
  // };

  onClose = e => {
    this.props.onClose && this.props.onClose(e);
  };

  // render() {
  //   if (!this.props.show) {
  //     return null;
  //   }
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
                <h1 className="modal__title">Delete {this.props.name} warehouse?</h1>
                <div className="modal__copy">Please confirm that you'd like to delete {this.props.name} from the list of warehouses. You won't be able to undo this action.</div>
                <div className="modal__but-container">
                    <div className="modal__cancel-but" id="cancel" onClick={this.onClose}>Cancel
                    </div>       
                    {/*  function handleDelete to delete data */}
                    <div className="modal__delete-but" id="delete" onClick={(e)=>this.handleDelete(e)}>Delete
                    </div>
                </div>
                </div>
              </form>
          </div>
      </div>
    );
  }

export default Modal;

// Modal.propTypes = {
//   onClose: PropTypes.func.isRequired,
//   show: PropTypes.bool.isRequired
// };