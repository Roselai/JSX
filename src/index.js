//import the React and ReactDOM libraries

import React from 'react';
import ReactDOM from 'react-dom';

function getButtonText() {
	return 'Click on me!';
}

// Creat a react component
const App = () => {
	return(
		<div>
		  <label className="label" for="name">Enter name:</label>
		  <input type="text" id="name"/>
		  <button style={{ backgroundColor:'blue', color:'white' }}>
		  	{getButtonText()}
		  </button>
		</div>
	);
};

// Take the react component and show it on the screen
ReactDOM.render(
	<App />, document.querySelector('#root')
);