import React, { Component } from 'react';

export default class PlayButton extends Component {
	render() {
		return (
			<div className="myButton">
				<button onClick={this.countAndThrow.bind(this)} ref={(playBtn) => this.playBtn = playBtn}>PLAY!</button>
			</div>
		);
	}
	countAndThrow(){
		const day = this.props.days.filter((item) => item.current === 'yes')[0].id;
		this.props.rollDice();
		this.props.countDays(day);
	}
}
	