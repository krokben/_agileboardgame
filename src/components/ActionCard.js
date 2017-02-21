import React, {Component} from 'react';
import dice from './../img/dice.gif';
import dice1 from './../img/dice1.gif';
import dice2 from './../img/dice2.gif';
import dice3 from './../img/dice3.gif';
import dice4 from './../img/dice4.gif';
import dice5 from './../img/dice5.gif';
import dice6 from './../img/dice6.gif';

export default class ActionCard extends Component {
	constructor() {
		super();
		this.state = {
			rolled: false,
			stopped: true,
			dice: dice,
			result: Math.floor((Math.random() * 6) + 1)
		}
	}

	componentDidMount() {
		this.props.playBtn.disabled = true; // Disable play button
	}

	render() {
		if (!this.state.rolled) {
			return (
				<div className="ActionCard_container">
					{this.renderActionCard()}
				</div>
			);
		} else {
			return null;
		}
	}

	renderActionCard() {
		if (this.props.days[2].current === 'yes') { // Action card 1
			return (
				<div>
					<h2>Action card 1</h2>
					<p>One of the developers gets a fever and will be away for one dice throw of days.</p>
					<div className="ActionCard_dice" onClick={this.stopDice.bind(this)} ref={(dice) => this.dice = dice}><img src={this.state.dice} role="presentation" /></div>
					{this.state.dice !== dice ? <button className="ActionCard_button" onClick={this.okay.bind(this)}>OK!</button> : null}
				</div>
			);
		}
	}

	stopDice() {
		if (this.state.dice === dice) {
			const stateCopy = {...this.state};
			switch(this.state.result) {
				case 1:
		            stateCopy.dice = dice1;
		            this.setState(stateCopy);
		            break;
		        case 2:
		            stateCopy.dice = dice2;
		            this.setState(stateCopy);
		            break;
		        case 3:
		            stateCopy.dice = dice3;
		            this.setState(stateCopy);
		            break;
		        case 4:
		            stateCopy.dice = dice4;
		            this.setState(stateCopy);
		            break;
		        case 5:
		            stateCopy.dice = dice5;
		            this.setState(stateCopy);
		            break;
		        case 6:
		            stateCopy.dice = dice6;
		            this.setState(stateCopy);
		            break;
		        default:
		        	return false;
			}
			this.props.isSick(this.state.result);
		}
	}

	okay() {
		const stateCopy = {...this.state};
		stateCopy.rolled = true;
		this.setState(stateCopy);

		this.props.playBtn.disabled = false; // Make play button enabled again
	}
}