import React, {Component} from 'react';

export default class Workers extends Component {
	render() {
		return (
			<div className='Workers_workers'>
				{this.renderWorkers()}
			</div>
		);
	}

	renderWorkers() {
		return this.props.workers.map((item) => {
			return (
				<div
					className="Workers_worker"
					key={item.id}
					id={item.id}
					onClick={() => this.props.chooseWorker(this[item.index])}
					ref={(worker) => {this[item.index] = worker}}>
				</div>
			);
		});
	}
}