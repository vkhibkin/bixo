import React, {Component} from 'react';
import './Home.css';
/*
 <div className="App">
 <Menu/>
 <div id="mainContent">
 <Toolbar/>
 <TaxonomyWorkBoard/>
 </div>
 <div id="footer"></div>
 </div>
 /* */

class Home extends Component {



	/*
	 home() {
	 <div>
	 <h2>Home</h2>
	 </div>
	 }

	 taxonomy() {
	 <div>
	 <h2>Taxonomy</h2>
	 </div>
	 }/* */

	/*
	 <Router>
	 <div>
	 <ul>
	 <li><Link to="/">Home</Link></li>
	 <li><Link to="/about">About</Link></li>
	 <li><Link to="/topics">Topics</Link></li>
	 </ul>

	 <hr/>

	 <Route exact path="/" component={Home}/>
	 <Route path="/about" component={About}/>
	 <Route path="/topics" component={Topics}/>
	 </div>
	 </Router>
	 /* */

	render() {
		return (

			<div>
				Home
			</div>

		);
	}
}

export default Home;
