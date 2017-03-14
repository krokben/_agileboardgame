import React, {Component} from 'react';

export default class UserStories extends Component {
	render() {
		return (
			<div>
				{this.renderPrio()}
				{this.renderUserStories()}
			</div>
		);
	}

	renderPrio() {
		return this.props.cards.map((item) => {
			if (item.prio && item.location === this.props.location) {
				return (
					<div
						className="UserStories_userStory"
						key={`prio-${item.id}`} data-key={item.id}
						id={item.title}
						ref={(card) => this[item.id] = card}
						onClick={this.props.choose !== undefined ? () => this.props.choose(this[item.id]) : null}
					>
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

  renderUserStories() {
  	return this.props.cards.map((item) => {
  		if (item.type === 'userstory' && item.location === this.props.location && !item.prio) {
				return (
					<div
						className="UserStories_userStory"
						key={`userstory-${item.id}`} data-key={item.id}
						id={item.title}
						ref={(card) => this[item.id] = card}
						onClick={this.props.choose !== undefined ? () => this.props.choose(this[item.id]) : null}
					>
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
}