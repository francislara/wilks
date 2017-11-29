import React from 'react';

class CreateModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: ''
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleInput = this.handleInput.bind(this);

  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.createTeam(this.state);
    this.props.closeModal();
  }

  handleInput() {
    return (e) => {
      this.setState({
        name: e.target.value
      });
    };
  }

  render() {
    return (
      <div className="create-modal-container">
        
        <div>
          <h2>Create a Team</h2>
          <p>By creating a team, you will be able to chat amongst your friends for free!</p>  
        </div>
        <form>
          <label>Team Name
            <input
              type="text"
              value={this.state.name}
              onChange={this.handleInput()} />
          </label>
        </form>
        <div className="modal-footer">
        
          <div 
            className="back-button" 
            onClick={this.props.openMainModal}>
            <i className="fa fa-arrow-left" aria-hidden="true"></i>  <p>Back</p>
          </div>
          <button onClick={this.handleSubmit}>Create</button>
        </div>
      </div>
    );
  }
}

export default CreateModal;