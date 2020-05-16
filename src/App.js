import React from 'react';

import Web3ContextProvider from './context/Web3Context';

import Navbar from './components/Navbar/Navbar';
import RouteSwitcher from './pages/RouteSwitcher';

import './App.css';

class App extends React.Component {
	render() {
		return (
			<div className='App'>
				<Navbar />
				<div className='body-container'>
					<Web3ContextProvider>
						<RouteSwitcher />
					</Web3ContextProvider>
				</div>
			</div>
		);
	}
}

export default App;
