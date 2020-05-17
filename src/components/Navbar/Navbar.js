import React, { Component } from 'react';

import './Navbar.css';

class Navbar extends Component {
	componentDidMount() {
		const toggleButton = document.getElementsByClassName(
			'toggle-button'
		)[0];
		const navbarLinks = document.getElementsByClassName('navbar-links')[0];

		toggleButton.addEventListener('click', () => {
			navbarLinks.classList.toggle('active');
		});
	}

	render() {
		return (
			<div className='nav-container'>
				<nav className='navbar'>
					<a href='#' className='toggle-button'>
						<span className='bar'></span>
						<span className='bar'></span>
						<span className='bar'></span>
					</a>
					<div className='navbar-links'>
						<ul>
							<li>
								<a
									href='https://docs.savedai.xyz'
									target='_blank'
									rel='noopener noreferrer'
								>
									Developers
								</a>
							</li>
							<li>
								<a
									href='https://faq.savedai.xyz'
									target='_blank'
									rel='noopener noreferrer'
								>
									FAQ
								</a>
							</li>
							<li>
								<a
									href='https://medium.com/savedai'
									target='_blank'
									rel='noopener noreferrer'
								>
									Blog
								</a>
							</li>
						</ul>
					</div>

					<div className='brand-title'>
						<img
							src='https://savedai.xyz/img/services/saveDAI_logo_transparent.png'
							width='50px'
							height='50px'
							alt=''
						/>
						<p
							style={{
								fontWeight: 700,
								marginLeft: '5px',
								color: 'rgb(105, 98, 98)',
							}}
						>
							saveDAI
						</p>
					</div>
				</nav>
			</div>
		);
	}
}

export default Navbar;
