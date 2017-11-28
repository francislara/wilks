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
        <h2>Create a Team</h2>
        <form>
          <label>Name</label>
          <input
            type="text"
            value={this.state.name}
            onChange={this.handleInput()} />
          <button onClick={this.handleSubmit}>Create</button>
        </form>
        <div onClick={this.props.openMainModal}>Back</div>
      </div>
    );
  }
}

export default CreateModal;