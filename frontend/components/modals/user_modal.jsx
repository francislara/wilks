import React from 'react';

class UserModal extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="user-modal">
        
        <p onClick={this.props.logout}>Logout</p>
      </div>
    );
  }
}


export default UserModal;