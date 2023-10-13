import "./App.css";
import { Route, Routes } from "react-router-dom";
import List from "./Pages/List";
import Home from "./Pages/Home";

function App() {
	return (
		<div className="App">
			{/* Defining routes path and rendering components as element */}
			<Routes>
				<Route path="/home" element={<Home />} />
				<Route path="/list" element={<List />} />
			</Routes>
		</div>
	);
}

export default App;
