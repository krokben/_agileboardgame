import React, {Component} from 'react';
import axios from 'axios';
import UserStories from './UserStories';
import MaintenanceCards from './MaintenanceCards';
import DefectCards from './DefectCards';

const cards = [];

export default class CardPool extends Component {
	constructor(props) {
		super(props);

		this.state = {
			cards
		};
	}

	componentDidMount() {
		this.fetchData();
	}


	render() {
		return (
			<div className="CardPool_container">
				<UserStories cards={this.state.cards} drag={() => {this.drag()}} />
				<MaintenanceCards />
				<DefectCards />
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
    }

    drag() {
        console.log(this);
        // axios({
        //     method: 'put',
        //     url: '/user/12345',
        //     data: {
        //         id: 
        //     }
        // });
    }
}