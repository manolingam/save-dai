import React, { Component } from 'react';

import './Withdraw.css';

class Withdraw extends Component {
	render() {
		return (
			<div className='withdraw-container'>
				<p id='withdraw-text'>
					For the amount of saveDAI you choose to withdraw, you will
					receive both the interest-generating component (cDAI) and
					the insurance component (ocDAI)
				</p>
				<div className='withdraw'>
					<div style={{ display: 'flex', flexDirection: 'column' }}>
						<p
							className='is-small'
							style={{
								marginBottom: '5px',
								fontWeight: 'bold',
							}}
						>
							How much saveDAI do you want to withdraw?
						</p>
						<input
							className='input'
							type='number'
							placeholder='DAI deposit amount'
						></input>
					</div>
					<button className='button withdraw-button'>Withdraw</button>
				</div>
			</div>
		);
	}
}

export default Withdraw;
