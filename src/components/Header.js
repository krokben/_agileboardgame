import React, {Component} from 'react';
import WorkDay from './WorkDay';
import Workers from './Workers';
import CalendarLink from './CalendarLink';

export default class Header extends Component {
	render() {
		return (
			<div className="Footer_container">
				<WorkDay />
				<Workers />
				<CalendarLink />
			</div>
		);
	}
}