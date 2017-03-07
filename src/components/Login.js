import React, { Component } from 'react';
import axios from 'axios';

export default class Login extends Component {
	constructor() {
		super();
		this.state = {
			login: true,
			create: false,
			error: false,
			errorCreate: false,
			success: false
		};
	}

	render() {
		return (
			<div className="Login">
				<h1>Agile Board Game</h1>
				<h2>Please login to continue...</h2>
				{this.state.login ?
					<form onSubmit={(event) => this.handleSubmit(event)}>
						<input type="text" placeholder="Name" ref={(name) => this.name = name} required />&nbsp;
						<input type="text" placeholder="Password" ref={(password) => this.password = password} required />&nbsp;
						<button className="Login_button">Login</button>
					</form>
				: null}
				{this.state.create ?
					<form className="Login_newAccountForm" onSubmit={(event) => this.handleCreate(event)}>
						<input type="text" placeholder="Choose name..." ref={(name) => this.createName = name} required />&nbsp;
						<input type="text" placeholder="Choose password..." ref={(password) => this.createPassword = password} required />&nbsp;
						<button className="Login_button">Create</button></form>
				: null}
				{this.state.login ? <p className="Login_newAccountLink" onClick={this.showCreate.bind(this)}>Don't have an account? Create one here!</p> : <p className="Login_newAccountLink" onClick={this.showCreate.bind(this)}>Wait! I do have an account. I just remembered!</p>}
				{this.state.error ? <div className="Login_error"><p className="Login_error">Sorry, no user with that name/password...</p></div> : null}
				{this.state.errorCreate ? <div className="Login_error"><p>Sorry, that user name is already taken...</p></div> : null}
				{this.state.success ? <div className="Login_success"><p>Congratulations! You can now login with with your new username and password.</p></div> : null}
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

	handleCreate(event) {
		const that = this;
		event.preventDefault();
		axios({
        method: 'put',
        url: 'http://localhost/_agileboardgame/api/?/game',
        data: {
            name: that.createName.value,
            password: that.createPassword.value
        },
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
    })
    .then(function(response) {
    		if (response.data.message !== undefined) { // fail!
    			if (that.state.success === true) {
    				// reset success message
    				let success = that.state.success;
	    			success = false;
	    			that.setState({success});
    			}
    			// display error messsage
    			let errorCreate = that.state.errorCreate;
    			errorCreate = true;
    			that.setState({errorCreate});
    		} else { // success!
    			if (that.state.errorCreate === true) {
    				// reset error message
    				let errorCreate = that.state.errorCreate;
	    			errorCreate = false;
	    			that.setState({errorCreate});
    			}
    			// display success message
    			if (that.state.success !== true) {
    				let success = that.state.success;
    				success = true;
    				that.setState({success});
    			}

					that.showCreate();
    		}
    })
    .catch(function(error) {
        console.log(error);
    });
	}

	showCreate() {
		// show/hide create form
		let create = this.state.create;
		create = !create;
		this.setState({create});
		// show/hide login form
		let login = this.state.login;
		login = !login;
		this.setState({login});
	}
}
