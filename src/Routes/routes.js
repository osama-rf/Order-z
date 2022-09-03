import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "../Pages/home";

class MyRoutes extends React.Component {
	render() {
		return (
			<div>
				<Router>
					<Switch>
						<Route exact path="/" component={Home} />
					
					</Switch>
				</Router>
			</div>
		);
	}
}
export default MyRoutes;