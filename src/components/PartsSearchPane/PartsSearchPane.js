import React, {Component} from 'react';
import './PartsSearchPane.css';
import IconButton from "../IconButton/IconButton";

class PartsSearchPane extends Component {

	render() {
		return (
			<div id="partsSearchPane">

				<div id="partsSearchPane_SearchRequestContainer">
					<input id="partsSearchPane_SearchStringInput" value={"Search..."}/>

					<IconButton iconName="wrench"/>
					<IconButton iconName="wrench"/>
				</div>
				<ul>
					<li>abc</li>
					<li>b</li>
					<li>c</li>
					<li>d</li>
				</ul>
			</div>
		);
	}
}

export default PartsSearchPane;
