import React, { Component } from 'react';

export default class PlayButton extends Component {
	render() {
		return (
			<div>
				<button onClick={this.countAndThrow.bind(this)}>Play!</button>
			</div>
		);
	}
	countAndThrow(){
		const day = this.props.days.filter((item) => item.current === 'yes')[0].id;
		this.props.rollDice();
		this.props.countDays(day);
	}
}
