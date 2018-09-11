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

				<div id="partsSearchPane_SearchRequestClose">
					<i class="fa fa-times"></i>
				</div>

				<div id="partsSearchPane_SearchRequestContainer">
					<input id="partsSearchPane_SearchStringInput" value={"Search..."} onChange={this.handleSearchChange}/>

					<span id="partsSearchPane_IconButtonContainer">
						<IconButton iconName="search" mouseDownCallback={this.handleSearchSubmit}/>
						<IconButton iconName="bars" mouseDownCallback={this.handleFilterOpen}/>
					</span>

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
