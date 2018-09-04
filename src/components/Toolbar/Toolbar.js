import React, {Component} from 'react';
import './Toolbar.css';
import IconButton from "../IconButton/IconButton";

class Toolbar extends Component {
	render() {
		return (
			<div id="toolbar">
				<ul className="toolbarList">
					<li className="toolbarItem">
						<IconButton iconName="wrench"/>
					</li>
					<li className="toolbarItem">
						<IconButton iconName="gavel"/>
					</li>
					<li className="toolbarItem">
						<IconButton iconName="search"/>
					</li>
					<li className="toolbarItem">
						<IconButton iconName="search"/>
					</li>
				</ul>
			</div>
		);
	}
}

export default Toolbar;
