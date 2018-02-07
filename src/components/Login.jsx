import React from 'react';
import axios from 'axios';

export default class DashBoard extends React.Component {
	constructor(props){
		super(props);
		this.state = {email:'', username:'', password:'', passwordConf:'', logemail: '', logpassword: '', isLoggedIn: false, userinfo: ''};
		
		this.handleRegistrationSubmit = this.handleRegistrationSubmit.bind(this);
	};
	
	handleRegistrationSubmit(event){
		axios.post('/api/login', { email: this.email.value, username: this.username.value, password: this.password.value, passwordConf: this.passwordConf.value })
			.then(response => console.log(response))
			.catch(error => error)
		
	}
	
	render(){
		if(this.state.isLoggedIn){
			return(
				<div>
					{this.userinfo}
				</div>
			);
		}
		
		return(
			<div class="main">
				<div class="w3">
					<div class="signin-form profile">
						<h3>Login</h3>
						
						<div class="login-form">
							<form>
								<input name="logemail" placeholder="E-mail" required=""></input>
								<input name="logpassword" placeholder="Password" required=""></input>
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
						<p><a href="#"> By clicking register, I agree to your terms</a></p>
					</div>
				</div>
				<div class="clear"></div>
			</div>
		);
	}
}