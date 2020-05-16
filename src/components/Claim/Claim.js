import React, { Component } from 'react';

import './Claim.css';

class Claim extends Component {
	render() {
		return (
			<div className='claim'>
				<div style={{ display: 'flex', flexDirection: 'column' }}>
					<p
						className='is-small'
						style={{
							marginBottom: '5px',
							fontWeight: 'bold',
						}}
					>
						How much saveDAI do you want to make a claim for?
					</p>
					<input
						className='input'
						type='number'
						placeholder='DAI deposit amount'
					></input>
				</div>
				<button className='button claim-button'>claim</button>
			</div>
		);
	}
}

export default Claim;
