import React, {Component} from 'react';
import './WorkBoard.css';

import Taxonomy from "../Taxonomy/Taxonomy";

class WorkBoard extends Component {
	render() {
		return (
			<div id="workboard">
				<Taxonomy />

				<div id="partsSearchPane">
					<ul>
						<li>a</li>
						<li>b</li>
						<li>c</li>
						<li>d</li>
					</ul>
				</div>

			</div>
		);
	}
}

export default WorkBoard;
