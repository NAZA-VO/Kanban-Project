import{ BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.css";
import Header from "./Statics/Header";
import KanbaBoard from "./Pages/KanbaBoard";
import About from "./Pages/About";
import Whywebuilt  from "./component/ui/about/Whywebuilt";


function App() {
	return (
		<BrowserRouter>
		<div className=" flex  min-h-screen flex-col">
		<Header />

		<main className="flex flex-1 flex-col">
		<Routes>
			<Route path="/" element={<KanbaBoard />} />
			<Route path="/about" element={<About />} />
			<Route path="/why-we-built-this" element={<Whywebuilt />} />
        </Routes>
		</main>
		</div>
	 </BrowserRouter>
	);
}

export default App;
