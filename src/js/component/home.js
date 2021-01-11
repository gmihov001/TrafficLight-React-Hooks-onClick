import React, { useState } from "react";
import PropTypes from "prop-types";

export function Home(props) {
	const [color, setColor] = useState(null);

	return (
		<div className="text-center mt-5">
			<h1>Traffic Light</h1>
			<div className="traffic-light">
				<div
					className={
						color === "red" ? "red active glass" : "red inactive"
					}
					onClick={() => setColor("red")}
				/>
				<div
					className={
						color === "yellow"
							? "yellow active glass"
							: "yellow inactive"
					}
					onClick={() => setColor("yellow")}
				/>
				<div
					className={
						color === "green"
							? "green active glass"
							: "green inactive"
					}
					onClick={() => setColor("green")}
				/>
			</div>
		</div>
	);
}

Home.propTypes = {
	color: PropTypes.string
};
