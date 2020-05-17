import React from 'react';

import Web3ContextProvider from './context/Web3Context';

import Navbar from './components/Navbar/Navbar';
import RouteSwitcher from './pages/RouteSwitcher';

import './App.css';

class App extends React.Component {
	render() {
		return (
			<div className='App'>
				<Web3ContextProvider>
					<Navbar />
					<div className='body-container'>
						<RouteSwitcher />
					</div>
				</Web3ContextProvider>
			</div>
		);
	}
}

export default App;
