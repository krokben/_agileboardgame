import React, {Component} from 'react';

export default class WorkDay extends Component {
	render() {
		return (
			<div className="WorkDay">
				{

					this.props.days.filter((item) => item.current === 'yes').map((x) => {
						let weekday;
						switch(x.title) {
							case '1':
								weekday = 'Monday';
								break;
							case '2':
								weekday = 'Tuesday';
								break;
							case '3':
								weekday = 'Wednesday';
								break;
							case '4':
								weekday = 'Thursday';
								break;
							case '5':
								weekday = 'Friday';
								break;
							case '6':
								weekday = 'Saturday';
								break;
							case '7':
								weekday = 'Sunday';
								break;
							default:
								weekday = '';
						}
						return <span key={x.id}>Sprint <span className="WorkDay_sprint">{x.sprint}</span> {weekday}</span>
					})
				}
			</div>
		);
	}
}
