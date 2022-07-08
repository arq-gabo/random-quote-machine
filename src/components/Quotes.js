import React, { useState, useEffect } from "react";

export default function Quotes() {
	const [quotes, setQuotes] = useState([]);

	useEffect(() => {
		getData();
	}, []);

	const getData = async () => {
		const data = await fetch(
			"https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json"
		);
		const allQuotes = await data.json();
		//setQuotes(allQuotes.quotes);
		const lenQuotes = allQuotes.quotes.length;
		const randomNum = Math.floor(Math.random() * lenQuotes);
		const randomQuote = allQuotes.quotes[randomNum];
		setQuotes(randomQuote);
	};

	return (
		<div>
			{quotes.quote} - {quotes.author}
		</div>
	);
}
