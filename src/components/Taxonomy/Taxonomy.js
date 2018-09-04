import React, {Component} from 'react';
import './Taxonomy.css';
import NodeWidget from "../NodeWidget/NodeWidget";

import GraphicPane from "../GraphicPane/GraphicPane";

class Taxonomy extends Component {

	constructor(props) {
		super(props);
		this.updateGraphicPane = this.updateGraphicPane.bind(this);

		this.graphicPane = React.createRef();
	}

	updateGraphicPane() {
		//console.log("updateGraphicPane...");
		//console.log(this.props.bikeData);

		//console.log(this.graphicPane);

		//TODO: calcalte width on the fly
		//this.graphicPane.current.updateCanvasSize(300, 400);

		//NOTE canvass resize is causing it to clear...
		//need a different approach
		//this.graphicPane.current.drawSubComponentConnection(this.props.bikeData);
	}

	render() {
		return (
			<div id="taxonomyPane">




				<GraphicPane ref={this.graphicPane}/>

				<div>
					<NodeWidget key={'root'} nodeObject={this.props.bikeData} updateGraphicPane={this.updateGraphicPane}/>
				</div>
			</div>
		);
	}
}

export default Taxonomy;
