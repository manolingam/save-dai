import React, { Component } from 'react';

import Estimation from '../Estimation/Estimation';

import './Manage.css';

class Manage extends Component {
	render() {
		return (
			<div className='manage-container'>
				<div className='manage'>
					<div style={{ display: 'flex', flexDirection: 'row' }}>
						<button
							className='button withdraw-button'
							onClick={this.props.withdrawHandler}
						>
							Withdraw
						</button>
						<button
							className='button claim-button'
							onClick={this.props.claimHandler}
						>
							Claim
						</button>
					</div>
				</div>
				<Estimation />
			</div>
		);
	}
}

export default Manage;
