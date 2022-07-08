import React from "react";

const Text = props => {
	return (
		<h1 className={`text-${props.color} text-center card-title`} id="text">
			"{props.quote}"
		</h1>
	);
};

export default Text;
