import React, { Component } from 'react';
import Header from './Header';
import CardPool from './CardPool';
import Backlog from './Backlog';
import Analysis from './Analysis';
import Development from './Development';
import Test from './Test';
import Done from './Done';
import Status from './Status';
import Footer from './Footer';

export default class App extends Component {
	render() {
		return (
			<div>
				<Header />
				<div style={{display: 'flex', justifyContent: 'space-between'}}>
					<CardPool />
					<Backlog />
					<Analysis />
					<Development />
					<Test />
					<Done />
					<Status />
				</div>
				<Footer />
			</div>
		);
	}
}
