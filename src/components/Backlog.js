import React, { Component } from 'react';
import UserStories from './UserStories';
import MaintenanceCards from './MaintenanceCards';
import DefectCards from './DefectCards';

export default class Backlog extends Component {
	render() {
		return (
			<div className="Analysis_boardColumn">
				<div className="Analysis_diceHolder">
					Empty
				</div>
				<div className="Analysis_cardHolder">
					Backlog
					<UserStories location="backlog" cards={this.props.cards} choose={this.props.choose} />
					<MaintenanceCards location="backlog" cards={this.props.cards} choose={this.props.choose} />
					<DefectCards location="backlog" cards={this.props.cards} choose={this.props.choose} />
				</div>
			</div>
		);
	}
}
