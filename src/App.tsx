import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import Layout from './components/layout/Layout';
import Home from './pages/Home';
import About from './pages/About';

function App() {
	const [isHelpOpen, setIsHelpOpen] = useState(false);

	return (
		<Router>
			<Layout onHelpClick={() => setIsHelpOpen(true)}>
				<Routes>
					<Route path="/" element={<Home isHelpOpen={isHelpOpen} onHelpClose={() => setIsHelpOpen(false)} />} />
					<Route path="/about" element={<About isHelpOpen={isHelpOpen} onHelpClose={() => setIsHelpOpen(false)} />} />
				</Routes>
			</Layout>
		</Router>
	);
}

export default App;
