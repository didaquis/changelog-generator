import React from 'react'

import Header from '../components/Header'
import Footer from '../components/Footer'

const Layout = (props) => {
	return (
		<React.StrictMode>
			<div className="bg-dark h-100 min-vh-100 d-flex flex-column">
				<Header/>
				<main className="container mb-3">
					{props.children}
				</main>
				<Footer />
			</div>
		</React.StrictMode>
	)
}

export default Layout