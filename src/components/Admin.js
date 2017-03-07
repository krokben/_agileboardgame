import React, { Component } from 'react';

export default class Admin extends Component {
	constructor() {
		super();
		this.state = {
			editing: '0',
			saving: '0',
			deleting: '0'
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
						<tr>
							<td><input type="text" placeholder="Title..." ref={(newTitle) => this.newTitle = newTitle} /></td>
							<td><input type="text" placeholder="Price..." ref={(newPrice) => this.newPrice = newPrice} /></td>
							<td><input type="text" placeholder="Analysis..." ref={(newAnalysis) => this.newPrice = newAnalysis} /></td>
							<td><input type="text" placeholder="Development..." ref={(newDevelopment) => this.newPrice = newDevelopment} /></td>
							<td><input type="text" placeholder="Test..." ref={(newTest) => this.newPrice = newTest} /></td>
							<td className="Admin_save" colSpan={2}>Add new</td>
						</tr>
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
						<td>id: {x.id}</td>
						<td ref={(title) => this.title = title}>{x.title}</td>
						<td><input type="text" defaultValue={x.price} ref={(price) => this.price = price} /></td>
						<td><input type="text" defaultValue={x.analysis} ref={(analysis) => this.analysis = analysis} /></td>
						<td><input type="text" defaultValue={x.development} ref={(development) => this.development = development} /></td>
						<td><input type="text" defaultValue={x.test} ref={(test) => this.test = test} /></td>
						{this.state.saving === x.id ? <td className="Admin_save" onClick={() => this.handleSave(x.id)}>Save</td> : <td className="Admin_edit" onClick={() => this.handleEdit (x.title.match(/\d+/)[0])}>Edit</td>}
						{this.state.deleting === x.id ? <td className="Admin_sure" onClick={() => this.delete(x.id)}>Sure?</td> : <td className="Admin_delete" onClick={() => this.handleDelete(x.id)}>Delete</td>}
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
						{this.state.saving === x.id ? <td className="Admin_save" onClick={() => this.handleSave(x.id)}>Save</td> : <td className="Admin_edit" onClick={() => this.handleEdit (x.title.match(/\d+/)[0])}>Edit</td>}
						{this.state.deleting === x.id ? <td className="Admin_sure" onClick={() => this.delete(x.id)}>Sure?</td> : <td className="Admin_delete" onClick={() => this.handleDelete(x.id)}>Delete</td>}
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

	handleDelete(id) {
		let deleting = this.state.deleting;
		deleting = id;
		this.setState({deleting});
	}

	delete(id) {
		let deleting = this.state.deleting;
		deleting = '0';
		this.setState({deleting});
		this.props.adminDelete(id);
	}
}
