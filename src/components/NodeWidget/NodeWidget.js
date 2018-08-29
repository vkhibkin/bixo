import React, {Component} from 'react';
import './NodeWidget.css';

class NodeWidget extends Component {

	constructor(props) {
		super(props);
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
		this.setState({showSubNodes: !this.state.showSubNodes});
	}

	render() {
		const nodeObject = this.props.nodeObject,
			subComponents = nodeObject.subComponents || {};
		return (
			<div className="taxonomyNode">
				<div className="nodeLabel">
					{this.state.subComponentsPresent ? (
						<div className="toggleIcon" onClick={this.toggleSubNodes}>a</div>
					) : (
						<div className="toggleIcon" ></div>
					)}
					<div className="nodeIcon" onClick={this.toggleTitle}>abr</div>
					{this.state.showTitle &&
						<div className="nodeTitle">{nodeObject.displayName}</div>
					}
					{this.state.showSubNodes &&
						<div className="subNodes">
							{Object.keys(subComponents).map(function(key) {
								return <NodeWidget key={key} nodeObject={subComponents[key]}/>;
							})}
						</div>
					}
				</div>
			</div>
		);
	}
}

export default NodeWidget;
