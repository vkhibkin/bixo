import React, {Component} from 'react';
import './App.css';
import Menu from "../Menu/Menu";
import Toolbar from "../Toolbar/Toolbar";
import WorkBoard from "../WorkBoard/WorkBoard";



class App extends Component {




	render() {






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


App.Model = function() {

}();

export default App;
