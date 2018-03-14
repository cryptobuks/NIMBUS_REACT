import React from 'react';
import axios from 'axios';

import '../css/dashboard.css';
import zec_img from '../images/zec.png';
import eth_img from '../images/eth.png';

export default class DashboardContent extends React.Component{
	constructor(props){
		super(props);
	};
	
	render(){
        return (
			<div>
				<div class="row">
					<h1>Welcome back, {this.props.username}!</h1>
					<br></br>
					<br></br>
					<br></br>
				</div>
				
				
				<div class="row">
					<div class="card col-xs-12 greybackground">
						<div class="card-body">
							<h5 class="card-title"><img src={zec_img} alt="ZEC"></img> Zcash (ZEC) Mining Statistics</h5>
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
					
					<br></br>
					<br></br>
					<hr className="featurette-divider"></hr>
					
					
					<div class="card col-xs-12 greybackground">
						<div class="card-body">
							<h5 class="card-title"><img src={eth_img} alt="ETH"></img> Ethereum (ETH) Mining Statistics</h5>
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
				
				<br></br>
				
				<div class="row">
					<div class="card col-md-6 col-xs-12 greybackground">
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
					<div class="card col-md-6 col-xs-12 greybackground">
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
        );
	}
}