import React from 'react';


class DeleteChannelModal extends React.Component {
  constructor(props) {
    super(props);
    this.channelName = props.channels[props.channelId].name;

    this.handleDelete = this.handleDelete.bind(this);


  }

  handleDelete() {
    this.props.deleteChannel(this.props.channelId);
    this.props.closeModal();
  }


  render() {

    return (
      <div className="leave-team-modal">
        <h2>Delete '{this.channelName}'</h2>
        <p>Are you sure you want to delete <strong>{this.channelName}</strong>?</p>
        <div className="leave-modal-footer">
          <p
            onClick={this.props.closeModal}
            className="cancel-button">Cancel</p>
            <button onClick={this.handleDelete}>Delete Channel</button>
        </div>
      </div>
    );
  }

}

export default DeleteChannelModal;