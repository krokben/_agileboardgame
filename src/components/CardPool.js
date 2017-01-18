import React, {Component} from 'react';
import $ from 'jquery';
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
			<div style={{background: 'DeepSkyBlue'}}>
				<UserStories cards={this.state.cards} onDragStart={this.drag()} />
				<MaintenanceCards />
				<DefectCards />
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
            	data.map((item) => this.state.cards.push({
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
            	this.setState({cards: this.state.cards});
            },
            error: function (req, status, err) {
                console.log('Something went wrong', status, err);
            }
        }).done(this.loadResults); // bind this
    }

    drag() {
    	console.log('kör en post som ändrar hidden på nästa kort till 0')
    }
}