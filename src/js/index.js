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
};

setInterval(runLight, 3000);
