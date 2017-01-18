import React, {Component} from 'react';
import $ from 'jquery';
import UserStories from './UserStories';

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
			<div>
				<UserStories cards={this.state.cards} />
			</div>
		);
	}

	fetchData() {
        $.ajax({
        	context: this, // bind this
        	method: 'GET',
            url: 'http://localhost/_agileboardgame/php/api.php',
            data: "",
            dataType: 'json',
            success: function(data) {
            	data.map((item) => this.state.cards.push({id: item.id, title: item.title}));
            	this.setState({cards: this.state.cards});
            },
            error: function (req, status, err) {
                console.log('Something went wrong', status, err);
            }
        }).done(this.loadResults); // bind this
    }
}