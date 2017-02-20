import React, {Component} from 'react';

export default class ActionCard extends Component {
	constructor() {
		super();
		this.state = {
			stopped: true,
			dice: 0
		}
	}

	componentDidMount() {
		this.stopStart();
	}

	render() {
		return (
			<div className="ActionCard_container">
				{this.renderActionCard()}
			</div>
		);
	}

	renderActionCard() {
		if (this.props.days[2].current === 'yes') { // Action card 1
			return (
				<div>
					<h2>Action card 1</h2>
					<p>One of the developers gets a fever and will be away for one dice throw of days.</p>
					<div className="ActionCard_dice" onClick={this.stopStart.bind(this)} ref={(dice) => this.dice = dice}>{this.state.dice}</div>
				</div>
			);
		}
	}

	stopStart() {
		const that = this;
		let t;

		if(that.state.stopped) {
			const dices = ['⚀','⚁','⚂','⚃','⚄','⚅'];
			const stateCopy = {...that.state};
            stateCopy.stopped = false;
            t = setInterval(function() {
				const random = Math.floor(Math.random() * 6);
				stateCopy.dice = dices[random];
				that.setState(stateCopy);
			}, 100);
		} else {
			clearInterval(t);
			const stateCopy = {...that.state};
            stateCopy.stopped = true;
            that.setState(stateCopy);
		}
	}
}