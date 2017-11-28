import React from 'react';

class JoinModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: ''
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleInput = this.handleInput.bind(this);
    
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.joinTeam(parseInt(this.state.id));
    this.props.closeModal();
  }
  
  handleInput() {
    return (e) => {
      this.setState({
        id: e.target.value
      });
    };
  }
  
  render() {
    return (
      <div className="join-modal-container">
        <h2>Join a Team</h2>
        <form>
          <label>Team ID</label>
          <input 
            type="text" 
            value={this.state.id}
            onChange={this.handleInput()} />
          <button onClick={this.handleSubmit}>Join</button>
        </form>
        <div onClick={this.props.openMainModal}>Back</div>
      </div>
    );
  }
}

export default JoinModal;