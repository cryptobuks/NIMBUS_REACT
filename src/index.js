import React from 'react';
import ReactDOM from 'react-dom';

import './include/bootstrap'
import './index.css';
import './css/responsive_carousel.css';
import placeholder_image from './images/placeholder.png';
import jumbotron_bg from './images/nimbus_home.jpg'

class NavBarFixed extends React.Component {
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

class Footer extends React.Component {
	render(){
		return(
			<div>
				<footer className="container">
					<p className="float-right"><a href="#">Back to top</a></p>
					<p>&copy; 2017-2018 Nimbus Mining &middot; <a href="#">Privacy</a> &middot; <a href="#">Terms</a></p>
				</footer>
			</div>
		);
	}
}

class HomeBanner extends React.Component {
	render(){
		return(
			<div>
				<div class="jumbotron specialjum homebanner">
					<div class="over container body-content">
						<h1 class="display-3 grey">Hello, world!</h1>
						<p class = "white">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque in magna libero. Aenean ullamcorper leo a odio commodo dapibus. Maecenas lobortis lorem sapien, vel rutrum neque hendrerit non.</p>
						<p><a class="btn btn-primary btn-lg btn_oy" href="#" role="button">Learn more &raquo;</a></p>
					</div>
				</div>
			</div>
		);
	}
}

class HomeMainFeatures extends React.Component {
	render(){
		return(
			<div className="row">
				<div className="col-lg-4">
					<img className="rounded-circle" src="data:image/gif;base64,R0lGODlhAQABAIAAAHd3dwAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw==" alt="Generic placeholder image" width="140" height="140"></img>
					<h2>Heading</h2>
					<p>Donec sed odio dui. Etiam porta sem malesuada magna mollis euismod. Nullam id dolor id nibh ultricies vehicula ut id elit. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Praesent commodo cursus magna.</p>
					<p><a className="btn btn-secondary" href="#" role="button">View details &raquo;</a></p>
				</div>
				<div className="col-lg-4">
					<img className="rounded-circle" src="data:image/gif;base64,R0lGODlhAQABAIAAAHd3dwAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw==" alt="Generic placeholder image" width="140" height="140"></img>
					<h2>Heading</h2>
					<p>Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Cras mattis consectetur purus sit amet fermentum. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh.</p>
					<p><a className="btn btn-secondary" href="#" role="button">View details &raquo;</a></p>
				</div>
				<div className="col-lg-4">
					<img className="rounded-circle" src="data:image/gif;base64,R0lGODlhAQABAIAAAHd3dwAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw==" alt="Generic placeholder image" width="140" height="140"></img>
					<h2>Heading</h2>
					<p>Donec sed odio dui. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Vestibulum id ligula porta felis euismod semper. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.</p>
					<p><a className="btn btn-secondary" href="#" role="button">View details &raquo;</a></p>
				</div>
			</div>
		);
	}
}

class HomeIntroduction extends React.Component {
	render(){
		return(
			<div>
				<div className="row featurette">
					<div className="col-md-7">
						<h2 className="featurette-heading">First featurette heading. <span className="text-muted">It'll blow your mind.</span></h2>
						<p className="lead">Donec ullamcorper nulla non metus auctor fringilla. Vestibulum id ligula porta felis euismod semper. Praesent commodo cursus magna, vel scelerisque nisl consectetur. Fusce dapibus, tellus ac cursus commodo.</p>
					</div>
					<div className="col-md-5">
						<img className="featurette-image img-fluid mx-auto" src={placeholder_image} alt="Generic placeholder image"></img>
					</div>
				</div>

				<hr className="featurette-divider"></hr>

				<div className="row featurette">
					<div className="col-md-7 order-md-2">
						<h2 className="featurette-heading">Oh yeah, it's that good. <span className="text-muted">See for yourself.</span></h2>
						<p className="lead">Donec ullamcorper nulla non metus auctor fringilla. Vestibulum id ligula porta felis euismod semper. Praesent commodo cursus magna, vel scelerisque nisl consectetur. Fusce dapibus, tellus ac cursus commodo.</p>
					</div>
					<div className="col-md-5 order-md-1">
						<img className="featurette-image img-fluid mx-auto" src={placeholder_image} alt="Generic placeholder image"></img>
					</div>
				</div>

				<hr className="featurette-divider"></hr>

				<div className="row featurette">
					<div className="col-md-7">
						<h2 className="featurette-heading">And lastly, this one. <span className="text-muted">Checkmate.</span></h2>
						<p className="lead">Donec ullamcorper nulla non metus auctor fringilla. Vestibulum id ligula porta felis euismod semper. Praesent commodo cursus magna, vel scelerisque nisl consectetur. Fusce dapibus, tellus ac cursus commodo.</p>
					</div>
					<div className="col-md-5">
						<img className="featurette-image img-fluid mx-auto" src={placeholder_image} alt="Generic placeholder image"></img>
					</div>
				</div>
			</div>
		);
	}
}

class HomePage extends React.Component {
  render() {
    return (
      <div>

        <header>
					<NavBarFixed  active ={this.props.active} />
        </header>

				<HomeBanner />

        <main role="main">
					<div className="container marketing">
						<HomeMainFeatures />
            <hr className="featurette-divider"></hr>
						<HomeIntroduction />
            <hr className="featurette-divider"></hr>
          </div>

					<Footer />
        </main>

      </div>
    );
  }
}

// ========================================

ReactDOM.render(
  <HomePage active ={'home'} />,
  document.getElementById('root')
);
