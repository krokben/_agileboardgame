import React, {Component} from 'react';

export default class WorkDay extends Component {
	render() {
		return (
			<div>
				{this.props.days.filter((item) => item.current === 'yes').map((x) => <span key={x.id}>Sprint {x.sprint} {x.title}</span>)}
			</div>
		);
	}
}
