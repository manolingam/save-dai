import React from 'react';
import Alert from '@material-ui/lab/Alert';
import Collapse from '@material-ui/core/Collapse';

import { Web3Context } from '../../context/Web3Context';

import Estimation from '../Estimation/Estimation';

import 'bulma';

import './Intro.css';

class Intro extends React.Component {
	static contextType = Web3Context;
	render() {
		const { connectAccount } = this.context;
		return (
			<div className='intro-container'>
				<div className='intro'>
					<Collapse in={true}>
						<Alert
							icon={false}
							style={{ backgroundColor: 'white' }}
						>
							<div className='details'>
								<p>Welcome to saveDai!</p>
								<p>
									saveDAI is an easy way to open a
									high-interest, insured savings account--all
									without a bank!
								</p>
								<p>
									To open an account, all you need to do is
									make a deposit.
								</p>
								<p>
									Your saveDAI account will start earning
									interest instantly, and your deposit will be
									protected until February 10, 2021, when the
									insurance expires.
								</p>
								<p>
									Learn more in our{' '}
									<a
										href='http://docs.savedai.xyz'
										target='_blank'
										rel='noopener noreferrer'
									>
										Frequently Asked Questions.
									</a>
								</p>
								<p id='note-message'>
									Note: This is alpha software; the code has
									not been audited. Please exercise caution
									and do not deposit more than you can afford
									to lose.
								</p>
							</div>
						</Alert>
					</Collapse>
					<button id='connect-button' onClick={connectAccount}>
						Connect to get started
					</button>
				</div>
				<Estimation />
			</div>
		);
	}
}

export default Intro;
