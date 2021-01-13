import './Modal.scss';
import Modal from './components/Modal';
import React from 'react';

class Parent extends React.Component {
  state = {
    show: false
  };

  showModal = e => {
    this.setState({
      show: !this.state.show
    });
  };

  render() {
    return (
      <div className="App">
            <button
          className="toggle-button"
          id="centered-toggle-button"
          onClick={e => {
            this.showModal(e);
          }}
          >
          {" "}
          show Modal{" "}</button>
          <Modal onClose={this.showModal} show={this.state.show}>
          Please confirm that you'd like to delete [the King West] from the list of warehouses. You won't be able to undo this action.
        </Modal>
      </div>
    );
  }
}
export default Parent;