import React from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Country from "./components/Country/Country";

const App = () => {
	return (
		<Router>
			<div>
				<Navbar />
				<Switch>
					<Route path="/" exact component={Home} />
					<Route path="/country/:code" exact component={Country} />
				</Switch>
			</div>
		</Router>
	);
};

export default App;
