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
			doubleCard: 'ac3',
			ac5: {id: 0}
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
					{this.state.dice !== dice ? <button className="ActionCard_button" onClick={this.props.closeActionCard}>OK!</button> : null}
				</div>
			);
		} else if (this.props.days[5].current === 'yes') { // Action card 2
			return (
				<div>
					<h2>Action card 2</h2>
					<p>The customer hires a new test manager who decides that all functionality needs to be regression tested. All stories now require double testing effort.</p>
					<button className="ActionCard_button" onClick={this.props.closeActionCard}>OK!</button>
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
						<button className="ActionCard_button" onClick={this.props.closeActionCard}>OK!</button>
					</div>
				);
			}
		} else if (this.props.days[14].current === 'yes') { // Action card 4
			return (
	 			<div>
	 				<h2>Action card 4</h2>
	 				<p>If Maintenance task 1 is not completed, the system goes down. According to the contract this means that the downtime will be subtracted from your pay for the sprint. Please subtract 200$ from the total and pull in M1 with highest priority.</p>
	 				<button className="ActionCard_button" onClick={this.props.closeActionCard}>OK!</button>
	 			</div>
		 	);
		} else if (this.props.days[17].current === 'yes') { // Action card 5
			return (
	 			<div>
	 				<h2>Action card 5</h2>
	 				<p>A critical defect! Set the defect with highest priority that has not been started yet. If the team manages to fix the defect in this sprint the customer will pay 400$. After the sprint ends the customer will not pay any extra.</p>
	 				<button className="ActionCard_button" onClick={this.props.closeActionCard}>OK!</button>
	 			</div>
		 	);
		} else if (this.props.days[23].current === 'yes') { // Action card 6
			return (
	 			<div>
	 				<h2>Action card 6</h2>
	 				<p>Action card 6 liksom.</p>
	 				<button className="ActionCard_button" onClick={this.props.closeActionCard}>OK!</button>
	 			</div>
		 	);
		} else if (this.props.days[27].current === 'yes') { // Action card 7
			return (
	 			<div>
	 				<h2>Action card 7</h2>
	 				<p>The stakeholders request a demo immediately to review the functionality. The story that has made the most progress in the sprint gets rejected due to unclear user interface. Add 2 analysis points, 4 development points and 2 testing points and pull it back into the top of the backlog with highest priority. No change in money for the US.</p>
	 				<button className="ActionCard_button" onClick={this.props.closeActionCard}>OK!</button>
	 			</div>
		 	);
		}	else if (this.props.days[15].current === 'yes') { // Action card 8
			return (
				<div>
	 				<h2>Action card 8</h2>
	 				<p>The management wants the team to work with a sprint commitment. Decide together how many stories the team can make before the sprint is over. The team gets 200$ extra if they succeed.</p>
	 				<input type="number" min="0" max="20" defaultValue="0" ref={(x) => this.ac8input = x}/>
	 				<button className="ActionCard_button" onClick={() => this.props.closeActionCard(this.ac8input.value)}>OK!</button>
	 			</div>
			);
		} else if (this.props.days[19].current === 'yes') { // Action card 9
			return (
				<div>
	 				<h2>Action card 9</h2>
	 				<p>How is the commitment going? The team can decide to work during the weekend to be done in time. However they will lose one day of the next sprint. It is up to the team to decide.</p>
	 				<button className="ActionCard_button" onClick={this.props.closeActionCard}>OK!</button>
	 			</div>
			);
		} else if (this.props.days[20].current === 'yes') { // Action card 10
			return (
				<div>
	 				<h2>Action card 10</h2>
	 				<p>Oh no! System is depending on finishing M5 at the end of this sprint. Unfortunately M5 is depending on M2, M3 and M4. Let us hope that the team has been working with them during previous sprints. If not - pull all remaining meintenance tasks into the sprint. If M5 is not finished by the end of the sprint the fine is 800$.</p>
	 				<button className="ActionCard_button" onClick={this.props.closeActionCard}>OK!</button>
	 				{this.renderCongrats()}
	 				{this.renderCongratsAc8()}
	 			</div>
			);
		} else if (this.props.days[25].current === 'yes') { // Multiple choice card 2
			return (
				<div>
	 				<h2>Multiple choice card 2</h2>
	 				<p>Blabla</p>
	 				<button className="ActionCard_button" onClick={this.props.closeActionCard}>OK!</button>
	 				{this.renderCongratsAc10()}
	 			</div>
			);
		}
	}

	closeCongrats(ac) {
		this.congrats.style.display = 'none';
		switch(ac) {
			case 'ac5':
				this.props.ac5Score();
				break;
			case 'ac8':
				this.props.ac8Score();
				break;
			case 'ac10':
				this.props.ac10Score();
				break;
			default:
				return null;
		}
	}

	renderCongrats() {
		const defect = this.props.ac5;
		if (defect !== 0 && this.props.cards[defect - 1].location === 'done') {
			return (
				<div className="ActionCard_congrats" ref={(x) => this.congrats = x}>
					Congratulations! Your team fixed the defect in time. <span>+400$</span>
					<button className="ActionCard_button" onClick={() =>this.closeCongrats('ac5')}>OK!</button>
				</div>
			);
		}
	}

	renderCongratsAc8() {
		const ac8 = this.props.ac8;
		if (ac8 === 0) {
			return (
				<div className="ActionCard_congrats" ref={(x) => this.congrats = x}>
					Congratulations! Your team fixed all the stories you decided in time. <span>+200$</span>
					<button className="ActionCard_button" onClick={() =>this.closeCongrats('ac8')}>OK!</button>
				</div>
			);
		}
	}

	renderCongratsAc10() {
		console.log(this.props.cards.filter((x) => x.title === 'm5' && x.location === 'dead'));
		if (this.props.cards.filter((x) => x.title === 'm5' && x.location === 'dead').length === 1) {
			return (
				<div className="ActionCard_congrats" ref={(x) => this.congrats = x}>
					Congratulations! Your team fixed Maintenance card 5 in time.
					<button className="ActionCard_button" onClick={this.closeCongrats.bind(this)}>OK!</button>
				</div>
			);
		} else {
			return (
				<div className="ActionCard_congrats" ref={(x) => this.congrats = x}>
					Sorry! Your team didn't fix Maintenance card 5 in time. <span>-800$</span>
					<button className="ActionCard_button" onClick={() =>this.closeCongrats('ac10')}>OK!</button>
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

	actionCard3() {
		let doubleCard = this.state.doubleCard;
		doubleCard = 'ac11';
		this.setState({doubleCard});
	}
}