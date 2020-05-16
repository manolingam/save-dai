import React, { Component } from 'react';

import 'bulma';

import './Estimation.css';

class Estimation extends Component {
	state = {};

	render() {
		return (
			<div className='estimation'>
				<p className='estimation-title is-normal'>
					Estimate for depositing{' '}
					<span className='is-large' style={{ marginLeft: '3px' }}>
						100 <span className='is-medium'>DAI</span>
					</span>
				</p>
				<div className='grid-container'>
					<div className='card'>
						<p className='plan-heading'>
							Estimated Insurance Premium
						</p>
						<p className='is-large'>
							2 <span className='is-medium'>DAI</span>
						</p>
					</div>
					<div className='card'>
						<p className='plan-heading'>Estimated Premium Rate</p>
						<p className='is-large'>
							2 <span className='is-medium'>%</span>
						</p>
					</div>
					<div className='card'>
						<p className='plan-heading'>
							Current Uninsured Interest Rate
						</p>
						<p className='is-large'>
							5 <span className='is-medium'>%</span>{' '}
							<span className='is-small'>APY</span>
						</p>
					</div>
					<div className='card'>
						<p className='plan-heading'>
							Current Insured Insterest Rate
						</p>
						<p className='is-large'>
							3 <span className='is-medium'>%</span>{' '}
							<span className='is-small'>APY</span>
						</p>
					</div>
					<div className='card'>
						<p className='plan-heading'>Insurance Term Ends</p>
						<p className='is-large year'>
							<span className='is-medium'>Feb 10, 2021</span>
						</p>
					</div>
					<div className='card'>
						<p className='plan-heading'>Amount Insured</p>
						<p className='is-large'>
							90 <span className='is-medium'>USD</span>
						</p>
					</div>
				</div>
			</div>
		);
	}
}

export default Estimation;
