import React from 'react';
import axios from 'axios';

import '../css/dashboard.css';
import '../css/sidebar.css';


class DashboardWrapper extends React.Component{
	constructor(props){
		super(props);
		this.state = {dashSelected: true, profileSelected: false, dashHover: false, profileHover: false, homeHover: false, logoutHover:false,  };
		this.handleDashHover = this.handleDashHover.bind(this);
		this.handleProfileHover = this.handleProfileHover.bind(this);
		this.handleHomeHover = this.handleHomeHover.bind(this);
		this.handleLogoutHover = this.handleLogoutHover.bind(this);
	};
	
	handleDashHover(){
    this.setState({
        dashHover: !this.state.dashHover
    });
	}
	
	handleProfileHover(){
    this.setState({
        profileHover: !this.state.profileHover
    });
	}
	
	handleHomeHover(){
    this.setState({
        homeHover: !this.state.homeHover
    });
	}
	
	handleLogoutHover(){
    this.setState({
        logoutHover: !this.state.logoutHover
    });
	}
	
	render(){
        return (
			<div>
				<aside class="sidebar-left">

					<a class="company-logo" href="#">Logo</a>

					<div class="sidebar-links">
						<a class={this.state.dashSelected || this.state.dashHover ? 'link-blue selected' : 'link-blue'} onMouseEnter={this.handleDashHover} onMouseLeave={this.handleDashHover} href="#"><i class="fa fa-picture-o"></i>Dashboard</a>
						<a class={this.state.profileSelected || this.state.profileHover ? 'link-red selected' : 'link-red'} onMouseEnter={this.handleProfileHover} onMouseLeave={this.handleProfileHover} href="#"><i class="fa fa-male"></i>Profile</a>
						<a class={this.state.homeHover ? 'link-yellow selected' : 'link-yellow'} onMouseEnter={this.handleHomeHover} onMouseLeave={this.handleHomeHover} href="/"><i class="fa fa-home"></i>Back to Home</a>
						<a class={ this.state.logoutHover ? 'link-green selected' : 'link-green'} onMouseEnter={this.handleLogoutHover} onMouseLeave={this.handleLogoutHover} href="#" onClick={this.props.handleLogout}><i class="fa fa-sign-out"></i>Logout</a>
					</div>

				</aside>

				<div class="main-content">
				
					<div class="row">
						<h1>Welcome back, {this.props.username}</h1>
						<br></br>
						<br></br>
						<br></br>
					</div>
					
					
					<div class="row">
						<div class="card col-md-5 col-xs-12">
							<div class="card-body">
								<h5 class="card-title">Zcash Mining Statistics</h5>
								<p class="card-text">
									ZEC Address : Inactive
									<br></br>
									ZEC Balance : 0
									<br></br>
									Value (USD) : 0
								</p>
								<a href="#" class="btn btn-primary">Request an address</a>
							</div>
						</div>
						<div class="col-md-2"></div>
						<div class="card col-md-5 col-xs-12">
							<div class="card-body">
								<h5 class="card-title">Ethereum Mining Statistics</h5>
								<p class="card-text">
									ETH Address : Inactive
									<br></br>
									ETH Balance : 0
									<br></br>
									Value (USD) : 0
								</p>
								<a href="#" class="btn btn-primary">Request an address</a>
							</div>
						</div>
					</div>
				</div>
			</div>
        );
	}
}

export default class DashBoard extends React.Component {
	constructor(props){
		super(props);
		this.state = {isLoggedIn: false, query_username: '', query_email: '', returnError: false, errorMessage: '',  showLogin: true};
		
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
		axios.post('/api/signup', { email: this.email.value, username: this.username.value, password: this.password.value, passwordConf: this.passwordConf.value })
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
		const data = new FormData(event.target);
		axios.post('/api/login', { logemail: this.logemail.value, logpassword: this.logpassword.value })
		.then(function(response) {
            console.log(response.data);
			console.log(data);
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
		
		if(this.state.showLogin){
			return(
			<div>
				<div class="home-btn-mid">
					<a href="/"><button class="anim-btn"><span>Back to Home Page</span></button></a>
				</div>
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
							<p class="text-p errorcolor">{this.state.errorMessage}</p>
						  </div>
					</form>
				</div>
			</div>
			);
		}
		
		return(
			<div>
				<div class="home-btn-mid">
					<a href="/"><button class="anim-btn"><span>Back to Home Page</span></button></a>
				</div>
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
							<p class="text-p"><a href="#"> By clicking register, I agree to your terms.</a></p>
							<p class="text-p errorcolor">{this.state.errorMessage}</p>
						  </div>
					  </form>
				</div>
			</div>
		);
	}
}