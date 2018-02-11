import React from 'react';
import placeholder_image from '../images/placeholder.png';

//Application component, handles rendering of components on the page based on the route
//and activities of the user.

class HomeBanner extends React.Component {
	render(){
		return(
			<div>
				<div class="jumbotron specialjum homebanner">
					<div class="over container body-content">
						<h1 class="display-3 grey">Welcome to Nimbus.</h1>
						<p class = "white responsivetext">At Nimbus, our goal is the delivery of excellence in terms of standard and service by providing mining solutions with turnkey approach. With design experience, technical knowledge and innovative culture, our dedicated team is focused on continuously improving efficiency and user experience to ensure the most value for our investors as well as accomodating their dynamic needs.</p>
						<p><a class="btn btn-primary btn-lg btn_oy" href="" role="button">Learn more &raquo;</a></p>
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
					<img className="rounded-circle" src="data:image/gif;base64,R0lGODlhAQABAIAAAHd3dwAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw==" alt="Placeholder" width="140" height="140"></img>
					<h2>Alignment of Client Interest</h2>
					<p>Through experience, we believe things work best when everyone wins together. Your success, means our success and that means we have a vested interest in providing you in the best possible value and service.</p>
					<p><a className="btn btn-secondary" href="" role="button">View details &raquo;</a></p>
				</div>
				<div className="col-lg-4">
					<img className="rounded-circle" src="data:image/gif;base64,R0lGODlhAQABAIAAAHd3dwAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw==" alt="Placeholder" width="140" height="140"></img>
					<h2>Human resources and teamwork</h2>
					<p>People are our organization's most valuable asset. With collaboration of talent and experience from different fields, our team is geared for continuous development to spearhead through challenges in the changing blockchain environment.</p>
					<p><a className="btn btn-secondary" href="" role="button">View details &raquo;</a></p>
				</div>
				<div className="col-lg-4">
					<img className="rounded-circle" src="data:image/gif;base64,R0lGODlhAQABAIAAAHd3dwAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw==" alt="Placeholder" width="140" height="140"></img>
					<h2>Innovative Designs & Applications</h2>
					<p>With advanced mechanical & electrical infrastructure design, our farm is tailored to cool and maintain temperatures</p>
					<p><a className="btn btn-secondary" href="" role="button">View details &raquo;</a></p>
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
						<img className="featurette-image img-fluid mx-auto" src={placeholder_image} alt="Placeholder"></img>
					</div>
				</div>

				<hr className="featurette-divider"></hr>

				<div className="row featurette">
					<div className="col-md-7 order-md-2">
						<h2 className="featurette-heading">Oh yeah, it's that good. <span className="text-muted">See for yourself.</span></h2>
						<p className="lead">Donec ullamcorper nulla non metus auctor fringilla. Vestibulum id ligula porta felis euismod semper. Praesent commodo cursus magna, vel scelerisque nisl consectetur. Fusce dapibus, tellus ac cursus commodo.</p>
					</div>
					<div className="col-md-5 order-md-1">
						<img className="featurette-image img-fluid mx-auto" src={placeholder_image} alt="Placeholder"></img>
					</div>
				</div>

				<hr className="featurette-divider"></hr>

				<div className="row featurette">
					<div className="col-md-7">
						<h2 className="featurette-heading">And lastly, this one. <span className="text-muted">Checkmate.</span></h2>
						<p className="lead">Donec ullamcorper nulla non metus auctor fringilla. Vestibulum id ligula porta felis euismod semper. Praesent commodo cursus magna, vel scelerisque nisl consectetur. Fusce dapibus, tellus ac cursus commodo.</p>
					</div>
					<div className="col-md-5">
						<img className="featurette-image img-fluid mx-auto" src={placeholder_image} alt="Placeholder"></img>
					</div>
				</div>
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
					<p>&copy; 2017-2018 Nimbus Mining &middot; <a href="">Privacy</a> &middot; <a href="">Terms</a></p>
				</footer>
			</div>
		);
	}
}

export default class HomePage extends React.Component {
  render() {
    return (
      <div>
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
