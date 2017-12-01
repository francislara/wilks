import React from 'react';
import ScrollArea from 'react-scrollbar';

class MessageIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      body: '',
      channel_id: parseInt(this.props.match.params.channelId),
      messages: this.props.messages
    };
  }

  componentWillMount() {
    this.props.getMessageIndex();
  }

  componentWillReceiveProps(nextProps) {
    if(nextProps.messages !== this.props.messages){
      this.setState({messages: nextProps.messages});
    }
  }

  render() {
    let channelId = parseInt(this.props.match.params.channelId);
    let currentChannel = this.props.channels[channelId];
    let currentName, messageKeys;
    
    if (currentChannel) {
      messageKeys = currentChannel.messages;
      currentName = currentChannel.name;
    } else {
      currentName = '';
      messageKeys = [];
    }
    let lastAuthor;
    return (

    <div className="message-index">
      <div className="message-scrollarea">
      <ScrollArea
        speed={0.8}
        horizontal={false} >
        {
          messageKeys.map(key => {
            let currentMessage = this.props.messages[key];
            let timestamp;
            if(currentMessage) {
              timestamp = currentMessage.timestamp;
            }
            let body = currentMessage.body;
            let author = this.props.users[currentMessage.author_id].username;
            if (lastAuthor !== author && lastAuthor) {
              lastAuthor = author;
              return (
                <div className="message-container" key={`message${key}`}>
                  <div className="message-separator"></div>
                  <div className="message-content">
                    <p className="msg-timestamp">{timestamp}</p>
                    <p className="msg-author">{author}</p>
                    <p className="msg-body">{body}</p>
                  </div>
                </div>
              );
            } else {
              lastAuthor = author;
              return (
                <div className="message-container" key={`message${key}`}>
                  <div className="message-content">
                    <p className="msg-timestamp">{timestamp}</p>
                    <p className="msg-author">{author}</p>
                    <p className="msg-body">{body}</p>
                  </div>
                </div>
              );
            }
            
          })
        }
      </ScrollArea>
      </div>
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