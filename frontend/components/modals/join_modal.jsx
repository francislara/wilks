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
        <div>
          <h2>Join a Team</h2>
          <p>Enter a Team ID below to join a team! Once you join you will be able to chat with any other members of that team.</p>
        </div>
        <form>
          <label>Team ID
            <input
              type="text"
              value={this.state.id}
              onChange={this.handleInput()} />
          </label>
        </form>
        <div className="modal-footer">

          <div
            className="back-button"
            onClick={this.props.openMainModal}>
            <i className="fa fa-arrow-left" aria-hidden="true"></i>  <p>Back</p>
          </div>
          <button className="join-button" onClick={this.handleSubmit}>Join</button>
        </div>
      </div>
    );
  }
}

export default JoinModal;