import React, {Component} from 'react';
import './NodeWidget.css';

class NodeWidget extends Component {

	constructor(props) {


		super(props);

		//console.log(this.props);

		this.state = {
			showTitle: false,
			subComponentsPresent: this.subNodesPresent(props),
			showSubNodes: false
		};
		this.toggleTitle = this.toggleTitle.bind(this);
		this.toggleSubNodes = this.toggleSubNodes.bind(this);
	}

	componentDidUpdate(prevProps, prevState, snapshot) {
		if(this.props.nodeObject.subComponents !== prevProps.nodeObject.subComponents) {
			this.setState({subComponentsPresent: this.subNodesPresent(this.props)});
		}
	}

	subNodesPresent(props) {
		var obj;
		if(props && props.nodeObject && props.nodeObject.subComponents) {
			obj = props.nodeObject.subComponents;
			for(let prop in  obj) {
				if(obj.hasOwnProperty(prop)) {
					return true;
				}
			}
			return false;
		} else {
			return false;
		}
	}

	toggleTitle() {
		//TODO: need to prevent default highliting behavior.
		this.setState({showTitle: !this.state.showTitle});
	}

	toggleSubNodes() {

		this.props.nodeObject.nodeIsExpanded = !this.state.showSubNodes;
		this.setState({showSubNodes: !this.state.showSubNodes});

		//NOTE: even though nodeObject is owned by this compoenent its still referenced in the parent component.
		//this is convenient in doing things like... the following.

		//NOTE: is there a guaranteee that this si safe to do..

		//TODO: Place information here for the updateGraphicPane to use
		//this should be information about location of
		// for isntance flag that states to dar or not draw choidlren,
		// at the moment that might be all that nescesary.

		this.props.updateGraphicPane();
	}

	render() {
		const nodeObject = this.props.nodeObject,
			subComponents = nodeObject.subComponents || {},
			updateGraphicPane = this.props.updateGraphicPane;



		return (
			<div className="taxonomyNode">
				<div className="nodeLabel">
					{this.state.subComponentsPresent ? (
						<div className="toggleIcon" onClick={this.toggleSubNodes}>a</div>
					) : (
						<div className="toggleIcon" ></div>
					)}
					<div className="nodeIcon" onClick={this.toggleTitle}>abr</div>

					<div className="nodeTitle">{nodeObject.displayName}</div>


						<div className="subNodes" style={{display: (this.state.showSubNodes)?'block':'none'}}>
							{Object.keys(subComponents).map(function(key) {
								return <NodeWidget key={key} nodeObject={subComponents[key]} updateGraphicPane={updateGraphicPane}/>;
							})}
						</div>

				</div>
			</div>
		);
	}
}

export default NodeWidget;
