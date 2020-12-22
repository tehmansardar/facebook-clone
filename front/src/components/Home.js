import React from 'react';
import Sidebar from './Sidebar';
// import Feed from './Feed';
import './css/Home.css';

const Home = () => {
	return (
		<div className='home'>
			<Sidebar />
			{/* <Feed /> */}
		</div>
	);
};

export default Home;
