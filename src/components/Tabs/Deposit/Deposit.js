import React, { Component } from 'react';

import Tooltip from '@material-ui/core/Tooltip';
import LockOpenIcon from '@material-ui/icons/LockOpen';

import Estimation from '../../Estimation/Estimation';

import './Deposit.css';

class Deposit extends Component {
	state = {
		locked: true,
	};
	render() {
		return (
			<div className='deposit-container'>
				<div className='deposit'>
					<div style={{ display: 'flex', flexDirection: 'column' }}>
						<p
							className='is-small'
							style={{
								marginBottom: '5px',
								fontWeight: 'bold',
							}}
						>
							How much do you wanna save?
						</p>
						<input
							className='input'
							type='number'
							placeholder='DAI deposit amount'
						></input>
					</div>

					{this.state.locked ? (
						<div id='lock'>
							<Tooltip title='Unlock' arrow placement='top'>
								<LockOpenIcon fontSize='medium' />
							</Tooltip>
						</div>
					) : (
						<button
							className='button is-danger'
							title='Disabled button'
							disabled
						>
							Deposit
						</button>
					)}
				</div>
				<Estimation />
			</div>
		);
	}
}

export default Deposit;
