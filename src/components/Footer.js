import React, { Component } from 'react';
import Actions from './actions';
import PlayButton from './PlayButton';

export default class Footer extends Component {
	render() {
		return (
			<div className="Footer_container">
				<Actions />
				<div>Logo</div>
				<PlayButton />
			</div>
		);
	}
}
