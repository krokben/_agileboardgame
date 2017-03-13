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
    		if (item.type === 'maintenance' && item.location === this.props.location) {
				return (
					<div
						className="UserStories_userStory"
						key={`maintenance-${item.id}`} data-key={item.id}
						id={item.title}
						ref={(card) => this[item.id] = card}
						onClick={this.props.choose !== undefined ? () => this.props.choose(this[item.id]) : null}
					>
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
}