import React from 'react';
import { Link } from 'react-router-dom';

class Register extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      email: '',
      password: ''
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDemo = this.handleDemo.bind(this);
    this.handleErrors = this.handleErrors.bind(this);
  }

  componentDidMount() {
    document.body.classList.add('background-image');
  }

  componentWillUnmount() {
    document.body.classList.remove('background-image');
  }

  handleInput(type) {
    return (e) => {
      this.setState({
        [type]: e.target.value
      });
    };
  }

  handleDemo(e) {
    e.preventDefault();
    let user = { email: 'email.com', password: 'password' };
    this.props.login(user);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.register(this.state).then(() => 
      this.props.history.push('/servers')
    );
  }

  handleErrors(type) {
    let regex = new RegExp(type);
    let errors;
    if (this.props.errors.length > 0) {
      errors = this.props.errors.filter((error) => {
        return error.match(regex);
      });
    }
    if(errors) {
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
      <div className="session-form">
        <div className="auth-container">
          <div className="auth-left">
            <img src='https://i.imgur.com/Cp8ii7N.png' />
            <p>wilks</p>
          </div>
          <form>
            <h2>Create an Account</h2>
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
            <label><p className="Password-input">password {this.handleErrors('Password')}</p>
              <input
                type="password"
                value={this.state.password}
                onChange={this.handleInput('password')}
              />
            </label>
            <button className='register-button' onClick={this.handleSubmit}>Continue</button>
            <p>Already have an account? <Link to='/login' className='auth-link'>Login</Link> or login as a guest <span onClick={this.handleDemo} className='auth-link'>here.</span></p>
          </form>
        </div>
      </div>
    );
  }
}

export default Register;