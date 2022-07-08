import React, { useEffect, useState } from "react";
import "./App.css";
import Text from "./components/Text";
import Author from "./components/Author";
import IconsShere from "./components/IconsShere";

let allColors = [
	"primary",
	"secondary",
	"success",
	"danger",
	"warning",
	"info"
];

const App = () => {
	const [color, setColor] = useState(allColors[0]);
	const [quotes, setQuotes] = useState([]);

	useEffect(() => {
		getData();
	}, []);

	const clickRandonColor = () => {
		let idxColor = Math.floor(Math.random() * allColors.length);
		setColor(allColors[idxColor]);
	};

	const getData = async () => {
		const data = await fetch(
			"https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json"
		);
		const allQuotes = await data.json();
		const lenAllQuotes = await allQuotes.quotes.length;
		const randomIdx = await Math.floor(Math.random() * lenAllQuotes);
		const randomQuote = await allQuotes.quotes[randomIdx];
		setQuotes(randomQuote);
	};

	return (
		<div className={`container-fluid bg-${color}`}>
			<div className="h-100 d-flex justify-content-center align-items-center row">
				<div
					className="card rounded-3 p-3 col-10 col-sm-6 col-lg-9"
					id="quote-box"
				>
					<Text color={color} quote={quotes.quote} />
					<Author color={color} author={quotes.author} />
					<div className="text-center mt-2">
						<button
							type="button"
							className={`btn btn-${color} w-50`}
							onClick={() => {
								getData();
								clickRandonColor();
							}}
							style={{ color: "white" }}
							id="new-quote"
						>
							New Quote
						</button>
					</div>
					<IconsShere color={color} />
				</div>
			</div>
		</div>
	);
};

export default App;
