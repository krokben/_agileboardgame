import React, { Component } from 'react';
import DiceHolder from './DiceHolder';
import UserStories from './UserStories';
import MaintenanceCards from './MaintenanceCards';
import DefectCards from './DefectCards';

export default class Analysis extends Component {
	render() {
		return (
			<div className="Analysis_boardColumn">
				<DiceHolder
					location='analysis'
					workers={this.props.workers}
					chooseWorker={this.props.chooseWorker}
					placeWorker={this.props.placeWorker}
				/>
				<div className="Analysis_cardHolder">
					Analysis
					<UserStories location="analysis" cards={this.props.cards} choose={this.props.choose} />
					<MaintenanceCards location="analysis" cards={this.props.cards} choose={this.props.choose} />
					<DefectCards location="analysis" cards={this.props.cards} choose={this.props.choose} />
				</div>
			</div>
		);
	}
}
