import React, {Component} from 'react';

export default class WorkDay extends Component {
	render() {
		return (
			<div>
				{

					this.props.days.filter((item) => item.current === 'yes').map((x) => {
						let weekday;
						switch(x.title) {
							case '1':
								weekday = 'monday';
								break;
							case '2':
								weekday = 'tuesday';
								break;
							case '3':
								weekday = 'wednesday';
								break;
							case '4':
								weekday = 'thursday';
								break;
							case '5':
								weekday = 'friday';
								break;
							default:
								weekday = '';
						}
						return <span key={x.id}>Sprint {x.sprint} {weekday}</span>
					})
				}
			</div>
		);
	}
}
