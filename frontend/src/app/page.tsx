"use client";
import axios from "axios";
import { useEffect } from "react";

export default function Home() {
	const title = "xyz";
	const ingredients = "asf";
	const steps = "asakjga";

	useEffect(() => {
		const fetch = async () => {
			const res = await axios.post("http://localhost:5000/recipe/add", {
				title,
				ingredients,
				steps,
			});

			console.log(res);
		};

		fetch();
	}, []);
	return <></>;
}
