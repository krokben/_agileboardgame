import React, { Component } from 'react';
import axios from 'axios';

const gamename = [];
const highscorelist = [];
export default class HighScore extends Component {
	constructor() {
		super();

		this.state = {
        highscorelist,
				gamename
		};
	}

componentDidMount() {
	this.getName();
	this.getHighScore()
}

	render() {
		return (
			<div className="HighScore">
				<h1>High Score</h1>
				<button onClick={this.props.closeHighScore}>Close</button>
				<table className="HighScore_table">
					<tbody>
					{this.state.highscorelist.filter((x) => x.prop === 'final')
						.map((x) => <tr key={`highscore-${x.id}`}><td>{this.state.gamename.find((y) => y.id === x.game_id).name}</td><td>{x.val}</td></tr>)}
					</tbody>
				</table>
			</div>
		);
	}


	getHighScore() {
		const that = this;

			axios.get('http://localhost/_agileboardgame/api/?/gamestate')
					.then(function(response) {
						console.log(response);
						let highscorelist = that.state.highscorelist;
						highscorelist = [];
						response.data.gamestate.forEach((item) => highscorelist.push({
								id: item.id,
								game_id: item.game_id,
								type: item.type,
								type_id: item.type_id,
								prop: item.prop,
								val: item.val,
								name: ""
							}));
							that.setState({highscorelist});
					})
					.catch(function(error) {
							console.log(error);
			});
	}

	getName() {
		const that = this;
		console.log("hej");
		setTimeout(() => {
			axios.get('http://localhost/_agileboardgame/api/?/game')
					.then(function(response) {
						let gamename = that.state.gamename;
						gamename = [];
						response.data.games.forEach((item) => gamename.push({
								id: item.id,
								name: item.name
							}));
							that.setState({gamename});
					 })
					.catch(function(error) {
							console.log(error);
			});
		}, 200);


	}
}
