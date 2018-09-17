import React, {Component} from 'react';
import './TypeAheadMultiSelect.css';
import ArrowKeysReact from 'arrow-keys-react';

class TypeAheadMultiSelect extends Component {

	constructor(props) {

		super(props);

		//console.log(this.props);
		ArrowKeysReact.config({
			left: () => {
				console.log('left key detected.');
			},
			right: () => {
				console.log('right key detected.');
			},
			up: () => {
				console.log('up key detected.');
			},
			down: () => {
				console.log('down key detected.');
			}
		});
		/*
		this.state = {
			showTitle: false,
			subComponentsPresent: this.subNodesPresent(props),
			showSubNodes: false,
			showDescription: false
		};/* */

		//this.toggleTitle = this.toggleTitle.bind(this);


	}
	//TODO figure out what filtwers are needed.

	handleInputKeyPress(evt) {
		console.log(evt);
	}


	//TODO: try using this for key capture
	//https://www.npmjs.com/package/arrow-keys-react


	render() {
		return (

			//style={{width: "200px"}}

				<div className="typeAheadMultiSelect">

					<div className="typeAheadMultiSelect_InputContainer">
						<input {...ArrowKeysReact.events} className="typeAheadMultiSelect_Input" onKeyPress={this.handleInputKeyPress}/>


						<div className="typeAheadMultiSelect_Hints">
							<ul className="typeAheadMultiSelect_HintsList">

								<li className="typeAheadMultiSelect_HintsItem">hint 1</li>
								<li className="typeAheadMultiSelect_HintsItem highlightedItem">hint 2</li>
								<li className="typeAheadMultiSelect_HintsItem">hint 3</li>
								<li className="typeAheadMultiSelect_HintsItem">hint 4</li>
								<li className="typeAheadMultiSelect_HintsItem">hint 5</li>
								<li className="typeAheadMultiSelect_HintsItem">hint 6</li>

							</ul>
						</div>

					</div>



					<div className="typeAheadMultiSelect_SelectedFilters">


						<div className="typeAheadMultiSelect_SingleSelectedFilter">
							<span>Filter Name</span>
							<span className="typeAheadMultiSelect_RemoveSelectedFilter">x</span>
						</div>

						<div className="typeAheadMultiSelect_SingleSelectedFilter">
							<span>Filter Name 2</span>
							<span className="typeAheadMultiSelect_RemoveSelectedFilter">x</span>
						</div>

						<div className="typeAheadMultiSelect_SingleSelectedFilter">
							<span>Filter Name 2</span>
							<span className="typeAheadMultiSelect_RemoveSelectedFilter">x</span>
						</div>


						<div className="typeAheadMultiSelect_SingleSelectedFilter">
							<span>Filter Name 2</span>
							<span className="typeAheadMultiSelect_RemoveSelectedFilter">x</span>
						</div>


						<div className="typeAheadMultiSelect_SingleSelectedFilter">
							<span>Filter Name reddf</span>
							<span className="typeAheadMultiSelect_RemoveSelectedFilter">x</span>
						</div>

						<div className="typeAheadMultiSelect_SingleSelectedFilter">
							<span>Filter Name Longer</span>
							<span className="typeAheadMultiSelect_RemoveSelectedFilter">x</span>
						</div>

					</div>



				</div>

		);
	}
}

export default TypeAheadMultiSelect;
