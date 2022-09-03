import React, { Component, useState } from "react";
import Component1 from "../component/page-1";
import Component2 from "../component/page-2";
import Component3 from "../component/page-3";
import "../css/main.css";
import 'animate.css';
export default function Home() {
	const [getSwipe, setSwipe] = useState(2);
	const [getImg, setImg] = useState();
	const [getTitle, setTitle] = useState();
	const [getprice, setprice] = useState();
	const [getDes, setDes] = useState();
	const [getBack, setBack] = useState(false);

	function handleDrag(event) {
		var myElement = document.getElementById("myElementID");
		myElement.classList.add("animate__animated");
		myElement.classList.add("animate__slideOutUp");
	}

	function PageSelect() {
		const pageNo = getSwipe;
		if (pageNo == 1) {
			return <Component1 submit={setSwipe} />;
		} else if (pageNo == 2) {
			return <Component2 submit={setSwipe} img={setImg} title={setTitle} price={setprice} des={setDes} back={setBack} backVal={getBack} />;
		} else if (pageNo == 3) {
			return <Component3 submit={setSwipe} img={getImg} title={getTitle} price={getprice} des={getDes} />;
		}
	}
	return (
		<div>
			<PageSelect />,
		</div>
	);
}
