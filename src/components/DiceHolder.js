import React, { Component } from 'react';
import Workers from './Workers';

export default class DiceHolder extends Component {
	render() {
		return (
			<div className="Analysis_diceHolder" onClick={() => this.props.placeWorker(this.props.location)}>
				Dices
				<Workers location={this.props.location} workers={this.props.workers} chooseWorker={this.props.chooseWorker} />
			</div>
		);
	}
}
