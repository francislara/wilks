import React from 'react';
import Modal from 'react-modal';
import DeleteChannelModalContainer from '../modals/delete_channel_modal_container';

const customStyles = {
  overlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    zIndex: '4'
  },
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    backgroundColor: '#2f3136',
    border: 0
  }
};

class ChannelIndexItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modalOpen: false
    };

    this.closeModal = this.closeModal.bind(this);
    this.openModal = this.openModal.bind(this);

  }

  openModal(e) {
    e.preventDefault();
    this.setState({
      modalOpen: true,
    });
  }

  closeModal(e) {
    e.preventDefault();
    this.setState({
      modalOpen: false
    });
  }

  render() {
    // let classList = document.getElementById(`channel-navlink-${this.props.keys}`).className.split(/\s+/);
    // let selected = classList.includes('active');

    if(this.props.channel)
    {
      let classList, selected;
      if (document.getElementById(`channel-navlink-${this.props.keys}`))
      {
        classList = document.getElementById(`channel-navlink-${this.props.keys}`).className.split(/\s+/);
        selected = classList.includes('active');
      }
      return (
        <div className="channel-item">
          <div className="channel-name-container">
            <p>#</p><p className="channel-name">{`${this.props.channel.name}`}</p>
          </div>
          {
            (this.props.user_id === this.props.channel.owner_id && selected) ? 
              <div 
                className="delete-channel"
                onClick={this.openModal}>
                <i className="fa fa-times" aria-hidden="true"></i></div> :
              <div></div>
          }

          <Modal
            isOpen={this.state.modalOpen}
            style={customStyles}
            onRequestClose={this.closeModal}>
            {/* <div></div> */}
            <DeleteChannelModalContainer
              closeModal={this.closeModal}
              channelId={this.props.keys} />
          </Modal>
          
        </div>
      );
    } else {
      return (
        <div className="channel-item"></div>
      );
    }
  }
}

export default ChannelIndexItem;