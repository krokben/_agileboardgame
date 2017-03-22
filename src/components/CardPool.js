import React, {Component} from 'react';
import UserStories from './UserStories';
import MaintenanceCards from './MaintenanceCards';
import DefectCards from './DefectCards';

export default class CardPool extends Component {
	render() {
		return (
			<div className="CardPool_container">
				<h4>Cardpool</h4>
				<UserStories location="cardpool" cards={this.props.cards} choose={this.props.choose} />
				<MaintenanceCards location="cardpool" cards={this.props.cards} choose={this.props.choose} />
				<DefectCards location="cardpool" cards={this.props.cards} choose={this.props.choose} />
			</div>
		);
	}
}