import React, { Component } from 'react';
import axios from 'axios';

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
				<button className="Header_reset" onClick={this.resetGameState.bind(this)}>Reset</button>
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
							<td><input type="text" placeholder={'us' + Number(Number(this.props.cards.filter((x) => x.type === 'userstory')[this.props.cards.filter((x) => x.type === 'userstory').length - 1].index) + 1)} ref={(newTitle) => this.newTitle = newTitle} disabled /></td>
							<td><input type="text" placeholder="Price..." ref={(newPrice) => this.newPrice = newPrice} /></td>
							<td><input type="text" placeholder="Analysis..." ref={(newAnalysis) => this.newAnalysis = newAnalysis} /></td>
							<td><input type="text" placeholder="Development..." ref={(newDevelopment) => this.newDevelopment = newDevelopment} /></td>
							<td><input type="text" placeholder="Test..." ref={(newTest) => this.newTest = newTest} /></td>
							<td className="Admin_save" colSpan={2} onClick={this.addNew.bind(this)}>Add new</td>
						</tr>
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
					<tr key={`adminedit-${x.id}`}>
						<td ref={(title) => this.title = title}>{x.title}</td>
						<td><input type="text" defaultValue={x.price} ref={(price) => this.price = price} /></td>
						<td><input type="text" defaultValue={x.analysis} ref={(analysis) => this.analysis = analysis} /></td>
						<td><input type="text" defaultValue={x.development} ref={(development) => this.development = development} /></td>
						<td><input type="text" defaultValue={x.test} ref={(test) => this.test = test} /></td>
						{this.state.saving === x.title.match(/\d+/)[0] ? <td className="Admin_save" onClick={() => this.handleSave(x.id)}>Save</td> : <td className="Admin_edit" onClick={() => this.handleEdit(x.title.match(/\d+/)[0])}>Edit</td>}
						{this.state.deleting === x.title.match(/\d+/)[0] ? <td className="Admin_sure" onClick={() => this.delete(x.id)}>Sure?</td> : <td className="Admin_delete" onClick={() => this.handleDelete(x.title.match(/\d+/)[0])}>Delete</td>}
					</tr>
				);
			} else {
				return (
					<tr key={`admin-${x.id}`}>
						<td>{x.title}</td>
						<td>{x.price}</td>
						<td>{x.analysis}</td>
						<td>{x.development}</td>
						<td>{x.test}</td>
						{this.state.saving === x.title.match(/\d+/)[0] ? <td className="Admin_save" onClick={() => this.handleSave(x.id)}>Save</td> : <td className="Admin_edit" onClick={() => this.handleEdit(x.title.match(/\d+/)[0])}>Edit</td>}
						{this.state.deleting === x.title.match(/\d+/)[0] ? <td className="Admin_sure" onClick={() => this.delete(x.id)}>Sure?</td> : <td className="Admin_delete" onClick={() => this.handleDelete(x.title.match(/\d+/)[0])}>Delete</td>}
					</tr>
				);
			}
		});
	}

	addNew() {
		const that = this;

		const userStories = this.props.cards.filter((x) => x.type === 'userstory');
		const lastIndex = userStories[userStories.length - 1].index;
		const thisIndex = Number(lastIndex) + 1;

		axios({
      method: 'post',
      url: 'http://localhost/_agileboardgame/api/?/card',
      data: {
      		index: thisIndex,
          type: 'userstory',
          title: 'us' + thisIndex,
          price: that.newPrice.value,
          analysis: that.newAnalysis.value,
          development: that.newDevelopment.value,
          test: that.newTest.value,
          location: 'none'
      },
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
      })
      .then(function(response) {
      	that.props.fetchCards();
      	// reset values
      	that.newPrice.value = null;
      	that.newAnalysis.value = null;
      	that.newDevelopment.value = null;
      	that.newTest.value = null;
      })
      .catch(function(error) {
        console.log(error);
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

	resetGameState() {
    axios({
        method: 'RESETGAME',
        url: 'http://localhost/_agileboardgame/api/?/card'
    });
    location.reload();
	}
}
