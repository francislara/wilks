import React from 'react';

class ChannelIndexItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };

  }

  render() {
    console.log(this.props);

    if(this.props.channel)
    {
      return (
        <div className="channel-item">
          <p># </p> <p className="channel-name"> {`${this.props.channel.name}`}</p>
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