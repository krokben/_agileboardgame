import React, { Component } from 'react';

export default class Status extends Component {
	render() {
		return (
			<div>
				<div className="Status_score">${this.props.score}</div>
			</div>
		);
	}
}
