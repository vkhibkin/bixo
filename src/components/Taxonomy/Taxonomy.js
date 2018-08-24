import React, {Component} from 'react';
import './Taxonomy.css';

import NodeWidget from "../NodeWidget/NodeWidget";

class Taxonomy extends Component {

	/*
	constructor(props) {
		super(props);
		//console.log(props);
	}/* */

	render() {

		//console.log("Taxonomy.redner...")



		return (
			<div id="taxonomyPane">
				<div>

					<NodeWidget nodeObject={this.props.bikeData} />

				</div>
			</div>
		);
	}
}

export default Taxonomy;
