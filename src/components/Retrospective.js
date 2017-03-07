import React, { Component } from 'react';

export default class Retrospective extends Component {
	render() {
		return (
			<div className="Retrospective">
				<div className="Retrospective_container">
					<h2>Retrospective</h2>
					<p>Let us reflect! What can we improve?</p>
					<textarea ref={(x) => this.textArea = x}></textarea><br />
					<button onClick={() => this.props.saveRetrospective(this.textArea.value)}>Save</button>
				</div>

			</div>
		);
	}
}
