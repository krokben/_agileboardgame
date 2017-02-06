import React, { Component } from 'react';
import axios from 'axios';
import Header from './Header';
import CardPool from './CardPool';
import Backlog from './Backlog';
import Analysis from './Analysis';
import Development from './Development';
import Test from './Test';
import Done from './Done';
import Status from './Status';
import Footer from './Footer';

const cards = [];
const workers = [];

export default class App extends Component {
	constructor(props) {
		super(props);

		this.state = {
			cards,
            workers,
            diceScore: {
                analysis: 0,
                development: 0,
                test: 0,
                done: 0
            }
		};
	}

	componentDidMount() {
		this.fetchData();
	}

	render() {
		return (
			<div>
				<Header workers={this.state.workers} chooseWorker={this.chooseWorker.bind(this)} />
				<div className="App_board">
					<div className="App_mainBoard">
						<CardPool cards={this.state.cards} choose={this.choose.bind(this)} />
						<Backlog cards={this.state.cards} choose={this.choose.bind(this)} />
						<Analysis cards={this.state.cards} choose={this.choose.bind(this)} />
						<Development />
						<Test />
						<Done />
					</div>
					<div className="App_status">
						<Status />
					</div>
				</div>
				<Footer rollDice={this.rollDice.bind(this)} />
			</div>
		);
	}

	fetchData() {
        const that = this;
        axios.get('http://localhost/_agileboardgame/api/?/card')
            .then(function(response) {
                response.data.cards.map((item) => that.state.cards.push({
                    id: item.id,
                    index: item.index,
                    type: item.type,
                    title: item.title,
                    price: item.price,
                    analysis: item.analysis,
                    development: item.development,
                    test: item.test,
                    location: item.location
                }));
                that.setState({cards: that.state.cards});
            })
            .catch(function(error) {
                console.log(error);
            });
        axios.get('http://localhost/_agileboardgame/api/?/worker')
            .then(function(response) {
                response.data.workers.map((item) => that.state.workers.push({
                    id: item.id,
                    index: item.index,
                    type: item.type,
                    sick: item.sick
                }));
                that.setState({workers: that.state.workers});
            })
            .catch(function(error) {
                console.log(error);
            });
    }

    choose(el, evt) {
        const id = evt.target.getAttribute('data-key');
        const thisLocation = this.state.cards[id - 1].location;
        let nextLocation;
        console.log(thisLocation);
        switch(thisLocation) {
            case 'cardpool':
                nextLocation = 'backlog';
                break;
            case 'backlog':
                nextLocation = 'analysis';
                break;
            case 'analysis':
                nextLocation = 'development';
                break;
            case 'development':
                nextLocation = 'test';
                break;
            case 'test':
                nextLocation = 'done';
                break;
            default:
                console.log('done');
        }
        axios({
            method: 'put',
            url: 'http://localhost/_agileboardgame/api/?/card/' + id,
            data: {
                location: nextLocation
            }
        })
        .then(function(response) {
            console.log(response); // Doesn't work
        })
        .catch(function(error) {
            console.log(error);
        });

        // add axios here to change next card's location as well

        const stateCopy = Object.assign({}, this.state);
        stateCopy.cards[id - 1].location = nextLocation; // set this card's location to next location
        if (thisLocation === 'cardpool') {
            stateCopy.cards[id].location = thisLocation; // set next card's location to cardpool
        }
        this.setState(stateCopy);
    }

    chooseWorker(worker) {
        Array.from(worker.parentElement.children).map((child) => { // map through all siblings and untoggle class 'active'
            if (child.id !== worker.id) { // choose only siblings
                if (child.classList.contains('Workers_active')){
                    child.classList.toggle('Workers_active');
                }
            }
            return false;
        });

        worker.classList.toggle('Workers_active'); // toggle class 'active'
    }

    rollDice() {
        const result = Math.floor((Math.random() * 6) + 1);
        console.log('dice roll: ' + result);
        this.subtractScore(result);
    }

    subtractScore(score) {
        const analysisCards = this.state.cards.filter((card) => card.location === 'analysis');
        let diceScore = score;
        analysisCards.map((card) => {
            const initialPoints = card.analysis;
            const initialScore = diceScore;
            let result = card.analysis - diceScore;
            if (result <= 0) {
                diceScore = initialScore - initialPoints; // turn negative number into positive on score
                result = 0; // make card.analysis 0
                console.log('score: ' + diceScore);
            }
            const stateCopy = Object.assign({}, this.state);
            stateCopy.cards[card.id - 1].analysis = result;
            this.setState(stateCopy);
        });
    }
}
