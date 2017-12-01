import React from 'react';
import Modal from 'react-modal';
import ChannelIndexItemContainer from './channel_index_item_container';
import ChannelIndexItem from './channel_index_item';
import ScrollArea from 'react-scrollbar';
import { NavLink } from 'react-router-dom';

class ChannelIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };

    
  }

  componentWillMount() {
    this.props.getChannelsIndex();
  }


  // componentWillReceiveProps(nextProps) {
  //   this.setState({
  //     channel_keys: this.props.teams[this.props.match.params.teamId].channels
  //   });
  //   if (nextProps.channels !== this.props.channels) {
  //     // this.props.getChannelsIndex(this.props.match.params.teamId);
  //     this.setState({
  //       channel_keys: nextProps.teams[nextProps.match.params.teamId].channels
  //     });
  //   }
  // }

  render() {
    let teamId = this.props.match.params.teamId;
    const currentTeam = this.props.teams[teamId];
    let channelKeys;
    if(currentTeam) {
      channelKeys = currentTeam.channels;
      
      return (
        <div className="channel-scrollarea">
        <ScrollArea
          speed={0.8}
          horizontal={false}
        >
        <div className="lazy-padding"></div>
        {
          channelKeys.map(key => {
            return (
              <NavLink 
                key={`${teamId}/${key}`} 
                to={`/teams/${teamId}/${key}`}
                id={`channel-navlink-${key}`}>
                <ChannelIndexItem
                  keys={key}
                  channel={this.props.channels[key]} 
                  userId={this.props.user_id}/>
              </NavLink>
            );
          })
        }
        </ScrollArea>
        </div>
      );
    } else {
      return(
        
        <div></div>
      );
    }
    
  }
}

export default ChannelIndex;