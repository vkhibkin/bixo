import React, {Component} from 'react';
import {
	BrowserRouter as Router,
	Route,
	Link
} from 'react-router-dom'


import './App.css';
import Menu from "../Menu/Menu";
import Home from "../Home/Home";
import Manage from "../Manage/Manage";
import TaxonomyWorkBoard from "../TaxonomyWorkBoard/TaxonomyWorkBoard";



class App extends Component {



	render() {
		return (

				<div className="App">

						<Menu/>
						<Router>
							<div id="mainContent">
								<Route exact path="/" component={Home}/>
								<Route path="/taxonomy" component={TaxonomyWorkBoard}/>
								<Route path="/manage" component={Manage}/>
							</div>
						</Router>

					<div id="footer"></div>
				</div>

		);
	}
}

export default App;
