import React, {Component} from 'react';
import './PartsSearchFilter.css';
import TypeAheadMultiSelect from "../TypeAheadMultiSelect/TypeAheadMultiSelect";


class PartsSearchFilter extends Component {


	//TODO figure out what filtwers are needed.

	//TODO sie this pane dynamicaly based on window size. make sure window size event is contianed with in componenet, and doesnt override any other widnow event.

	/*
	 filterszzzzzs...

	 prototype / vs / instance, need user facing language

	 component type... type ahead feild

	 compatable with... typeof ahead feild
	/* */

	render() {
		return (
			<div className="partsSearchFilter">

				<div>Filter Name 1:</div>
				<TypeAheadMultiSelect />
				<div>Filter Name 2:</div>
				<TypeAheadMultiSelect />










			</div>
		);
	}
}

export default PartsSearchFilter;
