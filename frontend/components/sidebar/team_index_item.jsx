import React from 'react';

const TeamIndexItem = ({ team }) => {
  let name = team.name;
  let imgUrl = team.img_url;
  if (!imgUrl) {
    return (
      <div className="team-index-item">
        <p className="default-team-image">
          {name.toUpperCase().slice(0,1)}
        </p>
      </div>
    );
  }
};

export default TeamIndexItem;