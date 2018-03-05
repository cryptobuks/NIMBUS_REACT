import React from 'react';
import axios from 'axios';
import { render } from 'react-dom';
import { Sidebar, SidebarItem } from 'react-responsive-sidebar';
import FontAwesome from 'react-fontawesome';

import '../css/dashboard.css';


class DashboardWrapper extends React.Component{
	constructor(props){
		super(props);
		this.state = {showLogin: false, showRegistration: false };
	};
	
	logout(){
		this.props.handleLogout();
		console.log("hi");
	}
	
	render(){
		if(!this.props.handleLogout){
			return null;
		}
		let items = [
			<SidebarItem>
				<FontAwesome
					className='super-crazy-colors'
					name='rocket'
					size='1x'
					style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)' }}
				/>
				<span>   Dashboard</span>
				
			</SidebarItem>,
			<SidebarItem>Profile</SidebarItem>,
			<SidebarItem>Settings</SidebarItem>,
		];
		
        return (
			<div>
				 <Sidebar content={items}>
					 <p>Email: {this.props.email}</p>
					 <p>Username: {this.props.username}</p>
					<button  onClick={this.props.handleLogout} >Logout</button>
				</Sidebar>
			</div>
        );
	}
}

export default class DashBoard extends React.Component {
	constructor(props){
		super(props);
		this.state = {email:'', username:'', password:'', passwordConf:'', logemail: '', logpassword: '', isLoggedIn: false, userinfo: '', 
		query_username: '', query_email: '', returnError: false, errorMessage: '',  showLogin: true};
		
		this.handleRegistrationSubmit = this.handleRegistrationSubmit.bind(this);
		this.handleLoginSubmit = this.handleLoginSubmit.bind(this);
		this.handleLogout = this.handleLogout.bind(this);
		this.checkLoggedIn = this.checkLoggedIn.bind(this);
		this.toggleLogin = this.toggleLogin.bind(this);
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
			responseState.setState({isLoggedIn: true, query_username: response.data.username, query_email: response.data.email});
        }) 
		.catch(function (error) {
			errorState.setState({returnError: true, errorMessage: error.response.data});
            console.log(error.response.data);
        });
	}
	
	handleLogout(event){
		let responseState = this;
		let errorState = this;
		event.preventDefault();
		axios.get('/api/logout')
		.then(function(response) {
			responseState.setState({isLoggedIn: false, errorMessage:''});
        }) 
		.catch(function (error) {
			errorState.setState({isLoggedIn:false, errorMessage:''});
			console.log("error logging out");
        });
	}
	
	checkLoggedIn(){
		let responseState = this;
		axios.get('/api/profile')
		.then(function(response) {
            console.log(response.data);
			responseState.setState({isLoggedIn: true, query_username: response.data.username, query_email: response.data.email});
        }) 
		.catch(function (error) {
            console.log(error.response);
        });
	}
	
	toggleLogin(){
		if(this.state.showLogin === true){
			this.setState({showLogin: false});
		}
		else{
			this.setState({showLogin: true});
		}
		
	}
	
	
	render(){
		if(this.state.isLoggedIn){
			return(
				<div class="main">
					<DashboardWrapper username={this.state.query_username} email={this.state.query_email}  handleLogout={this.handleLogout}/>
				</div>
			);
		}
		else{
			this.checkLoggedIn();
		}
		
		let errorMsg = '';
		if(this.state.returnError){
			errorMsg = this.state.errorMessage;
		}
		
		if(this.state.showLogin){
			return(
			<div class="forms">
				<ul class="tab-group">
					<li class="tab active"><a >Log In</a></li>
					<li class="tab"><a onClick={this.toggleLogin} >Sign Up</a></li>
				</ul>
				<form onSubmit={this.handleLoginSubmit}>
					  <h1>Login</h1>
					  <div class="input-field">
						<label for="logemail">Email</label>
						<input type="email" name="logemail" ref={(input) => { this.logemail = input; }} required=""/>
						<label for="logpassword" >Password</label> 
						<input type="password" name="logpassword" ref={(input) => { this.logpassword = input; }} required=""/>
						<input type="submit" value="Login" class="button"/>
						<p class="text-p"> <a href="#">Forgot password?</a> </p>
					  </div>
				</form>
			</div>
			);
		}
		
		return(
			<div class="forms">
				<ul class="tab-group">
					<li class="tab"><a onClick={this.toggleLogin} >Log In</a></li>
					<li class="tab active"><a>Sign Up</a></li>
				</ul>
				  <form onSubmit={this.handleRegistrationSubmit}>
					  <h1>Sign Up</h1>
					  <div class="input-field">
						<label for="email">Email</label> 
						<input type="email" name="email" ref={(input) => { this.email = input; }} required=""/>
						<label for="email">Username</label> 
						<input type="text" name="username" ref={(input) => { this.username = input; }} required=""/>
						<label for="password">Password</label> 
						<input type="password" name="password" ref={(input) => { this.password = input; }} required=""/>
						<label for="password">Confirm Password</label> 
						<input type="password" name="passwordConf" ref={(input) => { this.passwordConf = input; }} required=""/>
						<input type="submit" value="Sign up" class="button" />
					  </div>
				  </form>
			</div>
		);
	}
}