import React, { Component } from 'react';
import DiceHolder from './DiceHolder';
import UserStories from './UserStories';
import MaintenanceCards from './MaintenanceCards';
import DefectCards from './DefectCards';

export default class Test extends Component {
	render() {
		return (
			<div className="Analysis_boardColumn">
				<DiceHolder
					location='test'
					workers={this.props.workers}
					chooseWorker={this.props.chooseWorker}
					placeWorker={this.props.placeWorker}
				/>
				<div className="Analysis_cardHolder">
					<h4>Test</h4>
					<UserStories location="test" cards={this.props.cards} />
					<MaintenanceCards location="test" cards={this.props.cards} />
					<DefectCards location="test" cards={this.props.cards} />
				</div>
			</div>
		);
	}
}
