import React, { Component } from 'react';
import DiceHolder from './DiceHolder';

export default class Development extends Component {
	render() {
		return (
			<div className="Analysis_boardColumn">
				<DiceHolder
					location='development'
					workers={this.props.workers}
					chooseWorker={this.props.chooseWorker}
					placeWorker={this.props.placeWorker}
				/>
				<div className="Analysis_cardHolder">
					Development
				</div>
			</div>
		);
	}
}
