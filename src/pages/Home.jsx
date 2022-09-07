import React from 'react';
import '@styles/Home.scss';
import HomeContent from '@containers/HomeContent'

const Home = () => {
	return (
		<>
			<div className='Home'>				
				<h1> Pagina Home</h1>
				<HomeContent></HomeContent>
			</div>

		</>
	);
}

export default Home;
