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
				<button onClick={this.props.showAdmin}>Close</button>
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
			if (this.state.editing === x.id) {
				return (
					<tr key={x.id}>
						<td ref={(title) => this.title = title}>{x.title}</td>
						<td><input type="text" defaultValue={x.price} ref={(price) => this.price = price} /></td>
						<td><input type="text" defaultValue={x.analysis} ref={(analysis) => this.analysis = analysis} /></td>
						<td><input type="text" defaultValue={x.development} ref={(development) => this.development = development} /></td>
						<td><input type="text" defaultValue={x.test} ref={(test) => this.test = test} /></td>
						{this.state.saving === x.id ? <td className="Admin_save" onClick={() => this.handleSave(x.title.match(/\d+/)[0])}>Save</td> : <td className="Admin_edit" onClick={() => this.handleEdit (x.title.match(/\d+/)[0])}>Edit</td>}
						<td className="Admin_delete">Delete</td>
					</tr>
				);
			} else {
				return (
					<tr key={x.id}>
						<td>{x.title}</td>
						<td>{x.price}</td>
						<td>{x.analysis}</td>
						<td>{x.development}</td>
						<td>{x.test}</td>
						{this.state.saving === x.id ? <td className="Admin_save" onClick={() => this.handleSave(x.title.match(/\d+/)[0])}>Save</td> : <td className="Admin_edit" onClick={() => this.handleEdit (x.title.match(/\d+/)[0])}>Edit</td>}
						<td className="Admin_delete">Delete</td>
					</tr>
				);
			}
		});
	}

	handleEdit(id) {
		let editing = this.state.editing;
		editing = id;
		this.setState({editing});
		let saving = this.state.saving;
		saving = id;
		this.setState({saving});
	}

	handleSave(id) {
		let editing = this.state.editing;
		editing = '0';
		this.setState({editing});
		let saving = this.state.saving;
		saving = '0';
		this.setState({saving});
		this.props.adminEdit(id);
	}
}
