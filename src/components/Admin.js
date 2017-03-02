import React, { Component } from 'react';

export default class Admin extends Component {
	constructor() {
		super();
		this.state = {
			editing: '0',
			saving: '0'
		}
	}

	render() {
		return (
			<div className="Admin">
				<h1>Agile Board Game - Admin</h1>
				<table className="Admin_table">
					<thead>
						<tr>
							<th>Title</th>
							<th>Price</th>
							<th>Analysis</th>
							<th>Development</th>
							<th>Test</th>
						</tr>
					</thead>
					<tbody>
						{this.renderCards()}
					</tbody>
				</table>
			</div>
		);
	}

	renderCards() {
		return this.props.cards.filter((x) => x.type === 'userstory').map(x => {
			if (this.state.editing === x.title.match(/\d+/)[0]) {
				return (
					<tr key={x.title.match(/\d+/)[0]}>
						<td><input type="text" defaultValue={x.title} ref={(title) => this.title = title} /></td>
						<td><input type="text" defaultValue={x.price} ref={(price) => this.price = price} /></td>
						<td><input type="text" defaultValue={x.analysis} ref={(analysis) => this.analysis = analysis} /></td>
						<td><input type="text" defaultValue={x.development} ref={(development) => this.development = development} /></td>
						<td><input type="text" defaultValue={x.test} ref={(test) => this.test = test} /></td>
						{this.state.saving === x.title.match(/\d+/)[0] ? <td className="Admin_save" onClick={() => this.handleSave(x.title.match(/\d+/)[0])}>Save</td> : <td className="Admin_edit" onClick={() => this.handleEdit (x.title.match(/\d+/)[0])}>Edit</td>}
						<td className="Admin_delete">Delete</td>
					</tr>
				);
			} else {
				return (
					<tr key={x.title.match(/\d+/)[0]}>
						<td>{x.title}</td>
						<td>{x.price}</td>
						<td>{x.analysis}</td>
						<td>{x.development}</td>
						<td>{x.test}</td>
						{this.state.saving === x.title.match(/\d+/)[0] ? <td className="Admin_save" onClick={() => this.handleSave(x.title.match(/\d+/)[0])}>Save</td> : <td className="Admin_edit" onClick={() => this.handleEdit (x.title.match(/\d+/)[0])}>Edit</td>}
						<td className="Admin_delete">Delete</td>
					</tr>
				);
			}
		});
	}

	handleEdit(idx) {
		let editing = this.state.editing;
		editing = idx;
		this.setState({editing});
		let saving = this.state.saving;
		saving = idx;
		this.setState({saving});
	}

	handleSave(idx) {
		
	}
}
