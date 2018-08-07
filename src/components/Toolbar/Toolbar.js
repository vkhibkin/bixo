import React, {Component} from 'react';
import './Toolbar.css';

class Toolbar extends Component {
	render() {
		return (
			<div id="toolbar">

				<ul className="toolbarList">
					<li className="toolbarItem"><span>a</span></li>
					<li className="toolbarItem"><span>b</span></li>
					<li className="toolbarItem"><span>c</span></li>
					<li className="toolbarItem"><span>d</span></li>
				</ul>


			</div>
		);
	}
}

export default Toolbar;
