/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react';

import Identicon from 'identicon.js';

import 'bulma';

import Withdraw from '../../components/Withdraw/Withdraw';
import Claim from '../../components/Claim/Claim';
import Manage from '../../components/Manage/Manage';
import Deposit from '../../components/Deposit/Deposit';

import './TabSwitcher.css';

class TabSwitcher extends Component {
	state = {
		deposit: true,
		manage: false,
		claim: false,
		withdraw: false,
	};

	depositHandler = () => {
		this.setState({
			deposit: true,
			manage: false,
			withdraw: false,
			claim: false,
		});
	};

	manageHandler = () => {
		this.setState({
			deposit: false,
			manage: true,
			withdraw: false,
			claim: false,
		});
	};

	withdrawHandler = () => {
		this.setState({ withdraw: true, claim: false });
	};

	claimHandler = () => {
		this.setState({ withdraw: false, claim: true });
	};

	render() {
		return (
			<div className='tab-switcher'>
				<span className='tag is-black'>
					<img
						src={`data:image/png;base64,${new Identicon(
							this.props.address,
							30
						).toString()}`}
						alt='identicon'
					></img>
					<p>{this.props.address}</p>
				</span>
				<div class='tabs is-centered'>
					<ul>
						<li className={this.state.deposit ? 'is-active' : ''}>
							<a
								className='is-large deposit-tab'
								onClick={this.depositHandler}
							>
								Deposit
							</a>
						</li>
						<li className={this.state.manage ? 'is-active' : ''}>
							<a
								className='is-large manage-tab'
								onClick={this.manageHandler}
							>
								Manage
							</a>
						</li>
					</ul>
				</div>
				<p className='is-normal' style={{ marginBottom: '2rem' }}>
					Your saveDAI balance is{' '}
					<span className='is-large'>
						100 <span className='is-medium'>DAI</span>
					</span>{' '}
					<span
						className='is-medium'
						style={{ color: 'green', marginLeft: '5px' }}
					>
						($100.37)
					</span>
				</p>
				{this.state.deposit ? (
					<Deposit />
				) : this.state.withdraw ? (
					<Withdraw />
				) : this.state.claim ? (
					<Claim />
				) : (
					<Manage
						withdrawHandler={this.withdrawHandler}
						claimHandler={this.claimHandler}
					/>
				)}
			</div>
		);
	}
}

export default TabSwitcher;
