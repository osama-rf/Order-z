import React, { useEffect, useState } from "react";
import navbar from '../img/navbar.png';
import next from '../img/next.png';
<link href="//maxcdn.bootstrapcdn.com/bootstrap/3.3.0/css/bootstrap.min.css" rel="stylesheet" id="bootstrap-css"></link>

export default function Component3(props) {
	const [getVal, setVal] = useState(1);
	const submitHandler = props.submit;

	useEffect(() => {
		if (getVal < 0) {
			setVal(0)
		}
	}, [getVal]);

	function onBack(e) {
		e.preventDefault();
		submitHandler(2);
	}

	return (
		<div className="page3-content-container">
			<div className="pg3-top-img-area" style={{ backgroundImage: `url(${props.img})` }}>
				<div className="nav-container">
					<div className="navbar-btn" >
						<img src={navbar} />
					</div>
					<div className="next-btn" onClick={onBack} >
						<img src={next} />
					</div>
				</div>
			</div>
			<div className="pg3-content-area">
				<div className="pg3-line-1">
					<span className="pg3-line-1-left">{props.title}</span>
					<span className="pg3-line-1-right">{props.price}</span>
				</div>

				<div className="pg3-line-2">
					<span className="pg3-line-2-content">{props.des}</span>
				</div>
			</div>
		</div>
	);
}
