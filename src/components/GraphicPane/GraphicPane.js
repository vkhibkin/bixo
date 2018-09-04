import React, {Component} from 'react';
import './GraphicPane.css';


class GraphicPane extends Component {

	constructor(props) {

		super(props);

		console.log(this.props);

		this.state = {
			width: 600,
			height: 600,
		};

		this.graphicPaneCanvas = React.createRef();

		this.updateCanvasSize = this.updateCanvasSize.bind(this);
		this.drawSubComponentConnection = this.drawSubComponentConnection.bind(this);
		this.drawConnection = this.drawConnection.bind(this);


	}





	updateCanvasSize(width, height) {
		/*
		this.setState({
			width: width,
			height: height
		});
		/* */
	}

	drawSubComponentConnection(rootObject, start) {

		console.log("drawSubComponentConnection...")

		var ctx = this.graphicPaneCanvas.current.getContext("2d");
		var start = start || {x: 15, y: 15};

		ctx.clearRect(0,0,800,800);

		console.log(rootObject);
		if(rootObject.nodeIsExpanded) {

			var subNodes = rootObject.subComponents;
			var count = 1;





			for(let prop in  subNodes) {
				if(subNodes.hasOwnProperty(prop)) {
					//return true;

					let finish = {
						x: start.x + 30,
						y: start.y + 30 * count
					};
					this.drawConnection(ctx, start, finish);
				}
				count ++ ;
			}



		}
	}



	drawConnection(ctx, start, finish) {

		//ctx.clearRect

		console.log(start);
		console.log(finish);



		ctx.save();

		ctx.beginPath();
		ctx.moveTo(start.x, start.y);
		ctx.lineTo(finish.x, finish.y);
		ctx.stroke();

		ctx.restore()
	}

	componentDidMount() {

	}

	//https://svg2jsx.herokuapp.com/

	render() {

		console.log("redener...");

		return (

			<div>
				<svg id="graphicPaneCanvas" xmlns='http://www.w3.org/2000/svg' viewBox={[0, 0, 800, 800]}>

					<line x1={20} y1={10} x2={120} y2={100} stroke='black' strokeWidth='1'/>

				</svg>
			</div>



		);
	}
}

export default GraphicPane;