import React, {Component} from 'react';
import './Menu.css';
import TextButton from "../TextButton/TextButton";

class Menu extends Component {
	render() {
		return (
			<div id="menu">

				<div id="logo"></div>

				<ul className="menuList leftMenu">
					<li>
						<TextButton />
					</li>
					<li>
						<TextButton />
					</li>
					<li>
						<TextButton />
					</li>
					<li>
						<TextButton />
					</li>
				</ul>

				<ul className="menuList rightMenu">
					<li>
						<TextButton />
					</li>
					<li>
						<TextButton />
					</li>
					<li>
						<TextButton />
					</li>
					<li>
						<TextButton />
					</li>
				</ul>


			</div>
		);
	}
}

export default Menu;
