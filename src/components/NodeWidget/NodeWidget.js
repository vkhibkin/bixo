import React, {Component} from 'react';
import './NodeWidget.css';

class NodeWidget extends Component {




	render() {


		console.log(this.props);

		const nodeObject = this.props.nodeObject,
			subComponents = nodeObject.subComponents || {};


		//{nodeObject.subComponents.map((subComponent) => <span>{subComponent.displayName}</span>)}


		return (
			<div className="taxonomyNode">


				<div>
					<div className="nodeIcon">abr</div>
					<div className="nodeTitle">{nodeObject.displayName}</div>

					<div className="subNodes">




						{Object.keys(subComponents).map(function(key) {
							console.log(subComponents[key]);
							return <NodeWidget key={key} nodeObject={subComponents[key]}/>;
						})}



					</div>

				</div>

			</div>
		);
	}
}

export default NodeWidget;
