import React, { Component } from 'react';

export default class PlayButton extends Component {
	render() {
		return (
			<button className="PlayButton_button" onClick={this.countAndThrow.bind(this)} disabled={this.props.showRetrospective || this.props.actionCard ? true : false} ref={(playBtn) => this.playBtn = playBtn}>►</button>
		);
	}
	countAndThrow(){
		const day = this.props.days.filter((item) => item.current === 'yes')[0].id;
		this.props.rollDice();
		this.props.countDays(day);
		this.props.changeLocations();
		this.props.hasRetrospective();
	}
}
