import React, { Component } from 'react';

export default class PlayButton extends Component {
	render() {
		return (
			<div>
				<button onClick={this.props.rollDice}>Play!</button>
			</div>
		);
	}
}
