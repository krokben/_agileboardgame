import React, {Component} from 'react';

export default class CalendarLink extends Component {
	render() {
		return (
			<div style={{
				background: '#48CFAD',
				height: '400px',
				width: '200px',
				transform: 'rotate(-30deg)',
				position: 'fixed',
				right: '-130'
			}}>
				<p style={{
					marginTop: '0',
					marginLeft: '5px',
					fontSize: '100px'
				}}>
					&#x1f4c5;
				</p>
			</div>
		);
	}
}