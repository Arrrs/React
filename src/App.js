import React from "react";

import CounterCl from './CounterClass';
import CounterFn from './CounterFn';

function App() {
	return <div>
		<h2>Test Class</h2>
		<CounterCl/>
		<hr />
		<h2>Test Fn</h2>
		<CounterFn /> 
		<hr />
	</div>
}

export default App;