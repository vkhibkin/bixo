import React, {Component} from 'react';
import './TaxonomyWorkBoard.css';
import Taxonomy from "../Taxonomy/Taxonomy";
import PartsSearchPane from "../PartsSearchPane/PartsSearchPane";
import model from "../../utils/ServerRequest";
import Toolbar from "../Toolbar/Toolbar";

class TaxonomyWorkBoard extends Component {

	constructor(props) {
		super(props);
		this.state = {bikeData: {}};
	}

	componentDidMount() {
		model.getData().then(
			(data) => {
				this.setState({bikeData: data.Bike});
			}
		);
	}

	/*
	 <div>
	 <Toolbar/>
	 <div id="workboard">
	 <Taxonomy bikeData={this.state.bikeData}/>
	 <PartsSearchPane />
	 </div>
	 </div>
	/* */

	render() {
		return (
			<div>
				TaxonomyWorkBoard
			</div>

		);
	}
}

export default TaxonomyWorkBoard;
