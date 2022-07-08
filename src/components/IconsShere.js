import React from "react";
import "./IconsShere.css";
import {
	BsTwitter,
	BsFacebook,
	BsInstagram,
	BsTelegram,
	BsWhatsapp
} from "react-icons/bs";

const IconsShere = props => {
	return (
		<div className="row mt-2">
			<a
				href="https://www.twitter.com/intent/tweet"
				target="_top"
				rel="noreferrer"
				className={`col text-${props.color} text-center fs-2`}
				id="tweet-quote"
			>
				<BsTwitter className="icon" />
			</a>
			<a
				href="https://www.facebook.com"
				target="_blank"
				rel="noreferrer"
				className={`col text-${props.color} text-center fs-2`}
			>
				<BsFacebook className="icon" />
			</a>
			<a
				href="https://www.instagram.com"
				target="_blank"
				rel="noreferrer"
				className={`col text-${props.color} text-center fs-2`}
			>
				<BsInstagram className="icon" />
			</a>
			<a
				href="https://www.telegram.org"
				target="_blank"
				rel="noreferrer"
				className={`col text-${props.color} text-center fs-2`}
			>
				<BsTelegram className="icon" />
			</a>
			<a
				href="https://www.whatsapp.com"
				target="_blank"
				rel="noreferrer"
				className={`col text-${props.color} text-center fs-2`}
			>
				<BsWhatsapp className="icon" />
			</a>
		</div>
	);
};

export default IconsShere;
