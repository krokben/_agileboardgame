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
    		if (item.type === 'defect') {
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