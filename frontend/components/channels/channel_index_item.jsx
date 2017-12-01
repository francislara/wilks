import React from 'react';

class ChannelIndexItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };

  }

  render() {
    console.log(this.props);
    return (
      <div>
        {
          this.props.channel ? this.props.channel.name : ' '
        }
      </div>
    );
  }
}

export default ChannelIndexItem;