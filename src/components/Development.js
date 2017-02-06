import React, { Component } from 'react';
import Workers from './Workers';

export default class Development extends Component {
	render() {
		return (
			<div className="Analysis_boardColumn">
				<div className="Analysis_diceHolder" onClick={() => this.props.placeWorker('development')}>
					Dices
					<Workers location="development" workers={this.props.workers} chooseWorker={this.props.chooseWorker} />
				</div>
				<div className="Analysis_cardHolder">
					Development
				</div>
			</div>
		);
	}
}
