import React from 'react';

class CreateChannelModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      team_id: props.teamId
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleInput = this.handleInput.bind(this);

  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.createChannel(this.state);
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
      <div className="create-channel-modal">

        <div>
          <h2>Create Text Channel</h2>
        </div>
        <form className='create-channel-form'>
          <label>Channel Name
            <input
              type="text"
              value={this.state.name}
              onChange={this.handleInput()}
              placeholder="Enter a channel name." />
          </label>
        </form>
        <div className="channel-modal-footer">

          <div
            className="cancel-button"
            onClick={this.props.closeModal}>
              <p>Cancel</p>
          </div>
          <button onClick={this.handleSubmit}>Create Channel</button>
        </div>
      </div>
    );
  }
}

export default CreateChannelModal;