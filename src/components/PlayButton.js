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
		this.props.rollDice();
		this.props.countDays();
	}
}
