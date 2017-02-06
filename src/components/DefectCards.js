import React, {Component} from 'react';

export default class DefectCards extends Component {
	render() {
		return (
			<div>
				{this.renderDefectCards()}
			</div>
		);
	}

    renderDefectCards() {
    	return this.props.cards.map((item) => {
    		if (item.type === 'defect' && item.location === this.props.location) {
				return (
					<div className="UserStories_userStory" key={item.id} data-key={item.id} id={item.title} onClick={(evt) => this.props.choose(this, evt)}>
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