import React from 'react';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: ''
    };

    this.handleSubmit = this.handleSubmit.bind(this);
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

  render() {
    return (
      <div className="session-form">
        <div className="auth-container">
          <div className="auth-left">
            <img src='https://i.imgur.com/Cp8ii7N.png' />
            <p>wilks</p>
          </div>
          <form>
            <h2>Welcome Back!</h2>
            <label>Email
              <input 
                type="text"
                value={this.state.email}
                onChange={this.handleInput('email')}
              />
            </label>

            <label>Password
              <input
                type="password"
                value={this.state.password}
                onChange={this.handleInput('password')}
              />
            </label>
            <button onClick={this.handleSubmit}>Login</button>
          </form>
        </div>
      </div>
    );
  }
  
}

export default Login;
// {/* <img src="https://i.imgur.com/t2PPEVf.jpg" /> */}