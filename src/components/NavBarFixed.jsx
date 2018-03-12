import React from 'react';

export default class NavBarFixed extends React.Component {
	constructor(props) {
    super(props);
    this.state = {home:false, login:false, disabled:false};
		if(props.active === 'home'){
			this.state = {home:true};
		}
		else if(props.active === 'login'){
			this.state = {login:true};
		}
		else if(props.active === 'disabled'){
			this.state = {disabled:true};
		}
  }

	render() {
		const home = this.state.home;
		const login = this.state.login;
		const disabled = this.state.disabled;

    return (
      <div>
        <nav class="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
          <a class="navbar-brand" href="">Nimbus Mining</a>
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarCollapse">
            <ul class="navbar-nav mr-auto">

							<li class={home ? 'nav-item active' : 'nav-item'}>
								<a class="nav-link" href="/">Home<span class="sr-only">(current)</span></a>
							</li>

							<li class={login ? 'nav-item active' : 'nav-item'}>
								<a class="nav-link" href="/dashboard">Dashboard</a>
							</li>

							<li class={disabled ? 'nav-item active' : 'nav-item'}>
								<a class="nav-link disabled" href="/home">Nothing Here</a>
							</li>

            </ul>
          </div>
        </nav>
      </div>
    );
  }
}
