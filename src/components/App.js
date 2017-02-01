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
            workers
		};
	}

	componentDidMount() {
		this.fetchData();
	}

	render() {
		return (
			<div>
				<Header workers={this.state.workers} drag={this.drag} />
				<div className="App_board">
					<div className="App_mainBoard">
						<CardPool cards={this.state.cards} drag={this.drag} />
						<Backlog setHidden={(id) => this.setHidden(id)} allowDrop={this.allowDrop} drop={this.drop} />
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
                    hidden: item.hidden
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
                    type: item.type,
                    sick: item.sick
                }));
                that.setState({workers: that.state.workers});
            })
            .catch(function(error) {
                console.log(error);
            });
    }
    setHidden(id) {
        const nextCardId = Number(id) + 1;
        console.log(nextCardId);
        axios({
            method: 'put',
            url: 'http://localhost/_agileboardgame/api/?/card/' + nextCardId,
            data: {
                hidden: 0
            }
        })
        .then(function(response) {
            // console.log(response);
        })
        .catch(function(error) {
                console.log(error);
        });

        const stateCopy = Object.assign({}, this.state);
        stateCopy.cards[nextCardId - 1].hidden = 0;
        this.setState(stateCopy);
    }
    drag(id, evt) {
        console.log(evt.target.id);
        evt.dataTransfer.setData('text', evt.target.id);
    }
    allowDrop(evt) {
        evt.preventDefault();
    }

    drop(evt) {
        evt.preventDefault();
        const data = evt.dataTransfer.getData('text'); // what to append
        const droppedElement = document.getElementById(data);
        const id = droppedElement.getAttribute('data-key'); // get key corresponding to id in database
        evt.target.appendChild(droppedElement); // append card to column
        this.setHidden(id); // send id to ajax call
    }
}
