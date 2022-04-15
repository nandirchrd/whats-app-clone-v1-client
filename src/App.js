import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import LandingPage from './pages/landingPage';

function App() {
	const [user, setUser] = useState('');
	return (
		<Router>
			<Routes>
				<Route
					index
					path='/'
					element={<LandingPage user={user} setUser={setUser} />}
				/>
				<Route path='/home' element={<Home user={user} />} />
			</Routes>
		</Router>
	);
}

export default App;
