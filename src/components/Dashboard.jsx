import React from 'react';
import axios from 'axios';

import '../css/dashboard.css';
import zec_img from '../images/zec.png';
import eth_img from '../images/eth.png';

export default class DashboardContent extends React.Component{
	constructor(props){
		super(props);
		this.state = { username: '', zecAdd: '', ethAdd: '', profileLoaded: false, zecDataLoaded: false, ethDataLoaded: false,
		zecBalance: 'Loading/No Wallet Assigned', zecMYR: 0, zecMktMYR:0, zecUSD: 0, zecMktUSD:0,  zec24hr: 0, zecSply: 0,
		ethBalance: 'Loading/No Wallet Assigned', ethMYR: 0, ethMktMYR:0, ethUSD: 0, ethMktUSD:0,  eth24hr: 0, ethSply: 0,};
		
		this.getProfile = this.getProfile.bind(this);
		this.getZecBalance = this.getZecBalance.bind(this);
		this.getZecStat = this.getZecStat.bind(this);
	};
	
	getProfile(){
		let responseState = this;
		axios.get('/api/profile')
		.then(function(response) {
            console.log(response.data);
			responseState.setState({profileLoaded: true, username: response.data.username, 
			ethAdd: response.data.ethAdd, zecAdd: response.data.zecAdd,});
        }) 
		.catch(function (error) {
            console.log(error.response);
        });
	}
	
	getZecBalance(){
		let responseState = this;
		var zecBalanceAPI = 'https://api.zcha.in/v2/mainnet/accounts/';
		var address = this.state.zecAdd;
		var res = zecBalanceAPI.concat(address);
		axios.get(res)
		.then(function(response) {
            console.log(response.data.balance);
			responseState.setState({zecBalance:response.data.balance});
        }) 
		.catch(function (error) {
            console.log(error.response);
        });
	}
	
	getZecStat(){
		let responseState = this;
		axios.get('https://api.coinmarketcap.com/v1/ticker/zcash/?convert=MYR')
		.then(function(response) {
            console.log(response.data[0]);
			responseState.setState({zecDataLoaded:true, zecMYR:response.data[0].price_myr, 
			zecUSD: response.data[0].price_usd, zec24hr: response.data[0].percent_change_24h,
			zecSply:response.data[0].total_supply, zecMktMYR: response.data[0].market_cap_myr, zecMktUSD: response.data[0].market_cap_usd});
        }) 
		.catch(function (error) {
            console.log(error.response);
        });
	}
	
	getEthStat(){
		let responseState = this;
		axios.get('https://api.coinmarketcap.com/v1/ticker/ethereum/?convert=MYR')
		.then(function(response) {
            console.log(response.data[0]);
			responseState.setState({ethDataLoaded:true, ethMYR:response.data[0].price_myr, 
			ethUSD: response.data[0].price_usd, eth24hr: response.data[0].percent_change_24h,
			ethSply:response.data[0].total_supply, ethMktMYR: response.data[0].market_cap_myr, ethMktUSD: response.data[0].market_cap_usd});
        }) 
		.catch(function (error) {
            console.log(error.response);
        });
	}
	
	
	componentWillMount(){
		this.getProfile();
		this.getZecStat();
		this.getEthStat();
	}
	
	render(){
		if(this.state.profileLoaded && this.state.zecDataLoaded && this.state.ethDataLoaded){
			return (
				<div>
					{this.getZecBalance()}
					<div class="row">
						<h1>Welcome back, {this.state.username}!</h1>
						<br></br>
						<br></br>
						<br></br>
					</div>
					
					
					<div class="row">
						<div class="card col-xs-12 greybackground">
							<div class="card-body">
								<h5 class="card-title"><img src={zec_img} alt="ZEC"></img> Zcash (ZEC) Mining Statistics</h5>
								<p class="card-text">
									ZEC Address : {this.state.zecAdd ? this.state.zecAdd : 'Inactive'}
									<br></br>
									ZEC Balance : {this.state.zecBalance}
									<br></br>
									Total Value (MYR) : RM { (Math.round(this.state.zecBalance * this.state.zecMYR * 100) / 100 ).toFixed(2)}
									<br></br>
									1 ZEC = RM {(Math.round(this.state.zecMYR * 100) / 100).toFixed(2)}
								</p>
								<a href="#" class={this.state.zecAdd ? "btn btn-secondary disabled" : "btn btn-primary"}>
									{this.state.zecAdd ? "Wallet Address Assigned/Requested" : "Request an Address"}
								</a>
							</div>
						</div>
						
						<br></br>
						<br></br>
						<hr className="featurette-divider"></hr>
						
						
						<div class="card col-xs-12 greybackground">
							<div class="card-body">
								<h5 class="card-title"><img src={eth_img} alt="ETH"></img> Ethereum (ETH) Mining Statistics</h5>
								<p class="card-text">
									ETH Address : {this.state.ethAdd ? this.state.ethAdd : 'Inactive'}
									<br></br>
									ETH Balance : {this.state.ethBalance}
									<br></br>
									Total Value (MYR) : RM { (Math.round(this.state.ethBalance * this.state.zecMYR * 100) / 100 ).toFixed(2)}
									<br></br>
									1 ETH = RM {(Math.round(this.state.ethMYR * 100) / 100).toFixed(2)}
								</p>
								<a href="#" class={this.state.ethAdd ? "btn btn-secondary disabled" : "btn btn-primary"}>
									{this.state.ethAdd ? "Wallet Address Assigned/Requested" : "Request an Address"}
								</a>
							</div>
						</div>
					</div>
					
					<br></br>
					
					
					<h1>Market Statistics</h1>
					<div class="row">
						<div class="card col-md-6 col-xs-12 greybackground">
							<div class="card-body">
								<h5 class="card-title"> <img src={zec_img} alt="ZEC"></img> Zcash (ZEC)</h5>
								<p class="card-text">
									Change in Price (24hrs) : {this.state.zec24hr}%
									<br></br>
									ZEC Value (MYR) : {(Math.round(this.state.zecMYR * 100) / 100).toFixed(2)}
									<br></br>
									ZEC Value (USD) : {(Math.round(this.state.zecUSD * 100) / 100).toFixed(2)}
									<br></br>
									Circulating Supply : {this.state.zecSply}
									<br></br>
									Total Market Cap (MYR) : RM {(Math.round(this.state.zecMktMYR * 100) / 100).toFixed(2)}
									<br></br>
									Total Market Cap (USD) : $ {(Math.round(this.state.zecMktUSD * 100) / 100).toFixed(2)}
								</p>
							</div>
						</div>
						<div class="card col-md-6 col-xs-12 greybackground">
							<div class="card-body">
								<h5 class="card-title"><img src={eth_img} alt="ETH"></img>Ethereum (ETH)</h5>
								<p class="card-text">
									Change in Price (24hrs) : {this.state.eth24hr}%
									<br></br>
									ETH Value (MYR) : {(Math.round(this.state.ethMYR * 100) / 100).toFixed(2)}
									<br></br>
									ETH Value (USD) : {(Math.round(this.state.ethUSD * 100) / 100).toFixed(2)}
									<br></br>
									Circulating Supply : {this.state.ethSply}
									<br></br>
									Total Market Cap (MYR) : RM {(Math.round(this.state.ethMktMYR * 100) / 100).toFixed(2)}
									<br></br>
									Total Market Cap (USD) : $ {(Math.round(this.state.ethMktUSD * 100) / 100).toFixed(2)}
								</p>
							</div>
						</div>
					</div>
				</div>
			);
		}
		else{
			return null;
		}
	}
}