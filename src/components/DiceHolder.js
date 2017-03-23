import React, { Component } from 'react';
import Workers from './Workers';

export default class DiceHolder extends Component {
	render() {
		return (
			<div className="Analysis_diceHolder" onClick={() => this.props.placeWorker(this.props.location)} ref={(diceHolder) => this.diceHolder = diceHolder}>
				<Workers styleName="" location={this.props.location} workers={this.props.workers} chooseWorker={this.props.chooseWorker} />
				{this.props.location === 'analysis' && this.props.analysis.score !== 0 ? <div className="Analysis_diceHolder_score">{this.props.analysis.score}</div> : null}
				{this.props.location === 'development' && this.props.development.score !== 0 ? <div className="Analysis_diceHolder_score">{this.props.development.score}</div> : null}
				{this.props.location === 'test' && this.props.test.score !== 0 ? <div className="Analysis_diceHolder_score">{this.props.test.score}</div> : null}
			</div>
		);
	}
}
