import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/layout/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import { ErrorBoundaryProvider } from "./components/ErrorBoundary";

function App() {
	return (
		<ErrorBoundaryProvider>
			<Router>
				<Layout>
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="/about" element={<About />} />
					</Routes>
				</Layout>
			</Router>
		</ErrorBoundaryProvider>
	);
}

export default App;
