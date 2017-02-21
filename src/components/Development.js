import React, { Component } from 'react';
import DiceHolder from './DiceHolder';
import UserStories from './UserStories';
import MaintenanceCards from './MaintenanceCards';
import DefectCards from './DefectCards';

export default class Development extends Component {
	render() {
		return (
			<div className="Analysis_boardColumn">
				<DiceHolder
					location='development'
					workers={this.props.workers}
					chooseWorker={this.props.chooseWorker}
					placeWorker={this.props.placeWorker}
				/>
				<div className="Analysis_cardHolder">
					<h4>Development</h4>
					<UserStories location="development" cards={this.props.cards} />
					<MaintenanceCards location="development" cards={this.props.cards} />
					<DefectCards location="development" cards={this.props.cards} />
				</div>
			</div>
		);
	}
}