import React, { useState } from "react";
import PropTypes from "prop-types";

export function Home(props) {
	//const [color, setColor] = useState(null);

	return (
		<div className="text-center mt-5">
			<h1>Traffic Light</h1>
			<div className="traffic-light">
				<div
					className={
						color === "red" ? "red active" : "red inactive"
					}
					onClick={() => setColor("red")}
				/>
				<div
					className={
						color === "yellow"
							? "yellow active"
							: "yellow inactive"
					}
					onClick={() => setColor("yellow")}
				/>
				<div
					className={
						color === "green"
							? "green active"
							: "green inactive"
					}
					onClick={() => setColor("green")}
				/>
			</div>
			<button className="btn btn-success">
				If you see this green button... bootstrap is working
			</button>
		</div>
	);
}

Home.propTypes = {
	color: PropTypes.string
};
