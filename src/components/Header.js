import React, {Component} from 'react';
import axios from 'axios';
import WorkDay from './WorkDay';
import Workers from './Workers';
import CalendarLink from './CalendarLink';

export default class Header extends Component {
	render() {
		return (
			<div className="Footer_container">
				<WorkDay days={this.props.days} />
				<button onClick={this.resetGameState}>Reset</button>
				<Workers location="header" workers={this.props.workers} chooseWorker={this.props.chooseWorker} />
				<CalendarLink showCalendar={this.props.showCalendar} />
			</div>
		);
	}

	resetGameState() {
		axios({
            method: 'RESETGAME',
            url: 'http://localhost/_agileboardgame/api/?/card'
        });
        axios({
            method: 'RESETGAME',
            url: 'http://localhost/_agileboardgame/api/?/worker'
        });
        axios({
            method: 'RESETGAME',
            url: 'http://localhost/_agileboardgame/api/?/day'
        });
        axios({
            method: 'RESETGAME',
            url: 'http://localhost/_agileboardgame/api/?/retrospective'
        });
        location.reload();
	}
}
