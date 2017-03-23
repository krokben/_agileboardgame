import React, {Component} from 'react';
import axios from 'axios';
import WorkDay from './WorkDay';
import Workers from './Workers';
import CalendarLink from './CalendarLink';

export default class Header extends Component {
	render() {
		return (
			<div className="Header">
				<WorkDay days={this.props.days} />
        <div className="Header_buttons">
				  <button className="Header_reset" onClick={this.resetGameState.bind(this)}>Reset</button>
          <button className="Header_logout" onClick={this.props.logout}>Logout</button>
          {this.props.game === '1' ? <button className="Header_admin" onClick={this.props.showAdmin}>Admin</button> : null}
          <button className="Header_rules" onClick={this.props.showRules}>Rules</button>
          <button className="Header_rules" onClick={this.props.showHighScore}>High Score</button>
				</div>
        <Workers className="Workers_workers" location="header" workers={this.props.workers} chooseWorker={this.props.chooseWorker} />
				<CalendarLink showCalendar={this.props.showCalendar} />
			</div>
		);
	}

	resetGameState() {
    const that = this;
    axios({
        method: 'RESETGAME',
        url: 'http://localhost/_agileboardgame/api/?/gamestate/' + that.props.game
    });
    location.reload();
	}
}
