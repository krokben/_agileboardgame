import React, {Component} from 'react';

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
				return (
					<div className="UserStories_userStory" key={item.id} draggable onDragStart={(evt) => this.handleDrag(item.id, evt)}>
						{item.title}<br />
						Analysis: {item.analysis}<br />
						Development: {item.development}<br />
						Test: {item.test}<br />
						Price: {item.price}
					</div>
				);
    		}
    		return false;
    	});
    }

	handleDrag(id, evt) {
		evt.preventDefault();
		this.props.drag(id);
    }
}