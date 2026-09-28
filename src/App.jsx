import{ BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.css";
import Header from "./Statics/Header";
import KanbaBoard from "./Pages/KanbaBoard";
import About from "./Pages/About";
import Whywebuilt  from "./component/ui/about/Whywebuilt";


function App() {
	return (
		<BrowserRouter>

		<Routes>
			<Route path="/" element={<KanbaBoard />} />
			<Route path="/about" element={<About />} />
			<Route path="/why-we-built-this" element={<Whywebuilt />} />
        </Routes>
	 </BrowserRouter>
	);
}

export default App;
