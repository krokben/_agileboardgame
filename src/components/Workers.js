import React, {Component} from 'react';

export default class Workers extends Component {
	render() {
		return (
			<div className={this.props.className}>
				{this.renderWorkers()}
			</div>
		);
	}

	renderWorkers() {
		return this.props.workers.map((item) => {
			if (item.location === this.props.location && Number(item.sick) === 0) {
				return (
					<div
						className={'Workers_worker ' + item.type}
						key={`worker-${item.id}`}
						id={item.id}
						onClick={() => this.props.chooseWorker(this[item.index])}
						ref={(worker) => {this[item.index] = worker}}
					>
						<p>{item.type.slice(0, 1).toUpperCase()}</p>
					</div>
				);
			}
			return false;
		});
	}
}