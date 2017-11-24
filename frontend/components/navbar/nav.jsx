import React from 'react';

class Nav extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modalOpen: false,
      username: this.props.user.username,
      img_url: this.props.user.img_url
    };
  }
}