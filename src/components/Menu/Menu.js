import React, {Component} from 'react';
import './Menu.css';
import TextButton from "../TextButton/TextButton";

class Menu extends Component {
	render() {
		return (
			<div id="menu">

				<div id="logo">

					<svg viewBox='0 0 44 44'>
						<rect width='44' height='44'/>
						<path d='M287.94,173.44h-8.08a3.34,3.34,0,0,1-2.5-.78,3.52,3.52,0,0,1-.75-2.5V150.29a3.46,3.46,0,0,1,.77-2.51,3.4,3.4,0,0,1,2.48-.77h8.56a20,20,0,0,1,3.28.23,7,7,0,0,1,2.49.9,6.53,6.53,0,0,1,1.66,1.42,6.24,6.24,0,0,1,1.1,1.89,6.33,6.33,0,0,1,.38,2.19q0,4-4,5.8,5.21,1.66,5.21,6.45a7.25,7.25,0,0,1-1.14,4,6.82,6.82,0,0,1-3.06,2.62,10.9,10.9,0,0,1-2.78.71A28.29,28.29,0,0,1,287.94,173.44ZM282,151v6.83h4.9a9.85,9.85,0,0,0,3.09-.38,3,3,0,0,0,1.67-1.44,3.25,3.25,0,0,0,.45-1.69,2.63,2.63,0,0,0-1.42-2.66,10.88,10.88,0,0,0-4.34-.66Zm5.57,10.67H282v7.72h5.75q5.43,0,5.43-3.91a3.19,3.19,0,0,0-1.41-2.9A7.88,7.88,0,0,0,287.55,161.7Z'
							  transform='translate(-270 -140)'/>
						<path d='M303,156.75a2.29,2.29,0,0,1,.72-1.69,2.35,2.35,0,0,1,1.71-.71,2.4,2.4,0,0,1,0,4.8,2.37,2.37,0,0,1-1.71-.7A2.28,2.28,0,0,1,303,156.75Z'
							  transform='translate(-270 -140)'/>
						<path d='M303.9,161.64H307v14.87h-3.1Z' transform='translate(-270 -140)'
						/>
						<path d='M303,156.78a2.29,2.29,0,0,1,.72-1.69,2.35,2.35,0,0,1,1.71-.71,2.4,2.4,0,0,1,0,4.8,2.37,2.37,0,0,1-1.71-.7A2.28,2.28,0,0,1,303,156.78Z'
							  transform='translate(-270 -140)'/>
					</svg>
				</div>

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
