import React, { Component } from 'react';

export default class Login extends Component {
	constructor() {
		super();
		this.state = {
			error: false
		};
	}

	render() {
		return (
			<div className="Login">
				<h1>Agile Board Game</h1>
				<h2>Please login to continue...</h2>
				<form onSubmit={(event) => this.handleSubmit(event)}>
					<input type="text" placeholder="Name" ref={(name) => this.name = name} />&nbsp;
					<input type="text" placeholder="Password" ref={(password) => this.password = password} />&nbsp;
					<button>Login</button>
				</form>
				{this.state.error ? <p>Sorry, no user with that name/password...</p> : null}
			</div>
		);
	}

	handleSubmit(event) {
		event.preventDefault();
		this.props.login(this.name.value, this.password.value);
		// reset error message
		let error = this.state.error;
		error = false;
		this.setState({error});
	}
}
