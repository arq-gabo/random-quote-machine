import React from "react";

const Author = props => (
	<h4 className={`text-${props.color} text-end pe-4`} id="author">
		- {props.author}
	</h4>
);

export default Author;
