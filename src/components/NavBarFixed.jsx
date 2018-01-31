import React from 'react';
import ReactDOM from 'react-dom';
import {Link} from 'react-router-dom';

export default class NavBarFixed extends React.Component {
	constructor(props) {
    super(props);
    this.state = {home:false, link:false, disabled:false};
		if(props.active == 'home'){
			this.state = {home:true};
		}
		else if(props.active == 'link'){
			this.state = {link:true};
		}
		else if(props.active == 'disabled'){
			this.state = {disabled:true};
		}
  }

	render() {
		const home = this.state.home;
		const link = this.state.link;
		const disabled = this.state.disabled;

    return (
      <div>
        <nav class="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
          <a class="navbar-brand" href="#">Nimbus Mining</a>
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarCollapse">
            <ul class="navbar-nav mr-auto">

							<li class={home ? 'nav-item active' : 'nav-item'}>
								<a class="nav-link" href="#">Home<span class="sr-only">(current)</span></a>
							</li>

							<li class={link ? 'nav-item active' : 'nav-item'}>
								<a class="nav-link" href="#">Link</a>
							</li>

							<li class={disabled ? 'nav-item active' : 'nav-item'}>
								<a class="nav-link disabled" href="#">Disabled</a>
							</li>

            </ul>

            <form class="form-inline mt-2 mt-md-0">
                <input class="form-control mr-sm-2" type="text" placeholder="Search" aria-label="Search"></input>
                <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
            </form>
          </div>
        </nav>
      </div>
    );
  }
}
