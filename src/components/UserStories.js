import React, {Component} from 'react';
import $ from 'jquery';

export default class UserStories extends Component {
	cssStyle(target) {
		switch(target) {
			case 'divStyle':
				return (
					{
						background: '#FFDAB9',
						width: '300px',
						color: '#fff'
					}
				);
				break;
			case 'userStory':
				return (
					{
						background: '#F74169',
						width: '150px',
						marginBottom: '15px',
						color: '#fff'
					}
				);
				break;
			case 'divStyle3':
				return (
					{
						background: 'limegreen',
						color: '#fff'
					}
				);
				break;
		}
	}

	render() {
		return (
			<div style={this.cssStyle('divStyle')}>
				{this.renderUserStories()}
			</div>
		);
	}

    renderUserStories() {
    	return this.props.cards.map((item) => {
    		if (item.type === 'userstory') {
				return <div style={this.cssStyle('userStory')} key={item.id} draggable>
							{item.title}<br />
							Analysis: {item.analysis}<br />
							Development: {item.development}<br />
							Test: {item.test}<br />
							Price: {item.price}
						</div>
    		}
    	});
    }
}