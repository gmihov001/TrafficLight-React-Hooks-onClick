import React, { useState } from "react";

//create your first component
export function Home() {
	const [color, setColor] = useState("red");
	return (
		<div className="text-center mt-5">
			<h1>Traffic Light</h1>
			<div className="traffic-light">
				<div className="red">RED</div>
				<div className="yellow">Yellow</div>
				<div className="green">Green</div>
			</div>
			<button className="btn btn-success">
				If you see this green button... bootstrap is working
			</button>
		</div>
	);
}
