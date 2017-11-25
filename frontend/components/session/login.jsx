import React from 'react';
import { Link } from 'react-router-dom';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
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

  handleSubmit(e) {
    e.preventDefault();
    this.props.login(this.state).then(() =>
      this.props.history.push('/servers')
    );
  }

  handleDemo(e) {
    e.preventDefault();
    let user = { email: 'guestuser@guest.com', password: 'password' };
    this.props.login(user);
  }

  handleErrors(type) {
    let regex = new RegExp(type);
    let errors;
    if(this.props.errors.length > 0) {
      errors = this.props.errors.filter( (error) => {
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
      <div className="session-form">
        <div className="auth-container">
          <div className="auth-left">
            <img src='https://res.cloudinary.com/lara-cloud1/image/upload/v1511561171/logo-transparent_a9dj2c.png' />
            <p>wilks</p>
          </div>
          <form>
            <h2>Welcome Back!</h2>
            <label><p className="email-input">Email {this.handleErrors('email')}</p> 
              <input 
                type="text"
                value={this.state.email}
                onChange={this.handleInput('email')}
              />
            </label>

            <label><p className="password-input">Password {this.handleErrors('password')}</p> 
              <input
                type="password"
                value={this.state.password}
                onChange={this.handleInput('password')}
              />
            </label>
            <button onClick={this.handleSubmit}>Login</button>
            <p>Need an account? <Link to='/register' className='auth-link'>Register</Link> or login as a guest <span onClick={this.handleDemo}className='auth-link'>here.</span></p>
          </form>
        </div>
      </div>
    );
  }
  
}

export default Login;