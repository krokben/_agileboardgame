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
import Login from './Login';
import Rules from './Rules';
import HighScore from './HighScore';

const gamestate = [];
const retrospectives = [];
const days = [];
const cards = [];
const workers = [];
export default class App extends Component {
	constructor(props) {
		super(props);

		this.state = {
            login: true,
            game: '0',
            gamestate,
            admin: false,
			cards,
            workers,
            calendar: false,
            actionCard: false,
            ac5: 0,
            ac8: 0,
            diceScore: {
              analysis: 0,
              development: 0,
              test: 0,
              done: 0
            },
						days,
						highscore: false,
            calendarActions: {
              putWorker: 0
            },
			showRetrospective: false,
			retrospectives,
			retrospectiveDiv: false,
			retrospectiveIndex: 0,
            rules: false,
            score: 0,
            analysis: {score: 0},
            development: {score: 0},
            test: {score: 0},
		};
	}

	componentDidMount() {
        if (localStorage.getItem('user') !== null) {
            let game = this.state.game;
            game = localStorage.getItem('user');
            this.setState({game});
            let login = this.state.login;
            login = false;
            this.setState({login});
        }
        setTimeout(() => {
            if (this.state.game !== '0') { // only runs when there is localstorage with value other than '0'
            this.fetchData(); // this also runs this.checkGameStatus()
            }
        }, 100);
	}

	render() {
		return (
			<div>
                {this.state.login ? <Login login={this.login.bind(this)} ref={(loginPage) => this.loginPage = loginPage} /> : null}
				<Header logout={this.logout.bind(this)} game={this.state.game} days={this.state.days} workers={this.state.workers} chooseWorker={this.chooseWorker.bind(this)} showCalendar={this.showCalendar.bind(this)} showAdmin={this.showAdmin.bind(this)} showRules={this.showRules.bind(this)}/>
				<div className="App_board">
					<div className="App_mainBoard">
						<CardPool cards={this.state.cards} choose={this.choose.bind(this)} workers={this.state.workers} chooseWorker={this.chooseWorker.bind(this)} />
						<Backlog cards={this.state.cards} choose={this.choose.bind(this)} workers={this.state.workers} chooseWorker={this.chooseWorker.bind(this)} />
						<Analysis analysis={this.state.analysis} cards={this.state.cards} choose={this.choose.bind(this)} placeWorker={this.placeWorker.bind(this)} workers={this.state.workers} chooseWorker={this.chooseWorker.bind(this)} ref={(analysis) => this.analysis = analysis} />
						<Development development={this.state.development} cards={this.state.cards} placeWorker={this.placeWorker.bind(this)} workers={this.state.workers} chooseWorker={this.chooseWorker.bind(this)} ref={(development) => this.development = development} />
						<Test test={this.state.test} cards={this.state.cards} placeWorker={this.placeWorker.bind(this)} workers={this.state.workers} chooseWorker={this.chooseWorker.bind(this)} ref={(test) => this.test = test} />
						<Done cards={this.state.cards} placeWorker={this.placeWorker.bind(this)} workers={this.state.workers} chooseWorker={this.chooseWorker.bind(this)} />
					</div>
					<div className="App_status">
						<Status score={this.state.score} />
					</div>
				</div>
							{this.state.highscore ? <HighScore highScore={this.state.highscore} /> : null}
                {this.state.rules ? <Rules closeRules={this.closeRules.bind(this)} /> : null}
				{this.state.retrospectiveDiv ? <Retrospectives closeRetrospective={this.closeRetrospective.bind(this)} retrospectiveIndex={this.state.retrospectiveIndex} retrospectives={this.state.retrospectives} /> : null}
                {this.state.calendar ? <Calendar retrospectives={this.state.retrospectives} displayRetrospective={this.displayRetrospective.bind(this)} days={this.state.days} workers={this.state.workers} clickDay={this.clickDay.bind(this)} ref={(calendar) => this.calendar = calendar} /> : null}
                {this.state.actionCard ? <ActionCard days={this.state.days} cards={this.state.cards} closeActionCard={this.closeActionCard.bind(this)} isSick={this.isSick.bind(this)} ac5={this.state.ac5} ac5Score={this.ac5Score.bind(this)} ac8={this.state.ac8} ac8Score={this.ac8Score.bind(this)} ac10Score={this.ac10Score.bind(this)} /> : null}
				{this.state.showRetrospective ? <Retrospective saveRetrospective={this.saveRetrospective.bind(this)} /> : null}
                {this.state.admin && this.state.game === '1' ? <Admin cards={this.state.cards} fetchCards={this.fetchCards.bind(this)} adminDelete={this.adminDelete.bind(this)} adminEdit={this.adminEdit.bind(this)} ref={(x) => this.admin = x} showAdmin={this.showAdmin.bind(this)} /> : null}
				<Footer hasRetrospective={this.hasRetrospective.bind(this)} showRetrospective={this.state.showRetrospective} actionCard={this.state.actionCard} days={this.state.days} countDays={this.countDays.bind(this)} rollDice={this.rollDice.bind(this)} changeLocations={this.changeLocations.bind(this)} ref={(footer) => this.footer = footer} />
			</div>

		);
	}
    closeRules() {
        let rules = this.state.rules;
        rules = false;
        this.setState({rules});
    }
    adminDelete(id) {
        const that = this;
        axios({
            method: 'delete',
            url: 'http://localhost/_agileboardgame/api/?/card/' + id,
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
        })
        .then(function(response) {
            axios.get('http://localhost/_agileboardgame/api/?/card')
            .then(function(response) {
                let cards = that.state.cards;
                cards = [];
                response.data.cards.map((item) => cards.push({
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
                that.setState({cards});
            })
            .catch(function(error) {
                console.log(error);
            });
            that.setState({cards});
        })
        .catch(function(error) {
            console.log(error);
        });
    }

    adminEdit(id) {
        const that = this;
        axios({
            method: 'put',
            url: 'http://localhost/_agileboardgame/api/?/card/' + id,
            data: {
                title: that.admin.title.innerHTML,
                price: that.admin.price.value,
                analysis: that.admin.analysis.value,
                development: that.admin.development.value,
                test: that.admin.test.value,
                type: 'userstory',
                location: 'cardpool'
            },
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
        })
        .then(function(response) {
            axios.get('http://localhost/_agileboardgame/api/?/card')
            .then(function(response) {
                let cards = that.state.cards;
                cards = [];
                response.data.cards.map((item) => cards.push({
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
                that.setState({cards});
            })
            .catch(function(error) {
                console.log(error);
            });
            that.setState({cards});
        })
        .catch(function(error) {
            console.log(error);
        });
    }

    fetchCards() {
        // admin function
        const that = this;
        const cards = this.state.cards;

        axios.get('http://localhost/_agileboardgame/api/?/card')
            .then(function(response) {
                response.data.cards.forEach((item) => {
                    if (cards[item.id - 1] !== undefined) {
                        cards[item.id - 1].id = item.id;
                        cards[item.id - 1].index = item.index;
                        cards[item.id - 1].type = item.type;
                        cards[item.id - 1].title = item.title;
                        cards[item.id - 1].price = item.price;
                        cards[item.id - 1].analysis = item.analysis;
                        cards[item.id - 1].development = item.development;
                        cards[item.id - 1].test = item.test;
                        cards[item.id - 1].location = item.location;
                    } else {
                        cards.push({
                            id: item.id,
                            index: item.index,
                            type: item.type,
                            title: item.title,
                            price: item.price,
                            analysis: item.analysis,
                            development: item.development,
                            test: item.test,
                            location: item.location
                        });
                    }
                });
                that.setState({cards});
            })
            .catch(function(error) {
                console.log(error);
            });
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
                    location: item.location,
                    prio: false
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
                    sick: Number(item.sick)
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
        axios.get('http://localhost/_agileboardgame/api/?/gamestate')
            .then(function(response) {
                response.data.gamestate.map((item) => that.state.gamestate.push({
                    id: item.id,
                    game_id: item.game_id,
                    type: item.type,
                    type_id: item.type_id,
                    prop: item.prop,
                    val: item.val
                }));
                that.setState({gamestate: that.state.gamestate});
                setTimeout(() => {
                    that.checkGameStatus();
                }, 100); // check gamestate for changes to state
            })
            .catch(function(error) {
                console.log(error);
        });
    }

    ac5Score() {
        const that = this;
        let score = this.state.score;
        score = Number(score) + 400;
        this.setState({score});

        setTimeout(() => {
            axios({
            method: 'post',
            url: 'http://localhost/_agileboardgame/api/?/gamestate',
            data: {
                game_id: that.state.game,
                type: 'score',
                type_id: 0,
                prop: 'score',
                val: that.state.score
            },
                headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
            })
            .then(function(response) {
                // console.log(response);
            })
            .catch(function(error) {
                console.log(error);
            });
        }, 100);
    }

    ac8Score() {
        const that = this;
        let score = this.state.score;
        score = Number(score) + 200;
        this.setState({score});

        setTimeout(() => {
            axios({
            method: 'post',
            url: 'http://localhost/_agileboardgame/api/?/gamestate',
            data: {
                game_id: that.state.game,
                type: 'score',
                type_id: 0,
                prop: 'score',
                val: that.state.score
            },
                headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
            })
            .then(function(response) {
                // console.log(response);
            })
            .catch(function(error) {
                console.log(error);
            });
        }, 100);
    }

    ac10Score() {
        const that = this;
        let score = this.state.score;
        score = Number(score) - 800;
        this.setState({score});

        setTimeout(() => {
            axios({
            method: 'post',
            url: 'http://localhost/_agileboardgame/api/?/gamestate',
            data: {
                game_id: that.state.game,
                type: 'score',
                type_id: 0,
                prop: 'score',
                val: that.state.score
            },
                headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
            })
            .then(function(response) {
                // console.log(response);
            })
            .catch(function(error) {
                console.log(error);
            });
        }, 100);
    }

    actionCard4() {
        const that = this;
        const m1 = this.state.cards.find((x) => x.title === 'm1');
        if (m1.location === 'done' || m1.location === 'dead') {
            return null;
        } else {
            let score = this.state.score;
            score = Number(score) - 200;
            this.setState({score});
            const cards = this.state.cards;
            cards[m1.id - 1].location = 'backlog';
            cards[m1.id].location = 'cardpool';
            cards[m1.id - 1].prio = true;
            this.setState({cards});

            axios({
            method: 'post',
            url: 'http://localhost/_agileboardgame/api/?/gamestate',
            data: {
                game_id: that.state.game,
                type: 'card',
                type_id: m1.id,
                prop: 'location',
                val: 'backlog'
            },
                headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
            })
            .then(function(response) {
                // console.log(response);
            })
            .catch(function(error) {
                console.log(error);
            });

            axios({
            method: 'post',
            url: 'http://localhost/_agileboardgame/api/?/gamestate',
            data: {
                game_id: that.state.game,
                type: 'card',
                type_id: Number(m1.id) + 1,
                prop: 'location',
                val: 'cardpool'
            },
                headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
            })
            .then(function(response) {
                // console.log(response);
            })
            .catch(function(error) {
                console.log(error);
            });

            axios({
            method: 'post',
            url: 'http://localhost/_agileboardgame/api/?/gamestate',
            data: {
                game_id: that.state.game,
                type: 'card',
                type_id: m1.id,
                prop: 'prio',
                val: true
            },
                headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
            })
            .then(function(response) {
                // console.log(response);
            })
            .catch(function(error) {
                console.log(error);
            });

            setTimeout(() => {
                axios({
                method: 'post',
                url: 'http://localhost/_agileboardgame/api/?/gamestate',
                data: {
                    game_id: that.state.game,
                    type: 'score',
                    type_id: 0,
                    prop: 'score',
                    val: that.state.score
                },
                    headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
                })
                .then(function(response) {
                    // console.log(response);
                })
                .catch(function(error) {
                    console.log(error);
                });
            }, 100);
        }
    }

    actionCard5() {
        const that = this;
        const defectCard = this.state.cards.find((x) => x.type === 'defect' && x.location === 'cardpool');
        if (defectCard !== undefined) {
            const cards = this.state.cards;
            cards[defectCard.id - 1].location = 'backlog';
            cards[defectCard.id - 1].prio = true;

            axios({
                method: 'post',
                url: 'http://localhost/_agileboardgame/api/?/gamestate',
                data: {
                    game_id: that.state.game,
                    type: 'card',
                    type_id: defectCard.id,
                    prop: 'location',
                    val: 'backlog'
                },
                    headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
                })
                .then(function(response) {
                    // console.log(response);
                })
                .catch(function(error) {
                    console.log(error);
                });

            if (cards[defectCard.id] !== undefined) { // only run if not last defect card
                cards[defectCard.id].location = 'cardpool';
                // put in memory
                let ac5 = this.state.ac5;
                ac5 = Number(defectCard.id);
                this.setState({ac5});

                axios({
                method: 'post',
                url: 'http://localhost/_agileboardgame/api/?/gamestate',
                data: {
                    game_id: that.state.game,
                    type: 'card',
                    type_id: Number(defectCard.id) + 1,
                    prop: 'location',
                    val: 'cardpool'
                },
                    headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
                })
                .then(function(response) {
                    // console.log(response);
                })
                .catch(function(error) {
                    console.log(error);
                });

                axios({
                method: 'post',
                url: 'http://localhost/_agileboardgame/api/?/gamestate',
                data: {
                    game_id: that.state.game,
                    type: 'card',
                    type_id: defectCard.id,
                    prop: 'prio',
                    val: true
                },
                    headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
                })
                .then(function(response) {
                    // console.log(response);
                })
                .catch(function(error) {
                    console.log(error);
                });
            }
            this.setState({cards});
        }
    }

    actionCard7() {
        const that = this;
        const cards = this.state.cards;
        let card;
        const testPrio = cards.find((x) => x.development === 0 && x.prio);
        const test = cards.find((x) => x.development === 0 && !x.prio);
        const analysisPrio = cards.find((x) => x.analysis === 0 && x.prio);
        const analysis = cards.find((x) => x.analysis === 0 && !x.prio);
        if (testPrio !== undefined) {
            card = testPrio;
        } else if (test !== undefined) {
            card = test;
        } else if (analysisPrio !== undefined) {
            card = analysisPrio;
        } else if (analysis !== undefined) {
            card = analysis;
        }

        if(card !== undefined) {
            cards[card.id - 1].analysis = Number(card.analysis) + 2;
            cards[card.id - 1].development = Number(card.development) + 4;
            cards[card.id - 1].test = Number(card.test) + 2;
            cards[card.id - 1].location = 'backlog';
            cards[card.id - 1].prio = true;
            this.setState({cards});

            axios({
            method: 'post',
            url: 'http://localhost/_agileboardgame/api/?/gamestate',
            data: {
                game_id: that.state.game,
                type: 'card',
                type_id: card.id,
                prop: 'analysis',
                val: cards[card.id - 1].analysis
            },
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
            });

            axios({
            method: 'post',
            url: 'http://localhost/_agileboardgame/api/?/gamestate',
            data: {
                game_id: that.state.game,
                type: 'card',
                type_id: card.id,
                prop: 'development',
                val: cards[card.id - 1].development
            },
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
            });

            axios({
            method: 'post',
            url: 'http://localhost/_agileboardgame/api/?/gamestate',
            data: {
                game_id: that.state.game,
                type: 'card',
                type_id: card.id,
                prop: 'test',
                val: cards[card.id - 1].test
            },
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
            });

            axios({
            method: 'post',
            url: 'http://localhost/_agileboardgame/api/?/gamestate',
            data: {
                game_id: that.state.game,
                type: 'card',
                type_id: card.id,
                prop: 'location',
                val: cards[card.id - 1].location
            },
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
            });

            axios({
            method: 'post',
            url: 'http://localhost/_agileboardgame/api/?/gamestate',
            data: {
                game_id: that.state.game,
                type: 'card',
                type_id: card.id,
                prop: 'prio',
                val: cards[card.id - 1].prio
            },
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
            });
        }
    }

    actionCard8(val) {
        let ac8 = this.state.ac8;
        ac8 = val;
        this.setState({ac8});
    }

    actionCard9(choice) {
        const id = this.state.days[19].id;
        if (choice === 'yes') {
            this.state.days.splice(id, 0, {id: 'saturday', actioncard: 'no', current: 'no', message: '', sprint: '4', title: '6'}, {id: 'sunday', actioncard: 'no', current: 'no', message: '', sprint: '4', title: '7'});
        }
    }

    actionCard10() {
        const mCards = this.state.cards.filter((x) => x.type === 'maintenance' && (x.location === 'done' || x.location === 'dead'));
        if (mCards.length < 5) {
            const cards = this.state.cards;
            cards.filter((x) => x.type === 'maintenance' && x.location !== 'dead').forEach((x) => {
                cards[x.id - 1].location = 'backlog';
                cards[x.id - 1].prio = true;
            });
            this.setState({cards});
        }
    }

    actionCard13(val) {
        const that = this;
        const defects = this.state.cards.filter((x) => x.type === 'defect');
        const defectsDone = defects.filter((x) => x.location === 'dead' || x.location === 'done');
        const cards = this.state.cards;
        let score = this.state.score;
        if (defectsDone !== undefined && defectsDone.length === 6) {
            score += 400;
            this.setState({score});
        } else {
            defects.filter((x) => x.location === 'none' || x.location === 'cardpool').forEach((x) => {
                cards[x.id - 1].location = 'backlog';
                cards[x.id - 1].prio = true;
                this.setState({cards});

                axios({
                method: 'post',
                url: 'http://localhost/_agileboardgame/api/?/gamestate',
                data: {
                    game_id: that.state.game,
                    type: 'card',
                    type_id: x.id,
                    prop: 'location',
                    val: cards[x.id - 1].location
                },
                headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
                });

                axios({
                method: 'post',
                url: 'http://localhost/_agileboardgame/api/?/gamestate',
                data: {
                    game_id: that.state.game,
                    type: 'card',
                    type_id: x.id,
                    prop: 'prio',
                    val: true
                },
                headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
                });
            });
        }
    }

    checkGameStatus() {
        // current day
        this.state.gamestate.filter((x) => {
            return (
                x.game_id === this.state.game &&
                x.type === 'day' &&
                x.prop === 'current'
            )
        }).forEach((x) => {
            const days = this.state.days;
            days[0].current = 'no'; // set first day to not be current
            days[x.type_id - 1].current = x.val;
            this.setState({days});
        });
        // card locations
        this.state.gamestate.filter((x) => {
            return (
                x.game_id === this.state.game &&
                x.type === 'card' &&
                x.prop === 'location'
            )
        }).forEach((x) => {
            const cards = this.state.cards;
            cards[x.type_id - 1].location = x.val;
            this.setState({cards});
        });
        // card analysis scores
        this.state.gamestate.filter((x) => {
            return (
                x.game_id === this.state.game &&
                x.type === 'card' &&
                x.prop === 'analysis'
            )
        }).forEach((x) => {
            const cards = this.state.cards;
            cards[x.type_id - 1].analysis = x.val;
            this.setState({cards});
        });
        // card development scores
        this.state.gamestate.filter((x) => {
            return (
                x.game_id === this.state.game &&
                x.type === 'card' &&
                x.prop === 'development'
            )
        }).forEach((x) => {
            const cards = this.state.cards;
            cards[x.type_id - 1].development = x.val;
            this.setState({cards});
        });
        // card test scores
        this.state.gamestate.filter((x) => {
            return (
                x.game_id === this.state.game &&
                x.type === 'card' &&
                x.prop === 'test'
            )
        }).forEach((x) => {
            const cards = this.state.cards;
            cards[x.type_id - 1].test = x.val;
            this.setState({cards});
        });
        // card priorities
        this.state.gamestate.filter((x) => {
            return (
                x.game_id === this.state.game &&
                x.type === 'card' &&
                x.prop === 'prio'
            )
        }).forEach((x) => {
            const cards = this.state.cards;
            cards[x.type_id - 1].prio = x.val;
            this.setState({cards});
        });
        // worker sick status
        this.state.gamestate.filter((x) => {
            return (
                x.game_id === this.state.game &&
                x.type === 'worker' &&
                x.prop === 'sick'
            )
        }).forEach((x) => {
            const workers = this.state.workers;
            workers[x.type_id - 1].sick = Number(x.val);
            this.setState({workers});
        });
        // retrospectives
        this.state.gamestate.filter((x) => {
            return (
                x.game_id === this.state.game &&
                x.type === 'retrospective' &&
                x.prop === 'text'
            )
        }).forEach((x) => {
            const retrospectives = this.state.retrospectives;
            retrospectives.push({id: x.id, text: x.val});
            this.setState({retrospectives});
        });
        // score
        this.state.gamestate.filter((x) => {
            return (
                x.game_id === this.state.game &&
                x.type === 'score' &&
                x.prop === 'score'
            )
        }).forEach((x) => {
            let score = this.state.score;
            score = Number(x.val);
            console.log(x.val);
            this.setState({score});
        });
    }

    choose(card) {
        const that = this;
        const id = card.getAttribute('data-key');
        const thisLocation = this.state.cards[id - 1].location;
        let nextLocation;
        switch(thisLocation) {
            case 'cardpool':
                nextLocation = 'backlog';
                break;
            case 'backlog':
                if (this.state.cards.filter((x) => x.location === 'backlog' && x.prio === true)[0] === undefined) {
                    nextLocation = 'analysis';
                } else if (this.state.cards[id - 1].prio === true) {
                    nextLocation = 'analysis';
                } else {
                    nextLocation = 'backlog';
                }
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
                // console.log('done');
        }
        // change clicked card's location to next location
        axios({
            method: 'post',
            url: 'http://localhost/_agileboardgame/api/?/gamestate',
            data: {
                game_id: that.state.game,
                type: 'card',
                type_id: id,
                prop: 'location',
                val: nextLocation
            },
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
        })
        .then(function(response) {
            // console.log(response);
        })
        .catch(function(error) {
            console.log(error);
        });

        // change next card after clicked card's location to this location
        const stateCopy = {...this.state};
        stateCopy.cards[id - 1].location = nextLocation; // set this card's location to next location
        if (thisLocation === 'cardpool') {
            stateCopy.cards[id].location = thisLocation; // set next card's location to cardpool

            axios({
            method: 'post',
            url: 'http://localhost/_agileboardgame/api/?/gamestate',
            data: {
                game_id: that.state.game,
                type: 'card',
                type_id: Number(id) + 1,
                prop: 'location',
                val: thisLocation
            },
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
            })
            .then(function(response) {
                console.log(response);
            })
            .catch(function(error) {
                console.log(error);
            });
        }
        this.setState(stateCopy);
        }

    chooseWorker(worker) {
        // change css on diceholder
        if (worker.id === '1' || worker.id === '6') {
            this.analysis.diceHolder.diceHolder.classList.toggle('Analysis_diceHolder_active');
            this.test.diceHolder.diceHolder.classList.toggle('Analysis_diceHolder_active');
        } else {
            this.analysis.diceHolder.diceHolder.classList.toggle('Analysis_diceHolder_active');
            this.development.diceHolder.diceHolder.classList.toggle('Analysis_diceHolder_active');
            this.test.diceHolder.diceHolder.classList.toggle('Analysis_diceHolder_active');
        }

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
        // change css on diceholder
        this.analysis.diceHolder.diceHolder.classList.remove('Analysis_diceHolder_active');
        this.development.diceHolder.diceHolder.classList.remove('Analysis_diceHolder_active');
        this.test.diceHolder.diceHolder.classList.remove('Analysis_diceHolder_active');

        // remove last dice results
        let analysis = this.state.analysis;
        analysis.score = 0;
        this.setState({analysis});
        let development = this.state.development;
        development.score = 0;
        this.setState({development});
        let test = this.state.test;
        test.score = 0;
        this.setState({test});

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
        }
    }

    closeActionCard(val) {
        let actionCard = this.state.actionCard;
        actionCard = false;
        this.setState({actionCard});

        if (this.state.days[5].current === 'yes') { // Action card 2
            this.doubleTestTime();
        } else if (this.state.days[10].current === 'yes') { // Action card 3 & 11
            this.halfTestTime();
            this.killCardsInPlay();
        } else if (this.state.days[14].current === 'yes') { // Action card 4
            this.actionCard4();
        } else if (this.state.days[17].current === 'yes') { // Action card 5
            this.actionCard5();
        } else if (this.state.days[27].current === 'yes') { // Action card 7
            this.actionCard7();
        } else if (this.state.days[15].current === 'yes') { // Action card 8
            this.actionCard8(val);
        } else if (this.state.days[19].current === 'yes') { // Action card 9
            this.actionCard9(val);
        } else if (this.state.days[25].current === 'yes') { // Action card 10
            this.actionCard10();
        } else if (this.state.days[35].current === 'yes') { // Action card 13
            this.actionCard13(val);
        }
    }

    countDays(day) {
        const that = this;
        const stateCopy = {...this.state};
        if (day === 'saturday') {
            stateCopy.days[20].current = 'no';
            stateCopy.days[21].current = 'yes';
        } else if (day === 'sunday') {
            stateCopy.days[21].current = 'no';
            stateCopy.days[22].current = 'yes';
        } else {
            stateCopy.days[day - 1].current = 'no';
            stateCopy.days[day].current = 'yes';
        }

		this.setState(stateCopy);
        // change current day to not be current
        axios({
            method: 'post',
            url: 'http://localhost/_agileboardgame/api/?/gamestate',
            data: {
                game_id: that.state.game,
                type: 'day',
                type_id: Number(day),
                prop: 'current',
                val: 'no'
            },
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
        })
        .then(function(response) {
            // console.log(response);
        })
        .catch(function(error) {
            console.log(error);
        });
        // change next day to be current
        axios({
            method: 'post',
            url: 'http://localhost/_agileboardgame/api/?/gamestate',
            data: {
                game_id: that.state.game,
                type: 'day',
                type_id: Number(day) + 1,
                prop: 'current',
                val: 'yes'
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
				if (this.state.days[40].current === 'yes' || this.state.cards.filter((x) => x.location === 'dead').length === this.state.cards.length) {
					const that = this;
					axios({
					method: 'post',
					url: 'http://localhost/_agileboardgame/api/?/gamestate',
					data: {
							game_id: that.state.game,
							type: 'score',
							type_id: 0,
							prop: 'final',
							val: that.state.score
					},
					headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
					})
					.then(function(response) {
							// console.log(response);
					})
					.catch(function(error) {
							console.log(error);
					});
					var highscore = this.state.highscore;
					highscore = true;
					this.setState({highscore});

				}
				console.log();
    }

    changeLocations() {
        const that = this;
        this.state.cards.filter((card) => card.analysis === 0 && card.location === 'analysis').map((x) => {
            const cards = this.state.cards;
            cards[x.id - 1].location = 'development';
            this.setState({cards});

            axios({
            method: 'post',
            url: 'http://localhost/_agileboardgame/api/?/gamestate',
            data: {
                game_id: that.state.game,
                type: 'card',
                type_id: x.id,
                prop: 'location',
                val: 'development'
            },
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
            })
            .then(function(response) {
                // console.log(response);
            })
            .catch(function(error) {
                console.log(error);
            });

            return false;
        });
        this.state.cards.filter((card) => card.development === 0 && card.location === 'development').map((x) => {
            const cards = this.state.cards;
            cards[x.id - 1].location = 'test';
            this.setState({cards});

            axios({
            method: 'post',
            url: 'http://localhost/_agileboardgame/api/?/gamestate',
            data: {
                game_id: that.state.game,
                type: 'card',
                type_id: x.id,
                prop: 'location',
                val: 'test'
            },
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
            })
            .then(function(response) {
                // console.log(response);
            })
            .catch(function(error) {
                console.log(error);
            });

            return false;
        });
        this.state.cards.filter((card) => card.test === 0 && card.location === 'test').map((x) => {
            const cards = this.state.cards;
            cards[x.id - 1].location = 'done';
            this.setState({cards});

            let score = this.state.score;
            score += Number(x.price);
            this.setState({score});

            axios({
            method: 'post',
            url: 'http://localhost/_agileboardgame/api/?/gamestate',
            data: {
                game_id: that.state.game,
                type: 'card',
                type_id: x.id,
                prop: 'location',
                val: 'done'
            },
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
            })
            .then(function(response) {
                // console.log(response);
            })
            .catch(function(error) {
                console.log(error);
            });

            setTimeout(() => {
                axios({
                method: 'post',
                url: 'http://localhost/_agileboardgame/api/?/gamestate',
                data: {
                    game_id: that.state.game,
                    type: 'score',
                    type_id: 0,
                    prop: 'score',
                    val: that.state.score
                },
                    headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
                })
                .then(function(response) {
                    // console.log(response);
                })
                .catch(function(error) {
                    console.log(error);
                });
            }, 100);

            return false;
        });
        setTimeout(() => {
            this.countScore();
        }, 100);
    }

	closeRetrospective() {
		let retrospectiveDiv = this.state.retrospectiveDiv;
		retrospectiveDiv = !retrospectiveDiv;
		this.setState({retrospectiveDiv});
	}

    countScore() {
        this.state.cards.filter((card) => card.location === 'done').forEach((x) => {
            // action card 8 counter
            if (this.state.days[16].current === 'yes' ||
                this.state.days[17].current === 'yes' ||
                this.state.days[18].current === 'yes' ||
                this.state.days[19].current === 'yes') {
                let ac8 = this.state.ac8;
                ac8--;
                this.setState({ac8});
            }
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

    login(name, password) {
        const that = this;

        axios({
            method: 'post',
            url: 'http://localhost/_agileboardgame/api/?/game',
            data: {
                name: name,
                password: password
            },
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
            })
            .then(function(response) {
                if (response.data.games[0] !== undefined) {
                    let game = that.state.game;
                    game = response.data.games[0].id;
                    that.setState({game});

                    let login = that.state.login;
                    login = false;
                    that.setState({login});
                    localStorage.setItem('user', response.data.games[0].id); // set localstorage
                    that.fetchData(); // fetch all data
                } else {
                    let error = that.loginPage.state.error;
                    error = true;
                    that.loginPage.setState({error});
                }
            })
            .catch(function(error) {
                console.log(error);
        });
    }

    logout() {
        if (localStorage.getItem('user') !== null) {
            localStorage.removeItem('user');
            // let game = this.state.game;
            // game = '0';
            // this.setState({game});
            // let login = this.state.login;
            // login = true;
            // this.setState({login});
            location.reload();
        }
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
        if (this.state.days[day - 1].message === '') {
            if (this.state.workers.filter((x) => x.sick !== 0)[0].sick === Number(day)) { // Sick worker
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
        let hasWeekend = false;
        if (day === 'saturday' || day === 'sunday') { // action card 9
            hasWeekend = true;
        } else {
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
        // reset amount of days to normal (from action card 9's effect)
        if (this.state.days[22].current === 'yes' && hasWeekend) {
            this.state.days.splice(19, 2);
            setTimeout(() => {
                this.state.days.splice(21, 1); // also remove tuesday from sprint
            }, 100);
        }
        // put tuesday back
        if (this.state.days[21].current === 'yes' && this.state.days[21].title === '3') {
            this.state.days.splice(21, 0, {actioncard: 'no', current: 'no', id: '23', message: '', sprint: '5', title: '3'});
        }
    }

	hasRetrospective() {
        const that = this;
		let showRetrospective = this.state.showRetrospective;
		if (this.state.days.filter((day) => day.current === 'yes' && day.title === '1' && day.sprint !== '1').length !== 0) {
			showRetrospective = !showRetrospective;
			this.setState({showRetrospective});

            // on new sprint, remove all cards from done column
            const cards = this.state.cards;
            cards.filter((x) => x.location === 'done').forEach((x) => {
                cards[x.id - 1].location = 'dead';

                axios({
                    method: 'post',
                    url: 'http://localhost/_agileboardgame/api/?/gamestate',
                    data: {
                        game_id: that.state.game,
                        type: 'card',
                        type_id: x.id,
                        prop: 'location',
                        val: 'dead'
                    },
                    headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
                    })
                    .then(function(response) {
                        // console.log(response);
                    })
                    .catch(function(error) {
                        console.log(error);
                });
            });
            this.setState({cards});
		}
	}

    rollDice() {
        let analysisScore = 0;
        let developmentScore = 0;
        let testScore = 0;
        this.state.workers.filter((worker) => worker.location === 'analysis').forEach((x) => {
            analysisScore += Math.floor((Math.random() * 6) + 1);
        });
        this.state.workers.filter((worker) => worker.location === 'development').forEach((x) => {
            developmentScore += Math.floor((Math.random() * 6) + 1);
        });
        this.state.workers.filter((worker) => worker.location === 'test').forEach((x) => {
            testScore += Math.floor((Math.random() * 6) + 1);
        });
        this.subtractScore(analysisScore, 'analysis');
        this.subtractScore(developmentScore, 'development');
        this.subtractScore(testScore, 'test');

        let analysis = this.state.analysis;
        analysis.score = analysisScore;
        this.setState({analysis});
        let development = this.state.development;
        development.score = developmentScore;
        this.setState({development});
        let test = this.state.test;
        test.score = testScore;
        this.setState({test});
    }


	saveRetrospective(val) {
        const that = this;
		const sprint = this.state.days.filter((x) => x.current === 'yes')[0].sprint
		const stateCopy = {...this.state};
		stateCopy.retrospectives.push({id:sprint, text: val});
		this.setState(stateCopy);
		axios({
            method: 'post',
            url: 'http://localhost/_agileboardgame/api/?/gamestate',
            data: {
                game_id: that.state.game,
                type: 'retrospective',
                type_id: '',
                prop: 'text',
                val: val
            },
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
            })
            .then(function(response) {
                // console.log(response);
            })
            .catch(function(error) {
                console.log(error);
        });
		// Close window
		let showRetrospective = this.state.showRetrospective;
		showRetrospective = !showRetrospective;
		this.setState({showRetrospective});
	}

    showAdmin() {
        let admin = this.state.admin;
        admin = !admin;
        this.setState({admin});
    }

    showRules() {
        let rules = this.state.rules;
        rules = !rules;
        this.setState({rules});
    }

    subtractScore(score, loc) {
        const that = this;
        const cards = this.state.cards.filter((card) => card.location === loc);
		var diceScore = score;

        cards.filter((x) => x.prio).map((card) => {
            const initialPoints = card[loc];
            const initialScore = diceScore;
            let result = card[loc] - diceScore;
            if (result <= 0) {
                diceScore = initialScore - initialPoints; // turn negative number into positive on score
                                result = 0; // make card.analysis 0
            } else if (result > 0) {
                    diceScore = 0;
            }

            const stateCopy = {...this.state};
            stateCopy.cards[card.id - 1][loc] = result;
            this.setState(stateCopy);

            axios({
            method: 'post',
            url: 'http://localhost/_agileboardgame/api/?/gamestate',
            data: {
                game_id: that.state.game,
                type: 'card',
                type_id: card.id,
                prop: loc,
                val: result
            },
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
            })
            .then(function(response) {
                // console.log(response);
            })
            .catch(function(error) {
                console.log(error);
            });

            return false;
        });

        cards.map((card) => {
            const initialPoints = card[loc];
            const initialScore = diceScore;
            let result = card[loc] - diceScore;
            if (result <= 0) {
                diceScore = initialScore - initialPoints; // turn negative number into positive on score
								result = 0; // make card.analysis 0
            } else if (result > 0) {
					diceScore = 0;
			}

            const stateCopy = {...this.state};
            stateCopy.cards[card.id - 1][loc] = result;
            this.setState(stateCopy);

            axios({
            method: 'post',
            url: 'http://localhost/_agileboardgame/api/?/gamestate',
            data: {
                game_id: that.state.game,
                type: 'card',
                type_id: card.id,
                prop: loc,
                val: result
            },
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
            })
            .then(function(response) {
                // console.log(response);
            })
            .catch(function(error) {
                console.log(error);
            });
            return false;
        });
    }
    showCalendar() {
        this.setState({calendar: !this.state.calendar});
    }

    isSick(days) {
        const that = this;
        const returnDate = Number(this.state.days.filter((day) => day.current === 'yes')[0].id) + days;
        const stateCopy = {...this.state};
        if (this.state.days[2].current === 'yes') {
            stateCopy.workers[1].sick = returnDate; // First developer worker
            axios({
            method: 'post',
            url: 'http://localhost/_agileboardgame/api/?/gamestate',
            data: {
                game_id: that.state.game,
                type: 'worker',
                type_id: 2,
                prop: 'sick',
                val: returnDate
            },
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
            });
        } else if (this.state.days[23].current === 'yes') {
            stateCopy.workers[5].sick = returnDate; // Test worker
            // axios({
            // method: 'post',
            // url: 'http://localhost/_agileboardgame/api/?/gamestate',
            // data: {
            //     game_id: that.state.game,
            //     type: 'worker',
            //     type_id: 6,
            //     prop: 'sick',
            //     val: returnDate
            // },
            // headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
            // });
        } else if (this.state.days[31].current === 'yes') {
            stateCopy.workers[1].sick = returnDate; // First developer worker
            axios({
            method: 'post',
            url: 'http://localhost/_agileboardgame/api/?/gamestate',
            data: {
                game_id: that.state.game,
                type: 'worker',
                type_id: 2,
                prop: 'sick',
                val: returnDate
            },
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
            });
        }
        this.setState(stateCopy);
    }
}
