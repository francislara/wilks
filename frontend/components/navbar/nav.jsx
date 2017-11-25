import React from 'react';
import Modal from 'react-modal';

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
    console.log(this.state.img_url);
    return (
      <div className="nav-bar">
        <div className="nav-user"><img src={this.state.img_url} /> <p>{this.state.username}</p></div><div className="nav-modal"><i onClick={this.handleClick} className="fa fa-cog" aria-hidden="true"></i></div>
      </div>
    );
  }
}

export default Nav;