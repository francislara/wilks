import React from 'react';

class ChannelHeader extends React.Component {
  constructor(props) {
    super(props);

  }

  render() {
    let channelId = parseInt(this.props.match.params.channelId);
    // { this.props.channels[channelId].name }
    
    if(this.props.channels[channelId]) {
      // console.log(this.props.channels[channelId].name);

      return (
        <div className="channel-header"> <p>#</p> <p className="channel-name">{this.props.channels[channelId].name}</p> </div>
      );

    } else {
      return (
        <div className="channel-header"></div>
      );
    }
  }
}

export default ChannelHeader;