import React, {Component} from 'react';
import './Taxonomy.css';

import NodeWidget from "../NodeWidget/NodeWidget";

class Taxonomy extends Component {
	render() {
		return (
			<div id="taxonomyPane">
				<ul>
					<NodeWidget/>
					<NodeWidget/>
					<NodeWidget/>
					<NodeWidget/>
				</ul>
			</div>
		);
	}
}

export default Taxonomy;
