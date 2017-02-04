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
					<div className="UserStories_userStory" key={item.id} data-key={item.id} id={item.title} draggable onDragStart={(evt) => this.props.drag(item.id, evt)} data-hidden={item.hidden}>
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

	drag(id, evt) {
		evt.dataTransfer.setData('text', evt.target.id);
		// this.props.drag(id);
    }
}