import React from 'react';

class Nav extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modalOpen: false,
      username: this.props.user.username,
      img_url: this.props.user.img_url
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    e.preventDefault();
    this.props.logout();
  }

  render() {
    return (
      <div className="nav-bar">
        <p>{this.state.username}</p> <p className="logout-button" onClick={this.handleClick}>logout</p>
      </div>
    );
  }
}

export default Nav;