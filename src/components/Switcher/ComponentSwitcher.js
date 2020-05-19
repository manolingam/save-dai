import React, { Component } from 'react';

import { Web3Context } from '../../context/Web3Context';

import TabSwitcher from './TabSwitcher/TabSwitcher';
import Intro from '../Intro/Intro';

class ComponentSwitcher extends Component {
	static contextType = Web3Context;
	render() {
		var { address } = this.context;
		return address ? <TabSwitcher address={address} /> : <Intro />;
	}
}

export default ComponentSwitcher;
