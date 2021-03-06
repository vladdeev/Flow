import React from 'react';
import { Link, hashHistory, withRouter } from 'react-router';

class SessionForm extends React.Component {
	constructor(props) {
		super(props);
		this.state = { email: "",
			password: "",
			first_name: "",
			last_name: ""
		};
		this.handleSubmit = this.handleSubmit.bind(this);
		this._resetSetAndErrors = this._resetSetAndErrors.bind(this);
	}

	componentDidUpdate() {
		this.redirectIfLoggedIn();
	}

	redirectIfLoggedIn() {
		if (this.props.loggedIn) {
			this.props.router.push("/");
		}
	}

	componentWillUnmount() {
		this.props.receiveErrors([]);
	}

	update(field) {
		return e => this.setState({
			[field]: e.currentTarget.value
		});
	}

	handleSubmit(e) {
		e.preventDefault();
		const user = this.state;
		this.props.processForm(this.state);
		this.setState({ password: "" });
	}

	renderErrors() {
		if (this.props.errors) {
			return(
				<ul>
					{this.props.errors.map((error) => (
						<li key={error}>
							{error}
						</li>
					))}
				</ul>
			);
		}
	}

  _formLink() {
    if (this.props.formType === "login") {
      return(
        <div className="session-form-links">
          Don't have an account? &nbsp;
          <Link to="/signup">Sign up!</Link>
        </div>
      )
    } else {
      return(
        <div className="session-form-links">
          Already have an account? &nbsp;
          <Link to="/login">Login</Link>
        </div>
      )
    }
  }

	_renderDemoLoginButton() {
		if (this.props.formType === "login") {
			return(<Link to={'/demologin'} >demo login</Link>)
		}
	}

  _renderNameInput() {
    if (this.props.formType === "signup") {
      return(
        <div>
          <label className="session-form-label">first name:</label>
            <input type="text"
              value={this.state.first_name}
              onChange={this.update("first_name")}
              className="session-input" />
          <label className="session-form-label">last name:</label>
            <input type="text"
              value={this.state.last_name}
              onChange={this.update("last_name")}
              className="session-input" />
        </div>
      )
    }
  }

	_resetSetAndErrors() {
		this.props.receiveErrors([]);
		this.setState({
			email: "",
			password: "",
			first_name: "",
			last_name: ""
		});
	}

	render() {
    const formType = this.props.formType
    const text = (formType === 'login') ? "Log In" : "Sign Up";
		return (
			<div className="session-form">
				<div className="session-form-container">
					<div id="session-form-close">
						<Link to="/">&#10006;</Link>
					</div>
					<div className="session-form-header">
						<h1>{text}</h1>
					</div>
					<form onSubmit={this.handleSubmit} className="session-form-box">
						{this.renderErrors()}
	          {this._renderNameInput()}
							<label className="session-form-label">email:</label>
								<input type="text"
									value={this.state.email}
									onChange={this.update("email")}
									className="session-input" />
							<label className="session-form-label">password:</label>
								<input type="password"
									value={this.state.password}
									onChange={this.update("password")}
									className="session-input" />
							<input type="submit" value={text} />
					</form>
					{this._renderDemoLoginButton()}
					<span onClick={this._resetSetAndErrors}>{this._formLink()}</span>
				</div>
			</div>
		);
	}
}

export default withRouter(SessionForm);
