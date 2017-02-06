import React, { Component } from 'react';
import UserStories from './UserStories';
import MaintenanceCards from './MaintenanceCards';
import DefectCards from './DefectCards';

export default class Analysis extends Component {
	render() {
		return (
			<div className="Analysis_boardColumn">
				<div className="Analysis_diceHolder">
					Dices
				</div>
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
