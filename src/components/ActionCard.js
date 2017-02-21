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
			stopped: true,
			dice: dice
		}
	}

	// componentDidMount() {
	// 	this.stopStart();
	// }

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
					<div className="ActionCard_dice" onClick={this.stopDice.bind(this)} ref={(dice) => this.dice = dice}><img src={this.state.dice} role="presentation" /></div>
					{this.state.dice !== dice ? <button className="ActionCard_button">OK!</button> : null}
				</div>
			);
		}
	}

	stopDice() {
		if (this.state.dice === dice) {
			const random = Math.floor((Math.random() * 6) + 1);
			const stateCopy = {...this.state};
			switch(random) {
				case 1:
		            stateCopy.dice = dice1;
		            this.setState(stateCopy);
		        	this.props.isSick(1);
		            break;
		        case 2:
		            stateCopy.dice = dice2;
		            this.setState(stateCopy);
		            this.props.isSick(2);
		            break;
		        case 3:
		            stateCopy.dice = dice3;
		            this.setState(stateCopy);
		            this.props.isSick(3);
		            break;
		        case 4:
		            stateCopy.dice = dice4;
		            this.setState(stateCopy);
		            this.props.isSick(4);
		            break;
		        case 5:
		            stateCopy.dice = dice5;
		            this.setState(stateCopy);
		            this.props.isSick(5);
		            break;
		        case 6:
		            stateCopy.dice = dice6;
		            this.setState(stateCopy);
		            this.props.isSick(6);
		            break;
		        default:
		        	return false;
			}
		}
	}

	// stopStart() {
	// 	const that = this;
	// 	let t;

	// 	if (that.state.stopped) {
	// 		const dices = ['⚀','⚁','⚂','⚃','⚄','⚅'];
	// 		const stateCopy = {...that.state};
 //            stateCopy.stopped = false;
 //            that.setState(stateCopy);
 //            function randomDice() {
 //            	const random = Math.floor(Math.random() * 6);
	// 			const stateCopy = {...that.state};
	// 			stateCopy.dice = dices[random];
	// 			that.setState(stateCopy);
 //            }
 //            t = setInterval(randomDice, 100);
	// 	} else {
	// 		clearInterval(t);
	// 		const stateCopy = {...that.state};
 //            stateCopy.stopped = true;
 //            that.setState(stateCopy);
	// 	}
	// }
}