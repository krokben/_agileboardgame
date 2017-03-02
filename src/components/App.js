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
import Retrospective from './Retrospective';
import Retrospectives from './Retrospectives';
import Admin from './Admin';

const retrospectives = [];
const days = [];
const cards = [];
const workers = [];
export default class App extends Component {
	constructor(props) {
		super(props);

		this.state = {
            admin: true,
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
            calendarActions: {
              putWorker: 0
            },
			showRetrospective: false,
			retrospectives,
			retrospectiveDiv: false,
			retrospectiveIndex: 0,
            score: 0
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
						<Status score={this.state.score} />
					</div>
				</div>
				{this.state.retrospectiveDiv ? <Retrospectives closeRetrospective={this.closeRetrospective.bind(this)} retrospectiveIndex={this.state.retrospectiveIndex} retrospectives={this.state.retrospectives} /> : null}
                {this.state.calendar ? <Calendar retrospectives={this.state.retrospectives} displayRetrospective={this.displayRetrospective.bind(this)} days={this.state.days} workers={this.state.workers} clickDay={this.clickDay.bind(this)} /> : null}
                {this.state.actionCard ? <ActionCard days={this.state.days} closeActionCard={this.closeActionCard.bind(this)} isSick={this.isSick.bind(this)} /> : null}
				{this.state.showRetrospective ? <Retrospective saveRetrospective={this.saveRetrospective.bind(this)} /> : null}
                {this.state.admin ? <Admin cards={this.state.cards} adminEdit={this.adminEdit.bind(this)} ref={(x) => this.admin = x} /> : null}
				<Footer hasRetrospective={this.hasRetrospective.bind(this)} showRetrospective={this.state.showRetrospective} actionCard={this.state.actionCard} days={this.state.days} countDays={this.countDays.bind(this)} rollDice={this.rollDice.bind(this)} changeLocations={this.changeLocations.bind(this)} ref={(footer) => this.footer = footer} />
			</div>

		);
	}

    adminEdit(id) {
        console.log(this.admin.title);
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
                    sprint: item.sprint,
                    actioncard: item.actioncard,
                    message: ''
                }));
                that.setState({days: that.state.days});
            })
            .catch(function(error) {
              console.log(error);
            });
		axios.get('http://localhost/_agileboardgame/api/?/retrospective')
        .then(function(response) {
            response.data.retrospectives.map((item) => that.state.retrospectives.push({
                id: item.id,
                text: item.text
            }));
            that.setState({retrospectives: that.state.retrospectives});
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
            if (location === 'analysis' || location === 'test') {
                const id = activeWorker.id - 1;
                const stateCopy = {...this.state};
                stateCopy.workers[id].location = location; // change location
                stateCopy.workers[id].active = false; // change to inactive
                this.setState(stateCopy);
            } else if (location === 'development' && activeWorker.type === 'developer') {
                    const id = activeWorker.id - 1;
                    const stateCopy = {...this.state};
                    stateCopy.workers[id].location = location; // change location
                    stateCopy.workers[id].active = false; // change to inactive
                    this.setState(stateCopy);
            }

            // add axios here to change location of worker (or maybe not, location doesn't have to be in the database)
        }
    }

    closeActionCard() {
        let actionCard = this.state.actionCard;
        actionCard = false;
        this.setState({actionCard});

        if (this.state.days[5].current === 'yes') { // Action card 2
            this.doubleTestTime();
        } else if (this.state.days[10].current === 'yes') { // Action card 3 & 11
            this.halfTestTime();
            this.killCardsInPlay();
        }
    }

    countDays(day){
        const stateCopy = {...this.state};
				stateCopy.days[day - 1].current = 'no';
				stateCopy.days[day].current = 'yes';
				this.setState(stateCopy);

        axios({
            method: 'put',
            url: 'http://localhost/_agileboardgame/api/?/day/' + (Number(day) + 1),
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

        this.hasActionCard(day); // Check for action card
        this.returnSickWorker(); // Check if sick worker should return today
        this.returnWorkers();
    }

    changeLocations() {
        this.state.cards.filter((card) => card.analysis === 0).map((x) => {
            const cards = this.state.cards;
            cards[x.id - 1].location = 'development';
            this.setState({cards});
            return false;
        });
        this.state.cards.filter((card) => card.development === 0).map((x) => {
            const cards = this.state.cards;
            cards[x.id - 1].location = 'test';
            this.setState({cards});
            return false;
        });
        this.state.cards.filter((card) => card.test === 0).map((x) => {
            const cards = this.state.cards;
            cards[x.id - 1].location = 'done';
            this.setState({cards});
            return false;
        });
        this.countScore();
    }

		closeRetrospective() {
			let retrospectiveDiv = this.state.retrospectiveDiv;
			retrospectiveDiv = !retrospectiveDiv;
			this.setState({retrospectiveDiv});
		}

    countScore() {
        let score = this.state.score;
        this.state.cards.filter((card) => card.location === 'done').forEach((x) => {
            score += Number(x.price);
            this.setState({score});
        });
    }

		displayRetrospective(idx) {
			let retrospectiveDiv = this.state.retrospectiveDiv;
			retrospectiveDiv = !retrospectiveDiv;
			this.setState({retrospectiveDiv});
			let retrospectiveIndex = this.state.retrospectiveIndex;
			retrospectiveIndex = idx;
			this.setState({retrospectiveIndex});
		}

    doubleTestTime() {
        const cards = this.state.cards;
        cards.map((x) => x.test *= 2);
        this.setState({cards});
    }

    halfTestTime() {
        const cards = this.state.cards;
        cards.map((x) => x.test /= 2);
        this.setState({cards});
    }

    killCardsInPlay() {
        const cards = this.state.cards;
        cards.filter((x) => x.location === 'analysis' || x.location === 'development' || x.location === 'test')
            .map((x) => x.location = 'dead');
        this.setState({cards});

        // add axios here to move cards' locations to 'dead'
    }

    returnWorkers() {
        const workers = this.state.workers;
        workers.forEach((x) => x.location = 'header');
        this.setState({workers});
    }

    returnSickWorker() {
        const sickWorkers = this.state.workers.filter((x) => Number(x.sick) !== 0);
        const today = Number(this.state.days.filter((x) => x.current === 'yes')[0].id);
        if (sickWorkers.length > 0 && sickWorkers[0].sick === today) {
            const stateCopy = {...this.state};
            stateCopy.workers[sickWorkers[0].id - 1].sick = 0;
            this.setState(stateCopy);
        }
    }

    clickDay(day) {
        if (this.state.days[day -1].message === '') {
            if (this.state.workers.filter((x) => x.sick !== '0')[0].sick === Number(day)) { // Sick worker
                const stateCopy = {...this.state};
                stateCopy.days[day - 1].message = <span>sick dev returns</span>;
                this.setState(stateCopy);
            }
        } else {
            const stateCopy = {...this.state};
            stateCopy.days[day - 1].message = '';
            this.setState(stateCopy);
        }
    }

    hasActionCard(day) {
        if (this.state.days[day].current === 'yes' && this.state.days[day].actioncard === 'yes') {
            let actionCard = this.state.actionCard;
            actionCard = true;
            this.setState({actionCard});
        } else {
            if (this.state.actionCard) {
                let actionCard = this.state.actionCard;
                actionCard = false;
                this.setState({actionCard});
            }
        }
    }

		hasRetrospective() {
			let showRetrospective = this.state.showRetrospective;
			if (this.state.days.filter((day) => day.current === 'yes' && day.title === '1' && day.sprint !== '1').length !== 0) {
				showRetrospective = !showRetrospective;
				this.setState({showRetrospective});
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


		saveRetrospective(val) {
			const sprint = this.state.days.filter((x) => x.current === 'yes')[0].sprint
			const stateCopy = {...this.state};
			stateCopy.retrospectives.push({id:sprint, text: val});
			this.setState(stateCopy);
			console.log(val);
			axios({
					method: 'post',
					url: 'http://localhost/_agileboardgame/api/?/retrospective',
					data: {
							text: val
					},
					headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
			})
			.then(function(response) {
					console.log(response);
			})
			.catch(function(error) {
					console.log(error);
			});
			// Close window
			let showRetrospective = this.state.showRetrospective;
			showRetrospective = !showRetrospective;
			this.setState({showRetrospective});
		}

    subtractScore(score, loc) {
        const cards = this.state.cards.filter((card) => card.location === loc);
				var diceScore = score;
        cards.map((card) => {
            const initialPoints = card[loc];
            const initialScore = diceScore;
            let result = card[loc] - diceScore;
            if (result <= 0) {
                diceScore = initialScore - initialPoints; // turn negative number into positive on score
								result = 0; // make card.analysis 0
                console.log('score: ' + diceScore);
            }
						else if (result > 0) {
								diceScore = 0;
						}

						console.log(card);
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

    isSick(days) {
        const returnDate = Number(this.state.days.filter((day) => day.current === 'yes')[0].id) + days;
        const stateCopy = {...this.state};
        stateCopy.workers[2].sick = returnDate; // First developer worker
        this.setState(stateCopy);
        // insert axios here
    }
}
