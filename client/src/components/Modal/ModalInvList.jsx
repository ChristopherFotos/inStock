import React from "react";
import "./Modal.scss";
import axios from 'axios';
import close from '../../assets/images/Icons/close-24px.svg';


class ModalInvList extends React.Component {
  constructor(props) {
    super(props);     
  }
  handleDelete(){
    axios.delete(`http://localhost:8080/inventory/${this.props.id}`)  
    .catch (err => {
      console.log(err)
    })
}
  
 
    render () {
    return (
      <div className="modal-backdrop">
          <div className="modal">
              <form method="DELETE" id="delete_warehouse" className="modal-form">
                <div className="modal__container" id="modal">
                  <div className="modal__close-container">
                      <div className="modal__close-but" onClick={this.props.close}><img className="modal__close-x" src={close} alt='Big X in the corner'>
                      </img>
                  </div>
                </div>
        {/* use dynamic content */}
                <h1 className="modal__title">Delete {this.props.items.itemName} inventory item?</h1>
                <div className="modal__copy"><p> Please confirm that you'd like to delete the {this.props.itemName} from the inventory list. You won't be able to undo this action</p></div>

                <div className="modal__but-container">
                    <div className="modal__cancel-but" id="cancel" onClick={this.props.close}>Cancel
                    </div>       
                    {/*  function handleDelete to delete data */}
                    <div className="modal__delete-but" id="delete" onClick={() => {this.handleDelete(); this.props.makeRequest()}}>Delete
                    </div>
                </div>
                </div>
              </form>
          </div>
      </div>
    );
  }
}

export default ModalInvList;
