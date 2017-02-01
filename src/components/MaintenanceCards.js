import React, {Component} from 'react';

export default class MaintenanceCards extends Component {
	render() {
		return (
			<div>
				{this.renderMaintenanceCards()}
			</div>
		);
	}

    renderMaintenanceCards() {
    	return this.props.cards.map((item) => {
    		if (item.type === 'maintenance') {
				return (
					<div className="UserStories_userStory" key={item.id} data-key={item.id} id={item.title} draggable onDragStart={(evt) => this.drag(item.id, evt)} data-hidden={item.hidden}>
						{item.title}<br />
						Analysis: {item.analysis}<br />
						Development: {item.development}<br />
						Test: {item.test}
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