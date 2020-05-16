import React, { Component } from 'react';

import { Web3Context } from '../context/Web3Context';

import TabSwitcher from './TabSwitcher/TabSwitcher';
import Intro from '../components/Intro/Intro';

class RouteSwitcher extends Component {
	static contextType = Web3Context;
	render() {
		var { address } = this.context;
		return address ? <TabSwitcher /> : <Intro />;
	}
}

export default RouteSwitcher;
