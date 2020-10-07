//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

//include bootstrap npm library into the bundle
import "bootstrap";

//include your index.scss file into the bundle
import "../styles/index.scss";

//import your own components
import { Home } from "./component/home.js";

//render your react application
var prevColor = "";
var nextColor = "";

const runLight = () => {
	if (prevColor == "red") {
		ReactDOM.render(<Home on="green" />, document.querySelector("#app"));
		prevColor = "green";
	}
	if (prevColor == "green") {
		ReactDOM.render(<Home on="yellow" />, document.querySelector("#app"));
		prevColor = "yellow";
	}
	if (prevColor == "yellow") {
		ReactDOM.render(<Home on="red" />, document.querySelector("#app"));
		prevColor = "red";
	}
};

setInterval(runLight, 3000);
