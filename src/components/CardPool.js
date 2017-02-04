import React, {Component} from 'react';
import UserStories from './UserStories';
import MaintenanceCards from './MaintenanceCards';
import DefectCards from './DefectCards';

export default class CardPool extends Component {
	render() {
		return (
			<div className="CardPool_container">
				<UserStories cards={this.props.cards} drag={this.props.drag} />
				<MaintenanceCards cards={this.props.cards} drag={this.props.drag} />
				<DefectCards cards={this.props.cards} drag={this.props.drag} choose={this.props.choose} />
			</div>
		);
	}
}