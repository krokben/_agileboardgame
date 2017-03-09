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
					analysis={this.props.analysis}
					workers={this.props.workers}
					chooseWorker={this.props.chooseWorker}
					placeWorker={this.props.placeWorker}
					ref={(diceHolder) => this.diceHolder = diceHolder}
				/>
				<div className="Analysis_cardHolder">
					<h4>Analysis</h4>
					<UserStories location="analysis" cards={this.props.cards} />
					<MaintenanceCards location="analysis" cards={this.props.cards} />
					<DefectCards location="analysis" cards={this.props.cards} />
				</div>
			</div>
		);
	}
}
