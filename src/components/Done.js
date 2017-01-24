import React, { Component } from 'react';

export default class Done extends Component {
	render() {
		return (
			<div style={{
				flex: '1',
				padding: '5px'
			}}>
				<div style={{background: '#4FC1E9', height: '100%'}}>
					<div style={{background: '#fff', height: '100px'}}>
						<div className='reddish'>Dices</div>
					</div>
					Done
				</div>
			</div>
		);
	}
}
