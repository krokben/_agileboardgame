import React, { Component } from 'react';
import DiceHolder from './DiceHolder';

export default class Test extends Component {
	render() {
		return (
			<div className="Analysis_boardColumn">
				<DiceHolder
					location='test'
					workers={this.props.workers}
					chooseWorker={this.props.chooseWorker}
					placeWorker={this.props.placeWorker}
				/>
				<div className="Analysis_cardHolder">
					Test
				</div>
			</div>
		);
	}
}
