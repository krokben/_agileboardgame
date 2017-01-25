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
				<div className="App_board">
					<div className="App_mainBoard">
						<CardPool />
						<Backlog />
						<Analysis />
						<Development />
						<Test />
						<Done />
					</div>
					<div className="App_status">
						<Status />
					</div>
				</div>
				<Footer />
			</div>
		);
	}
}
