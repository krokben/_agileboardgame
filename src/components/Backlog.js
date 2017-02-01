import React, { Component } from 'react';

export default class Backlog extends Component {
	render() {
		return (
			<div className="Analysis_boardColumn">
				<div className="Analysis_diceHolder" onDrop={(evt) => this.props.drop(evt)} onDragOver={(evt) => this.props.allowDrop(evt)}>
					Dices
				</div>
				<div className="Analysis_cardHolder" onDrop={(evt) => this.props.drop(evt)} onDragOver={(evt) => this.props.allowDrop(evt)}>
					Backlog
				</div>
			</div>
		);
	}
}
