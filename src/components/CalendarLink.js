import React, {Component} from 'react';

export default class CalendarLink extends Component {
	render() {
		return (
			<div className="CalendarLink_container">
				<p className="CalendarLink_icon" onClick={this.props.showCalendar}>
					&#x1f4c5;
				</p>
			</div>
		);
	}
}