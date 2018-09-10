import React, {Component} from 'react';
import './PartsSearchPane.css';
import IconButton from "../IconButton/IconButton";
import PartsSearchResultItem from "../PartsSearchResultItem/PartsSearchResultItem";
import PartsSearchFilter from "../PartsSearchFilter/PartsSearchFilter";

class PartsSearchPane extends Component {

	constructor(props) {
		super(props);

		this.handleSearchChange = this.handleSearchChange.bind(this);
		this.handleSearchSubmit = this.handleSearchSubmit.bind(this);
		this.handleFilterOpen = this.handleFilterOpen.bind(this);

	}


	handleSearchChange() {
		console.log("handleSearchChange...");
	}
	handleSearchSubmit() {
		console.log("handleSearchSubmit...");
	}

	handleFilterOpen() {
		console.log("handleFilterOpen...");
	}

	render() {
		return (
			<div id="partsSearchPane">

				<div id="partsSearchPane_SearchRequestContainer">
					<input id="partsSearchPane_SearchStringInput" value={"Search..."} onChange={this.handleSearchChange}/>

					<IconButton iconName="wrench" mouseDownCallback={this.handleSearchSubmit}/>
					<IconButton iconName="wrench" mouseDownCallback={this.handleFilterOpen}/>
				</div>



				<PartsSearchFilter />

				<div id="partsSearchPane_SearchResultsContainer">

					<ul>
						<li>
							<PartsSearchResultItem />
						</li>
						<li>
							<PartsSearchResultItem />
						</li>
						<li>
							<PartsSearchResultItem />
						</li>
						<li>
							<PartsSearchResultItem />
						</li>
					</ul>
				</div>

			</div>
		);
	}
}

export default PartsSearchPane;
