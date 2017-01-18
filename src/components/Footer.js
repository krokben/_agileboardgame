import React, { Component } from 'react';
import Actions from './actions';
import PlayButton from './PlayButton';

export default class Footer extends Component {
	render() {
		return (
			<div style={{display: 'flex', justifyContent: 'space-between'}}>
				<Actions />
				<div>Logo</div>
				<PlayButton />
			</div>
		);
	}
}
