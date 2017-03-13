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
			dice: dice,
			result: Math.floor((Math.random() * 6) + 1),
			doubleCard: 'ac3'
		}
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
					<div className="ActionCard_dice" onClick={this.stopDice.bind(this)} ref={(dice) => this.dice = dice}><img src={this.state.dice} role="presentation" /></div>
					{this.state.dice !== dice ? <p>Your developer is sick for {this.state.result} days.</p> : null}
					{this.state.dice !== dice ? <button className="ActionCard_button" onClick={this.okay.bind(this)}>OK!</button> : null}
				</div>
			);
		} else if (this.props.days[5].current === 'yes') { // Action card 2
			return (
				<div>
					<h2>Action card 2</h2>
					<p>The customer hires a new test manager who decides that all functionality needs to be regression tested. All stories now require double testing effort.</p>
					<button className="ActionCard_button" onClick={this.okay.bind(this)}>OK!</button>
				</div>
			);
		} else if (this.props.days[10].current === 'yes') { // Action card 3
			if (this.state.doubleCard === 'ac3') {
				return (
					<div>
						<h2>Action card 3</h2>
						<p>The customer fires the new test manager. Testing effort is back to normal.</p>
						<button className="ActionCard_button" onClick={this.actionCard3.bind(this)}>OK!</button>
					</div>
				);
			} else {
				return (
					<div>
						<h2>Action card 11</h2>
						<p>Oh no! The competition went public with the same thing we are developing, so business decided to pull the plug on all current development and start fresh with something new. Remove all user stories in test, development and analysis.</p>
						<button className="ActionCard_button" onClick={this.okay.bind(this)}>OK!</button>
					</div>
				);
			}
		} else if (this.props.days[14].current === 'yes') { // Action card 4
			return (
	 			<div>
	 				<h2>Action card 4</h2>
	 				<p>If Maintenance task 1 is not completed, the system goes down. According to the contract this means that the downtime will be subtracted from your pay for the sprint. Please subtract 200$ from the total and pull in M1 with highest priority.</p>
	 				<button className="ActionCard_button" onClick={this.okay.bind(this)}>OK!</button>
	 			</div>
		 	);
		} else if (this.props.days[17].current === 'yes') { // Action card 5
			return (
	 			<div>
	 				<h2>Action card 5</h2>
	 				<p>A critical defect! Set the defect with highest priority that has not been started yet. If the team manages to fix the defect in this sprint the customer will pay 400$. After the sprint ends the customer will not pay any extra.</p>
	 				<button className="ActionCard_button" onClick={this.okay.bind(this)}>OK!</button>
	 			</div>
		 	);
		} else if (this.props.days[15].current === 'yes') { // Action card 8
			return (
				<div>
	 				<h2>Action card 8</h2>
	 				<p>Action card 8 och den.</p>
	 				<button className="ActionCard_button" onClick={this.okay.bind(this)}>OK!</button>
	 			</div>
			);
		} else if (this.props.days[21].current === 'yes') { // Action card 10
			return (
				<div>
	 				<h2>Action card 10</h2>
	 				<p>Action card 10 och den.</p>
	 				<button className="ActionCard_button" onClick={this.okay.bind(this)}>OK!</button>
	 				{this.props.cards.find((x) => x.type === 'defect').location === 'done' ? <div className="ActionCard_congrats">Congratulations! Your team fixed the defect in time. <span>+400$</span></div> : null}
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
		// const stateCopy = {...this.state};
		// stateCopy.rolled = true;
		// this.setState(stateCopy);

		this.props.closeActionCard();
	}

	actionCard3() {
		let doubleCard = this.state.doubleCard;
		doubleCard = 'ac11';
		this.setState({doubleCard});
	}
}