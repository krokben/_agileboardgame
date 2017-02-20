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
import Calendar from './Calendar';
import ActionCard from './ActionCard';

const days = [];
const cards = [];
const workers = [];
export default class App extends Component {
	constructor(props) {
		super(props);

		this.state = {
			cards,
            workers,
            calendar: false,
            actionCard: false,
            diceScore: {
                analysis: 0,
                development: 0,
                test: 0,
                done: 0
            },
			days,
		};
	}

	componentDidMount() {
		this.fetchData();
	}

	render() {
		return (
			<div>
				<Header days={this.state.days} workers={this.state.workers} chooseWorker={this.chooseWorker.bind(this)} showCalendar={this.showCalendar.bind(this)}/>
				<div className="App_board">
					<div className="App_mainBoard">
						<CardPool cards={this.state.cards} choose={this.choose.bind(this)} workers={this.state.workers} chooseWorker={this.chooseWorker.bind(this)} />
						<Backlog cards={this.state.cards} choose={this.choose.bind(this)} workers={this.state.workers} chooseWorker={this.chooseWorker.bind(this)} />
						<Analysis cards={this.state.cards} choose={this.choose.bind(this)} placeWorker={this.placeWorker.bind(this)} workers={this.state.workers} chooseWorker={this.chooseWorker.bind(this)} />
						<Development cards={this.state.cards} placeWorker={this.placeWorker.bind(this)} workers={this.state.workers} chooseWorker={this.chooseWorker.bind(this)} />
						<Test cards={this.state.cards} placeWorker={this.placeWorker.bind(this)} workers={this.state.workers} chooseWorker={this.chooseWorker.bind(this)} />
						<Done cards={this.state.cards} placeWorker={this.placeWorker.bind(this)} workers={this.state.workers} chooseWorker={this.chooseWorker.bind(this)} />
					</div>
					<div className="App_status">
						<Status />
					</div>
				</div>
                {this.state.calendar ? <Calendar /> : null}
                {this.state.actionCard ? <ActionCard days={this.state.days} /> : null}
				<Footer days={this.state.days} countDays={this.countDays.bind(this)} rollDice={this.rollDice.bind(this)} />
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
                    location: item.location,
                    sick: item.sick
                }));
                that.setState({workers: that.state.workers});
            })
            .catch(function(error) {
                console.log(error);
            });
		axios.get('http://localhost/_agileboardgame/api/?/day')
            .then(function(response) {
                response.data.days.map((item) => that.state.days.push({
                    id: item.id,
                    title: item.title,
                    current: item.current,
                    sprint: item.sprint
                }));
                that.setState({days: that.state.days});
            })
            .catch(function(error) {
              console.log(error);
            });
    }

    choose(card) {
        const id = card.getAttribute('data-key');
        const thisLocation = this.state.cards[id - 1].location;
        let nextLocation;
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
            },
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
        })
        .then(function(response) {
            console.log(response);
        })
        .catch(function(error) {
            console.log(error);
        });

        // add axios here to change next card's location as well

        const stateCopy = {...this.state};
        stateCopy.cards[id - 1].location = nextLocation; // set this card's location to next location
        if (thisLocation === 'cardpool') {
            stateCopy.cards[id].location = thisLocation; // set next card's location to cardpool
        }
        this.setState(stateCopy);
    }

    chooseWorker(worker) {
        let workerState = this.state.workers[worker.id - 1];
        if (workerState.location === 'header') {
            if (worker.classList.contains('Workers_active')) {
                worker.classList.toggle('Workers_active'); // toggle class 'active'
                const stateCopy = {...this.state};
                stateCopy.workers[worker.id - 1].active = false;
                this.setState(stateCopy);
            } else {
                Array.from(worker.parentElement.children).map((child) => { // map through all siblings and untoggle class 'active'
                if (child.id !== worker.id) { // choose only siblings
                    if (child.classList.contains('Workers_active')){
                        child.classList.toggle('Workers_active');
                        const stateCopy = {...this.state};
                        stateCopy.workers[child.id - 1].active = false;
                        this.setState(stateCopy);
                    }
                }
                return false;
                });

                worker.classList.toggle('Workers_active'); // toggle class 'active'
                const stateCopy = {...this.state};
                stateCopy.workers[worker.id - 1].active = true;
                this.setState(stateCopy);
            }
        } else {
            workerState.location = 'header';
            const stateCopy = {...this.state};
            stateCopy.workers[worker.id - 1].location = 'header'; // change location
            this.setState(stateCopy);
        }
    }

    placeWorker(location) {
        const activeWorker = this.state.workers.filter((worker) => worker.active)[0]
        if (activeWorker !== undefined) {
            const id = activeWorker.id - 1;
            const stateCopy = {...this.state};
            stateCopy.workers[id].location = location; // change location
            stateCopy.workers[id].active = false; // change to inactive
            this.setState(stateCopy);

            // add axios here to change location of worker (or maybe not, location doesn't have to be in the database)
        }
    }

    countDays(day){
        const stateCopy = {...this.state};
		stateCopy.days[day - 1].current = 'no';
		stateCopy.days[day].current = 'yes';
		this.setState(stateCopy);
        
        axios({
            method: 'put',
            url: 'http://localhost/_agileboardgame/api/?/day/' + day,
            data: {
                current: 'yes'
            },
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
        })
        .then(function(response) {
            // console.log(response);
        })
        .catch(function(error) {
            console.log(error);
        });

        this.hasActionCard(); // Check for action card
    }

    hasActionCard() {
        if (this.state.days[2].current === 'yes') {
            const stateCopy = {...this.state};
            stateCopy.actionCard = true;
            this.setState(stateCopy);
        } else {
            if (this.state.actionCard) {
                const stateCopy = {...this.state};
                stateCopy.actionCard = false;
                this.setState(stateCopy);
            }
        }
    }

    rollDice() {
        let analysis = 0;
        let development = 0;
        let test = 0;
        this.state.workers.filter((worker) => worker.location === 'analysis').forEach((x) => {
            analysis += Math.floor((Math.random() * 6) + 1);
        });
        this.state.workers.filter((worker) => worker.location === 'development').forEach((x) => {
            development += Math.floor((Math.random() * 6) + 1);
        });
        this.state.workers.filter((worker) => worker.location === 'test').forEach((x) => {
            test += Math.floor((Math.random() * 6) + 1);
        });
        console.log('analysis result: ' + analysis);
        console.log('development result: ' + development);
        console.log('test result: ' + test);
        this.subtractScore(analysis, 'analysis');
        this.subtractScore(development, 'development');
        this.subtractScore(test, 'test');
        // this.subtractScore(result);
    }

    subtractScore(score, loc) {
        const cards = this.state.cards.filter((card) => card.location === loc);
        let diceScore = score;
        cards.map((card) => {
            const initialPoints = card[loc];
            const initialScore = diceScore;
            let result = card[loc] - diceScore;
            if (result <= 0) {
                diceScore = initialScore - initialPoints; // turn negative number into positive on score
                result = 0; // make card.analysis 0
                console.log('score: ' + diceScore);
            }
            const stateCopy = {...this.state};
            stateCopy.cards[card.id - 1][loc] = result;
            this.setState(stateCopy);

            return false;
            // add axios here to change score
        });
    }
    showCalendar() {
        this.setState({calendar: !this.state.calendar});
    }
}
