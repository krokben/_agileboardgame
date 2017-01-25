import React, {Component} from 'react';
import $ from 'jquery';

export default class UserStories extends Component {
	render() {
		return (
			<div>
				{this.renderUserStories()}
			</div>
		);
	}

    renderUserStories() {
    	return this.props.cards.map((item) => {
    		if (item.type === 'userstory') {
				return <div className="UserStories_userStory" key={item.id} draggable onDragStart={this.props.drag}>
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