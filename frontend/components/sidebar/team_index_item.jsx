import React from 'react';

class TeamIndexItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: props.team.name,
      imgUrl: props.team.img_url,
      key: props.keys
    };

  }
 
  render() {
    if (!this.state.imgUrl) {
      return (
        <div className="team-index-item">
          <div className="default-team-image">
            <p>
              {this.state.name.toUpperCase().slice(0, 1)}
            </p>
          </div>
        </div>
      );
    } 
  }

}

export default TeamIndexItem;