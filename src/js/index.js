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
// var prevColor = "yellow";

// const runLight = () => {
// 	if (prevColor == "red") {
// 		ReactDOM.render(<Home color="green" />, document.querySelector("#app"));
// 		prevColor = "green";
// 	} else if (prevColor == "green") {
// 		ReactDOM.render(
// 			<Home color="yellow" />,
// 			document.querySelector("#app")
// 		);
// 		prevColor = "yellow";
// 	} else if (prevColor == "yellow") {
// 		ReactDOM.render(<Home color="red" />, document.querySelector("#app"));
// 		prevColor = "red";
// 	}
// };

// setInterval(runLight, 3000);

ReactDOM.render(<Home />, document.querySelector("#app"));
