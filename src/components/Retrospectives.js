import React, { Component } from 'react';

export default class Retrospectives extends Component {
	render() {
		return (
			<div className="Retrospectives">
				<div className="Retrospectives_container">
					<h2>Retrospective</h2>
						{this.props.retrospectives[this.props.retrospectiveIndex - 1].text}
				</div>
				<button onClick={this.props.closeRetrospective}>Close</button>
			</div>
		);
	}
}
