import './Modal.scss';
import Modal from './components/Modal';
import React from 'react';

class Parent extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      show: false,  
      opacity: 1
    };
    this.handleModal = this.handleModal.bind(this)
  }
    showModal = e => {
      this.setState({
        show: !this.state.show
      });
    };
    
    handleModal (e) {
      this.setState({
        opacity: .5
      })
    }

  render() {
    return (
      <div className="App">
            <button
              className="toggle-button"
              id="centered-toggle-button"
              onClick={e => {
                this.showModal(e);
                this.handleModal(e);
              }}
              >
              {" "}
              show Modal{" "}</button>
               {/* pass props to modal */}
          body text here ... aghoweaghowhgwgheoghwoghergaw
          <Modal onClose={this.showModal} show={this.state.show}>
          Please confirm that you'd like to delete [the King West] from the list of warehouses. You won't be able to undo this action.
        </Modal>
      </div>
    );
  }
}
export default Parent;