import React, {Component} from 'react';
import axios from 'axios';
import WorkDay from './WorkDay';
import Workers from './Workers';
import CalendarLink from './CalendarLink';

export default class Header extends Component {
	render() {
		return (
			<div className="Footer_container">
				<WorkDay />
				<button onClick={this.resetGameState}>Reset</button>
				<Workers workers={this.props.workers} chooseWorker={this.props.chooseWorker} />
				<CalendarLink />
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
        location.reload();
	}
}