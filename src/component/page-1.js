import React, { Component } from "react";
import navbar from '../img/navbar.png';
import ReactDOM from 'react-dom';
import 'animate.css';


export default function Component1(props) {
	const submitHandler = props.submit;

	function goToNextPage(e) {
		e.preventDefault();
		submitHandler(2);
	}

	function handleDrag(event) {
		console.log("Swipe is working")
		var myElement = document.getElementById("myElementID");
		myElement.classList.add("animate__animated");
		myElement.classList.add("animate__slideOutUp");
	}

	return (
		<div>
			<div className="pink-back overflow">
				<div className="bottom-content">
					<div style={{ cursor: "pointer", width: "90px", margin: "auto" }} onDrag={handleDrag} draggable id="myElementID">
						<div className="">^</div>
						<div className="swipe-line">Swipe up</div>
					</div>
					<div className="name-line" style={{ marginTop: "20px" }}></div>
					<div className="name-line"></div>
				</div>
			</div>
		</div>
	)
}
