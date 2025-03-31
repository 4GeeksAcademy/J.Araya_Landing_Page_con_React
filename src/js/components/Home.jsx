import React from "react";
import Navbar from './Navbar';
import Jumbotron from './Jumbotron';
import Footer from './Footer';
import Cards from '../view/Cards';


//create your first component
const Home = () => {
	return (
		<div className="text-center">
			<Navbar />
			<Jumbotron />
			<Cards />
			<Footer />
		</div>
	);
};

export default Home;