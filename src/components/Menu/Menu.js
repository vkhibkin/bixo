import React, {Component} from 'react';
import './Menu.css';

class Menu extends Component {
	render() {
		return (
			<div id="menu">
				<ul className="menuList">
					<li className="menuItem"><span>a</span></li>
					<li className="menuItem"><span>b</span></li>
					<li className="menuItem"><span>c</span></li>
					<li className="menuItem"><span>d</span></li>
				</ul>

			</div>
		);
	}
}

export default Menu;
