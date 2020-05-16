import React, { Component } from 'react';

import Estimation from '../Estimation/Estimation';

import './Deposit.css';

class Deposit extends Component {
	state = {};
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
					<button
						className='button is-danger'
						title='Disabled button'
						disabled
					>
						Deposit
					</button>
				</div>
				<Estimation />
			</div>
		);
	}
}

export default Deposit;
