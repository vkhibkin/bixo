import React, {Component} from 'react';
import './IconButton.css';


class IconButton extends Component {


	render() {

		const iClassName = "fa fa-" + this.props.iconName;

		return (
			<span className="iconButton">
				<i className={iClassName} onMouseDown={this.props.mouseDownCallback}></i>
			</span>
		);
	}
}

export default IconButton;
