import React from 'react';
import axios from 'axios';

import '../css/sidebar.css';
import DashboardContent from '../components/Dashboard.jsx';

export default class ApplicationWrapper extends React.Component{
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
					<DashboardContent username={this.props.username} zecAdd={this.props.zecAdd} ethAdd={this.props.ethAdd}/>
				</div>
			</div>
        );
	}
}