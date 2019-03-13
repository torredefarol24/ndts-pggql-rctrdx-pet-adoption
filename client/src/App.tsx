import React, { Component } from "react";

class App extends Component {
	render() {
		const now = new Date().toISOString().split("T")
		return (
			<div>
				<h1 className="title is-1">Hey From React</h1>
				<p> <strong> {now[1]}</strong> ({now[0]})</p>
			</div>
		);
	}
}

export default App;
