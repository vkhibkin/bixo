import React, {Component} from 'react';
//import logo from '../../logo.svg';
import './App.css';
import Menu from "../Menu/Menu";
import Toolbar from "../Toolbar/Toolbar";
import WorkBoard from "../WorkBoard/WorkBoard";

import Promise from "bluebird";

class App extends Component {


	render() {

		console.log(Promise);
		//var Promise = require("bluebird");

		return (
			<div className="App">
				<Menu/>
				<div id="mainContent">
					<Toolbar/>
					<WorkBoard/>
				</div>
				<div id="footer"></div>
			</div>
		);
	}
}

export default App;
