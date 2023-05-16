import React from 'react';
import {Route, Routes} from "react-router-dom";
import NavbarTop from "./components/NavbarTop/NavbarTop.tsx";
import QueryComponents from "./pages/QueryComponents/QueryComponents.tsx";

const Router: React.FC = () => {
	return (
		<>
			<NavbarTop />

			<Routes>
				<Route path={"/query/:id"} element={<QueryComponents />} />
			</Routes>
		</>
	);
};

export default Router;
