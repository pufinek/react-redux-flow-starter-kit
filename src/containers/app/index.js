
import React from 'react';
import { Route, Link } from 'react-router-dom';
import Home from '../home';
import About from '../about';
import logo from './logo.svg';
import './App.css';

const App = () => (
	<div className="App">
		<header className="App-header">
				<img src={logo} className="App-logo" alt="logo" />
				<h1 className="App-title">Welcome to React</h1>
		</header>
		<nav>
			<Link to="/">Home</Link>
			<Link to="/about-us">About</Link>
		</nav>

		<main>
			<Route exact path="/" component={Home} />
			<Route exact path="/about-us" component={About} />
		</main>
	</div>
)

export default App