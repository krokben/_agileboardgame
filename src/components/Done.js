import React, { Component } from 'react';
import UserStories from './UserStories';
import MaintenanceCards from './MaintenanceCards';
import DefectCards from './DefectCards';

export default class Done extends Component {
	render() {
		return (
			<div className="Analysis_boardColumn">
				<div className="Analysis_diceHolder">
				</div>
				<div className="Analysis_cardHolder">
					<h4>Done</h4>
					<UserStories location="done" cards={this.props.cards} />
					<MaintenanceCards location="done" cards={this.props.cards} />
					<DefectCards location="done" cards={this.props.cards} />
				</div>
			</div>
		);
	}
}
