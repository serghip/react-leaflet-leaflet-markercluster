import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from '../containers/Layout';
import Home from '../pages/Home';
import NotFound from '../pages/NotFound';
import '../styles/global.css';


import AppContext from '../context/AppContext';
import useInitialState from '../hooks/useInitialState';

const App = () => {
	const initialState = useInitialState();
	return (
		<React.StrictMode>
		<AppContext.Provider value={initialState}>
			<BrowserRouter>
				<Layout>
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="*" element={<NotFound />} />
					</Routes>
				</Layout>
			</BrowserRouter>
		</AppContext.Provider>
		</React.StrictMode>
	);
}

export default App;
