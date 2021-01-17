import React from "react";
import "./Modal.scss";
import axios from 'axios';
import x from "../../images/Icons/close-24px.svg"


function Modal({info}) {

    componentDidMount(){
      axios.get(`http://localhost:8080/warehouses/${this.props.info.id}`, this.state)

  }
  handleDelete(){
    axios.delete(`http://localhost:8080/warehouses/${this.props.info.id}`, this.state)
}
 
  onClose = e => {
    this.props.onClose && this.props.onClose(e);
  };

    return (
      <div className="modal-backdrop">
          <div className="modal">
              <form method="DELETE" id="delete_warehouse" className="modal-form">
                <div className="modal__container" id="modal">
                  <div className="modal__close-container">
                      <div className="modal__close-but" onClick={this.props.close}><div className="modal__close-x">X
                      </div>
                  </div>
                </div>
        {/* use dynamic content */}
                <h1 className="modal__title">Delete {this.props.name} warehouse?</h1>
                <div className="modal__copy"><p> Please confirm that you'd like to delete the {this.props.name} from the list of warehouses. You won't be able to undo this action</p></div>

                <div className="modal__but-container">
                    <div className="modal__cancel-but" id="cancel" onClick={this.props.close}>Cancel
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
