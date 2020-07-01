import React, { useState } from "react";

//create your first component
export function Home() {
	const [color, setColor] = useState(null);

	return (
		<div className="text-center mt-5">
			<h1>Traffic Light</h1>
			<div className="traffic-light">
				<div
					className={color === "red" ? "red active" : "red inactive"}
					onClick={() => setColor("red")}>
					Red
				</div>
				<div
					className={
						color === "yellow" ? "yellow active" : "yellow inactive"
					}
					onClick={() => setColor("yellow")}>
					Yellow
				</div>
                <div
					className={
						color === "green" ? "green active" : "green inactive"
					}
					onClick={() => setColor("green")}>
					Green
				</div>
			</div>
			<button className="btn btn-success">
				If you see this green button... bootstrap is working
			</button>
		</div>
	);
}
