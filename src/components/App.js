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
					<div style={{display: 'flex', flex: '6', justifyContent: 'space-between', width: '80vw', height: '85vh'}}>
						<CardPool />
						<Backlog />
						<Analysis />
						<Development />
						<Test />
						<Done />
					</div>
					<div style={{flex: '1'}}>
						<Status />
					</div>
				</div>
				<Footer />
			</div>
		);
	}
}
