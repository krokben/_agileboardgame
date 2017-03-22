import React, { Component } from 'react';

export default class Status extends Component {
	render() {
		return (
			<div>
				<div className="Status_score">Earnings:<br />{this.props.score}</div>
			</div>
		);
	}
}
