import React, { Component } from 'react';

export default class Rules extends Component {
	render() {
		return (
			<div className="Rules">
				<h1>Rules</h1>
        <button onClick={this.props.closeRules}>Close</button>


 

			</div>
			);
			
		
	}
}
