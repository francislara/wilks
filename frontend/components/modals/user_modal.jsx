import React from 'react';

//HOW SHOULD I HANDLE PASSWORD EDITING?
//FREEZE DEMO USER?

class UserModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: props.user.id,
      email: props.user.email,
      username: props.user.username,
      img_url: props.user.img_url
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleErrors = this.handleErrors.bind(this);
  }

  handleInput(type) {
    return (e) => {
      this.setState({
        [type]: e.target.value
      });
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.updateUser(this.state);
    this.props.closeModal();
  }

  handleErrors(type) {
    let regex = new RegExp(type);
    let errors;
    if (this.props.errors.length > 0) {
      errors = this.props.errors.filter((error) => {
        return error.match(regex);
      });
    }
    if (errors) {
      if (errors.length > 0) {
        $(`.${type}-input`).addClass("red");
        errors[0] = `(${errors[0]})`;
      } else {
        $(`.${type}-input`).removeClass("red");
      }
    }

    return (
      <span className='auth-error'>{errors}</span>
    );
  }

  render() {
    return (
      <div className="user-modal">
        <form>
          <h2>Edit User</h2>
          <label><p className="Email-input">Email {this.handleErrors('Email')}</p>
            <input
              type="text"
              value={this.state.email}
              onChange={this.handleInput('email')}
            />
          </label>
          <label><p className="Username-input">Username {this.handleErrors('Username')}</p>
            <input
              type="text"
              value={this.state.username}
              onChange={this.handleInput('username')}
            />
          </label>
          <button onClick={this.handleSubmit}>Save</button>
        </form>
        <p className="logoutButton" onClick={this.props.logout}>Logout</p>
      </div>
    );
  }
}


export default UserModal;