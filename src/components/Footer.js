import React, { Component } from 'react';
import PlayButton from './PlayButton';


export default class Footer extends Component {
	render() {
		return (
			<div className="Footer_container">
				<div className="Logo">The Agile Board Game!</div>
				<PlayButton hasRetrospective={this.props.hasRetrospective} showRetrospective={this.props.showRetrospective} actionCard={this.props.actionCard} days={this.props.days} countDays={this.props.countDays} rollDice={this.props.rollDice} changeLocations={this.props.changeLocations} ref={(playButton) => this.playButton = playButton} />
			</div>
		);
	}
}
