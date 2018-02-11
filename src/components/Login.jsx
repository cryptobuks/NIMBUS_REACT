import React from 'react';
import axios from 'axios';

export default class DashBoard extends React.Component {
	constructor(props){
		super(props);
		this.state = {email:'', username:'', password:'', passwordConf:'', logemail: '', logpassword: '', isLoggedIn: false, userinfo: '', 
		query_username: '', query_email: '', returnError: false, errorMessage: ''  };
		
		this.handleRegistrationSubmit = this.handleRegistrationSubmit.bind(this);
		this.handleLoginSubmit = this.handleLoginSubmit.bind(this);
	};
	
	handleRegistrationSubmit(event){
		let responseState = this;
		let errorState = this;
		event.preventDefault();
		axios.post('/api/login', { email: this.email.value, username: this.username.value, password: this.password.value, passwordConf: this.passwordConf.value })
		.then(function(response) {
            console.log(response.data);
			responseState.setState({isLoggedIn: true, query_username: response.data.username, query_email: response.data.email});
        }) 
		.catch(function (error) {
			errorState.setState({returnError: true, errorMessage: error.response.data});
            console.log(error.response.data);
        });
	}
	
	handleLoginSubmit(event){
		let responseState = this;
		let errorState = this;
		event.preventDefault();
		axios.post('/api/login', { logemail: this.logemail.value, logpassword: this.logpassword.value })
		.then(function(response) {
            console.log(response.data);
			console.log(response.data.username);
			responseState.setState({isLoggedIn: true, query_username: response.data.username, query_email: response.data.email});
        }) 
		.catch(function (error) {
			errorState.setState({returnError: true, errorMessage: error.response});
            errorState.log(error.response);
        });
	}
	
	checkLoggedIn(){
		let responseState = this;
		axios.get('/api/profile')
		.then(function(response) {
            console.log(response.data);
			console.log(response.data.username);
			responseState.setState({isLoggedIn: true, query_username: response.data.username, query_email: response.data.email});
        }) 
		.catch(function (error) {
            console.log(error.response);
        });
	}
	
	render(){
		this.checkLoggedIn();
		if(this.state.isLoggedIn){
			return(
				<div class="main">
					<p>Logged in as {this.state.query_username}</p>
					
					<p>Email address: {this.state.query_email}</p>
					
					<p>Ethereum address: Inactive</p>
					
					<p>Zcash address: Inactive </p>
				</div>
			);
		}
		
		let errorMsg = '';
		if(this.state.returnError){
			errorMsg = this.state.errorMessage;
		}
		
		return(
			<div class="main">
				<div class="w3">
					<div class="signin-form profile">
						<h3>Login</h3>
						
						<div class="login-form">
							<form onSubmit={this.handleLoginSubmit}>
								<input type = "text" input name="logemail" ref={(input) => { this.logemail = input; }} placeholder="E-mail" required=""></input>
								<input type = "password" input name="logpassword" ref={(input) => { this.logpassword = input; }} placeholder="Password" required=""></input>
								<div class="tp">
									<input type="submit" value="LOGIN NOW"></input>
								</div>
							</form>
						</div>
					</div>
				</div>
				<div class="agile">
					<div class="signin-form profile">
						<h3>Register</h3>
						
						<div class="login-form">
							<form onSubmit={this.handleRegistrationSubmit}>
								<input type="text" name="email"  ref={(input) => { this.email = input; }} placeholder="E-mail" required=""></input>
								<input type="text" name="username"  ref={(input) => { this.username = input; }} placeholder="Username" required=""></input>
								<input type="password" name="password"  ref={(input) => { this.password = input; }} placeholder="Password" required=""></input>
								<input type="password" name="passwordConf"  ref={(input) => { this.passwordConf = input; }} placeholder="Confirm Password" required=""></input>
								<div class="tp">
									<input type="submit" value="REGISTER"></input>
								</div>
							</form>
						</div>
						<p>{errorMsg}</p>
						<p><a href="#"> By clicking register, I agree to your terms</a></p>
					</div>
				</div>
				<div class="clear"></div>
			</div>
		);
	}
}