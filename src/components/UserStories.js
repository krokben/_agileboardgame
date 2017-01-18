import React, {Component} from 'react';
import $ from 'jquery';

export default class UserStories extends Component {
	divStyle() {
		return (
			{
				background: 'DeepSkyBlue',
				color: '#fff'
			}
		);
	}

	render() {
		return (
			<div style={this.divStyle()}>
				{this.renderUserStories()}
			</div>
		);
	}

    renderUserStories() {
    	return this.props.cards.map((item) => <div key={item.id}>{item.id} {item.title}</div>);
    }
}