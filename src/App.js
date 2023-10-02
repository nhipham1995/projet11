import logo from "./logo.svg";
import "./App.css";
import { Link, Route, Routes } from "react-router-dom";
import List from "./Pages/List";
import Home from "./Pages/Home";

function App() {
	return (
		<div className="App">
			<ul style={{ display: "flex" }}>
				<Link to="/home" class="list">
					Home
				</Link>
				<Link to="/list" class="list">
					List
				</Link>
			</ul>

			{/* Defining routes path and rendering components as element */}
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/list" element={<List />} />
			</Routes>
		</div>
	);
}

export default App;
