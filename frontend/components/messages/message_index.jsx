import React from 'react';
import ScrollArea from 'react-scrollbar';


class MessageIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      body: '',
      // channel_id: ''
    };
  }

  render() {
    let channelId = parseInt(this.props.match.params.channelId);
    let currentChannel = this.props.channels[channelId];
    let currentName;
    if (currentChannel) {
      currentName = currentChannel.name;
    } else {
      currentName = '';
    }
    return (

    <div className="message-index">
      <div className="message-scrollarea">scroll area</div>
      <form> 
        <div className="input-container">
          <div className="message-padding"></div>
          <input 
            type="text" 
            placeholder={`Message #${currentName}`}/> 
        </div>
      </form>
    </div>

    );
    
  }
}

export default MessageIndex;