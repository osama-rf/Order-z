import React, { Component, useState, useEffect } from "react";
import next from '../img/next.png';
import navbar from '../img/navbar.png';
import '../css/main.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { categories } from "./menu-item";
export default function Component2(props) {
	let [item, setitem] = useState([
		{ id: "item-1", menuitem: "Pizza", itemPic: '../img/piza.png', status: 'active' },
		{ id: "item-2", menuitem: "Burger", itemPic: '../img/burger.png', status: 'inactive' },
		{ id: "item-3", menuitem: "Egg", itemPic: '../img/egg.png', status: 'inactive' },
		{ id: "item-4", menuitem: "Pizza", itemPic: '../img/piza.png', status: 'active' },
		{ id: "item-5", menuitem: "Burger", itemPic: '../img/burger.png', status: 'inactive' },
		{ id: "item-6", menuitem: "Egg", itemPic: '../img/egg.png', status: 'inactive' }
	])
	let [k, setk] = useState("1")
	let [c, setc] = useState('Pizza')
	const submitHandler = props.submit;
	const imgHandler = props.img;
	const headingHandler = props.title;
	const priceHandler = props.price;
	const desHandler = props.des;
	const backValueSet = props.back;
	const backValueGet = props.backVal;

	useEffect(() => {
		if (backValueGet == true) {
			var pg1 = document.getElementById("page-1");
			var pg2 = document.getElementById("page-2");
			pg1.classList.remove("show");
			pg1.classList.add("hide");
			pg2.classList.remove("hide");
			pg2.classList.add("show");
		}
	});

	function handleDrag(event) {
		var myElement = document.getElementById("myElementID");
		myElement.classList.add("animate__animated");
		myElement.classList.add("animate__slideOutUp");
		var pg1 = document.getElementById("page-1");
		var pg2 = document.getElementById("page-2");
		window.setInterval(function () {
			pg1.classList.remove("show");
			pg1.classList.add("hide");
			pg2.classList.remove("hide");
			pg2.classList.add("show");
		}, 500);
	}



	function onNext(e, img, price, description, title) {
		e.preventDefault();
		submitHandler(3);
		imgHandler(img);
		headingHandler(title);
		priceHandler(price);
		desHandler(description);
		backValueSet(true)
	}

	var settings = {
		dots: true,
		infinite: true,
		speed: 500,
		slidesToShow: 3,
		slidesToScroll: 1,
		focusOnSelect: false
	};

	function ChangeActiveStatus(id, barid) {
		setk(k + 1)
		let data = item
		data.map((item) => {
			if (item.id == id) {
				item.status = "active"
				setc(item.menuitem)
			} else {
				item.status = "inactive"
			}
		})
		setitem(data)
	}

	function onBack(e) {
		e.preventDefault();
		submitHandler(1);
	}

	return (

		<div className="all-content">
			<div id="page-1" className="show">
				<div className="pink-back overflow">
					<div className="bottom-content">
						<div style={{ cursor: "pointer", width: "90px", margin: "auto" }} onDrag={handleDrag} draggable id="myElementID">
							<div className="">^</div>
							<div className="swipe-line">Swipe up</div>
						</div>
						<div className="name-line" style={{ marginTop: "20px" }}>Developed by</div>
						<div className="name-line">Name</div>

					</div>
				</div>
			</div>

			<div id="page-2" className="hide">
				<div className="nav-container">
					<div className="navbar-btn">
						<img src={navbar} />
					</div>
					<div className="next-btn" onClick={onBack}>
						<img src={next} />
					</div>
				</div>
				<h2 className="menu-heading">Menu</h2>
				<div className="slide-container">
					<Slider {...settings}>
						{
							item.map((item) => {
								let barid = item.id + '-bar'
								return (
									<div key={item.id} style={{ outline: "0px solid transparent" }} className="menuslide" id={item.id} onClick={() => ChangeActiveStatus(item.id, barid)}>
										<img src={item.itemPic} className="img-rounded menu-img" />
										{item.status == "active" ?
											<>
												<h3 className="menu-subheading h3-active">{item.menuitem}</h3>
												<span className="active-hr" id={barid}></span>

											</>
											: <>
												<h3 className="menu-subheading">{item.menuitem}</h3>
												<span className="" id={barid}></span>
											</>
										}

									</div>
								)
							})
						}

					</Slider>
					<h2 className="item-heading">{c}</h2>
					<div className="scroll-item">
						{categories.map((item) => {
							return (
								<div key={item.key}>
									{item.category == c ?

										<div key={item.key} className="item-card" onClick={(e) => onNext(e, item.img, item.price, item.description, item.itemname)}>
											<div key={item.key} className="row">
												<div className="col-4">
													<img src={item.img} className="img-rounded menu-item-img" />
												</div>
												<div className="col-8">
													<h2 className="item-c-heading">{item.itemname}</h2>
													<p className="item-price">{item.price}</p>
													<p className="item-description">
														{item.description}	</p>
												</div>
											</div>
										</div>

										: ''}
								</div>
							)
						})}
					</div>
				</div>
			</div>

		</div>
	)
}
