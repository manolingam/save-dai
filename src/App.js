import React from 'react';

import Web3ContextProvider from './context/Web3Context';

import Navbar from './components/Navbar/Navbar';
import ComponentSwitcher from './components/Switcher/ComponentSwitcher';

import './App.css';

class App extends React.Component {
	render() {
		return (
			<div className='App'>
				<Web3ContextProvider>
					<Navbar />
					<div className='body-container'>
						<ComponentSwitcher />
					</div>
				</Web3ContextProvider>
			</div>
		);
	}
}

export default App;
