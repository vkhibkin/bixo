import React, {Component} from 'react';
import './WorkBoard.css';
import Taxonomy from "../Taxonomy/Taxonomy";
import model from "../../utils/ServerRequest";

class WorkBoard extends Component {

	constructor(props) {
		super(props);
		this.state = {bikeData: {}};
	}

	componentDidMount() {
		model.getData().then(
			(data) => {
				this.setState({bikeData: data.Bike});
			}
		);
	}

	render() {
		return (
			<div id="workboard">
				<Taxonomy bikeData={this.state.bikeData}/>
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
